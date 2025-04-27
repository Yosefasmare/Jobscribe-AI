import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

if(!process.env.GEMINI_API_KEY){
  throw new Error("GEMINI_API_KEY is not defined");
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


export async function POST(req:NextRequest ,res:NextResponse) {
    const { resume , jopdisc } = await req.json();

    const prompt = `
    You are a professional career coach and resume expert.
    
    Given the following information:
    - Candidate Resume: ${resume}
    - Job Description: ${jopdisc}
    
    Your task is to:
    1. Analyze both documents.
    2. Find the candidate’s strongest relevant skills.
    3. Find missing qualifications (if any) between resume and job.
    4. Write a tailored, professional Cover Letter for the candidate to apply for this job.
    5. Make the cover letter sound natural, confident, and well-structured.
    6. Keep it around 250–400 words.
    
    The cover letter should:
    - Start with a strong opening sentence.
    - Highlight the candidate’s most relevant achievements and skills.
    - Mention why the candidate is a great fit for the company and role.
    - Finish with a positive, polite closing.
    
    After writing the letter, return two clearly separated versions:
    
    1. **Plain Text Version**: the letter in plain text, properly formatted with paragraphs and line breaks.
    2. **HTML Version**: the same letter formatted in clean HTML. Use <p> tags for paragraphs and <br> tags for soft breaks if needed.
    
    Important:
    - Do NOT include any extra commentary, headers, or explanations.
    - Only return the two letter versions clearly labeled as "Plain Text:" and "HTML:".
    
    Start now.
    `;
    

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      const text = response.text;
      const [plainTextPart, htmlPart] = text!.split('HTML:');

      const plainText = plainTextPart.replace('Plain Text:', '').trim();
      const htmlText = htmlPart.trim();



      return NextResponse.json({ plainText , htmlText });
    
}


