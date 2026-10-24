import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDU-Craft | Institute — Premium Coaching in Kolkata",
  description: "EDU-Craft Institute, Garden Reach, Kolkata provides structured Foundation, Higher Secondary, IIT-JEE, NEET and Test Series programmes with conceptual learning, practice and personalized academic guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-educraft-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
