'use client';
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLetterstore } from '@/lib/store';
import Link from 'next/link';

const ResultPage = () => {
  const { letter, txtLetter } = useLetterstore();
  const [copyConfirmation, setCopyConfirmation] = useState(false);
  const [downloadConfirmation, setDownloadConfirmation] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(txtLetter)
      .then(() => {
        setCopyConfirmation(true);
        setTimeout(() => {
          setCopyConfirmation(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy letter: ', err);
      });
  };

  const handleDownload = () => {
    const blob = new Blob([txtLetter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cover_letter.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadConfirmation(true);
    setTimeout(() => {
      setDownloadConfirmation(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="max-w-2xl bg-white rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-2xl text-gray-800 mb-4">Here’s Your Tailored Cover Letter!</h1>
        <div className="leading-relaxed text-gray-700 mb-6 max-h-96 overflow-y-scroll p-2">
          {/* Letter Content Goes Here */}
          <div dangerouslySetInnerHTML={{ __html: letter }} />
        </div>
        <div className="flex justify-center space-x-4 relative">
          <button
            onClick={handleCopy}
            className="bg-indigo-500 text-white font-semibold rounded-md py-2 px-4 hover:bg-indigo-600 transition-colors duration-200"
          >
            Copy Letter
          </button>
          <button
            onClick={handleDownload}
            className="border border-gray-300 text-gray-700 font-semibold rounded-md py-2 px-4 hover:bg-gray-100 transition-colors duration-200"
          >
            Download TEXT File
          </button>
          <Link
            href={'/upload'}
            className="border border-gray-300 text-gray-700 font-semibold rounded-md py-2 px-4 hover:bg-gray-100 transition-colors duration-200"
          >
            Regenerate
          </Link>

          {copyConfirmation && (
            <div className="absolute top-full left-0 mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md animate-fade-in-down">
              Letter copied to clipboard!
            </div>
          )}

        </div>
      </motion.div>
          {downloadConfirmation && (
            <motion.div
            initial={{ opacity: 0,y: -20 }}
            animate={{ opacity: 1,y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md animate-fade-in-down">
              File downloaded!
            </motion.div>
          )}
    </div>
  );
};

export default ResultPage;
