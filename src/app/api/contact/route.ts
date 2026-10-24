import { NextResponse } from "next/server";

export interface ContactPayload {
  fullName: string;
  mobile: string;
  email?: string;
  visitorType: "Student" | "Parent/Guardian" | "Other";
  enquiryType: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    // Required fields check
    if (!data.fullName || !data.mobile || !data.enquiryType || !data.message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Phone validation
    const cleanPhone = data.mobile.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    // Log contact enquiry for institute records
    console.log("[EDU-Craft Contact Enquiry Received]:", {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    /**
     * SUPABASE INTEGRATION BOUNDARY:
     * When Supabase credentials (NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY)
     * are configured in the project environment, insert into the `contact_enquiries` table:
     *
     * Example Supabase SQL Schema:
     * create table contact_enquiries (
     *   id uuid default gen_random_uuid() primary key,
     *   created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     *   full_name text not null,
     *   mobile text not null,
     *   email text,
     *   visitor_type text not null,
     *   enquiry_type text not null,
     *   message text not null
     * );
     *
     * RLS Policy:
     * alter table contact_enquiries enable row level security;
     * create policy "Allow public anonymous inserts" on contact_enquiries for insert with check (true);
     */

    return NextResponse.json({
      success: true,
      message:
        "Your message has been received by EDU-Craft | Institute. Our team will get back to you shortly.",
      referenceId: `CN-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("Error processing contact enquiry:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while sending your message. Please reach us via WhatsApp or Phone." },
      { status: 500 }
    );
  }
}
