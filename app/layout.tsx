import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobscribe-AI",
  description:
    "Jobscribe-AI - AI-Powered Cover Letter Generator. Instantly generate personalized cover letters based on a job description and your resume using AI (Gemini or GPT).",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
        <meta
          name="google-site-verification"
          content="pKqi3lUN-9CZC67vlPYStwZSQNuSfea94I4gdNNdgk0"
        />
    </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
