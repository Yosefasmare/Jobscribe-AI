'use client'
import { useLetterstore } from '@/lib/store'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ResultWrapper = ({children}:{children:React.ReactNode}) => {

     const {letter} = useLetterstore()
     const router = useRouter()

     useEffect(() => {
        if (!letter || letter === "") {
          router.push("/upload");
        }
      }, [letter, router]);  // This effect runs whenever `letter` changes
    
      if (!letter || letter === "") {
        return <div className='w-full h-screen flex items-center justify-center bg-gray-900/70 fixed z-20 '>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-300">
        </div>
        </div>;  
      }

  return (
    <>{children}</>
  )
}

export default ResultWrapper