'use client';

import { extractTextFromDocx, extractTextFromPDF } from '@/lib/utils';
import React from 'react';
import { useLetterstore } from '@/lib/store';
import { useRouter } from 'next/navigation';

const UploadArea = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [jobDescription, setJobDescription] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);


  const {setLetter,setTxtLetter} = useLetterstore()
  const router = useRouter();

  const handleGenerateCoverLetter = async () => {
    if (!file) {
      alert('Please upload a file');
      return;
    }

    if (!jobDescription) {
      alert('Please enter a job description');
      return;
    }
    setLoading(true);
    

    let resumeText = '';

    if (file.type === 'application/pdf') {
      resumeText = await extractTextFromPDF(file);
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      resumeText = await extractTextFromDocx(file);
    } else {
      resumeText = await file.text();
    }
    
    if (!resumeText.trim()) {
      alert('Failed to extract text from file');
      throw new Error('Failed to extract text from file');
    }
    try {
      const res = await fetch('/api/genai',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resume: resumeText,
          jopdisc: jobDescription,
        }),
      })

      if(!res.ok){
        throw new Error('Failed to generate cover letter');
      }

      const data = await res.json();
      
   
      setLetter(data.htmlText)
      setTxtLetter(data.plainText)

      router.push('/result')

    } catch (error) {
      console.log(error)
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md p-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="resume"
        >
          Resume (TXT, PDF or DOCX)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="resume"
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={(e) => setFile(e.target.files![0])}
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="jobDescription"
        >
          Job Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="jobDescription"
          rows={4}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleGenerateCoverLetter}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-1">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Generating...
            </div>
          ) : (
            'Generate Cover Letter'
          )}
        </button>
      </div>
    </div>
  );
};

export default UploadArea;
