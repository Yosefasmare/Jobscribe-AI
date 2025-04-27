import React from 'react';

const Howitworks = () => {
  return (
    <div id='htw' className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Effortless Cover Letter Generation in 3 Simple Steps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Generate a personalized cover letter in minutes.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Icon goes here */}
                  <svg
                    className="h-6 w-6 animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L4 8m4-4v12"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Step 1: Upload Your Resume
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Upload your resume to our platform.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Icon goes here */}
                  <svg
                    className="h-6 w-6 animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2-2H7m2 4h4m-7 3a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Step 2: Paste Job Description
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Paste the job description for the position you&apos;re applying for.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Icon goes here */}
                  <svg
                    className="h-6 w-6 animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9.172 9.172a4 4 0 015.656 0m9.142 11.414a5 5 0 01-7.07 0m0 0a5 5 0 01-7.07 0M3.428 16.572a4 4 0 010-5.656m17.144 0a4 4 0 010 5.656m-2.288-11.944a2 2 0 012.828 0M5.712 7.712a2 2 0 012.828 0"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Step 3: Generate Your Cover Letter
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our AI will generate a personalized cover letter tailored to
                your resume and the job description.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
