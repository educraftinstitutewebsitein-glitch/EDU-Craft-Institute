import { NextResponse } from "next/server";

export interface EnquiryPayload {
  studentName: string;
  guardianName?: string;
  studentPhone: string;
  guardianPhone?: string;
  email?: string;
  currentClass: string;
  schoolBoard?: string;
  programme: string;
  learningMode: string;
  academicSession: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data: EnquiryPayload = await request.json();

    // Required fields check
    if (!data.studentName || !data.studentPhone || !data.programme) {
      return NextResponse.json(
        { success: false, message: "Required fields are missing." },
        { status: 400 }
      );
    }

    // Indian phone number sanity check (at least 10 digits)
    const cleanPhone = data.studentPhone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    // Log enquiry for institute records
    console.log("[EDU-Craft Admission Enquiry Received]:", {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    /**
     * SUPABASE INTEGRATION BOUNDARY:
     * When Supabase credentials (NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY)
     * are configured in the project environment, insert into the `admission_enquiries` table:
     *
     * Example Supabase SQL Schema:
     * create table admission_enquiries (
     *   id uuid default gen_random_uuid() primary key,
     *   created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     *   student_name text not null,
     *   guardian_name text,
     *   student_phone text not null,
     *   guardian_phone text,
     *   email text,
     *   current_class text not null,
     *   school_board text,
     *   programme text not null,
     *   learning_mode text not null,
     *   academic_session text not null,
     *   message text
     * );
     */

    return NextResponse.json({
      success: true,
      message:
        "Your enquiry has been received by EDU-Craft | Institute. Our team will contact you shortly.",
      referenceId: `EC-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("Error processing admission enquiry:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your enquiry. Please try calling us directly." },
      { status: 500 }
    );
  }
}
