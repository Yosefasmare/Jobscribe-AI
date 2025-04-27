import UploadArea from '@/components/UploadArea';
import React from 'react';

const UploadPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
      <h1 className="text-2xl font-bold mb-4">
        Upload Your Resume and Job Description
      </h1>
      <UploadArea />
    </div>
  );
};

export default UploadPage;
