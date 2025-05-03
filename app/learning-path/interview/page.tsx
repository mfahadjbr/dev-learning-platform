"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function InterviewPage() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  const handleViewWebsite = () => {
    window.open("https://job-interview-application.vercel.app/", "_blank")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0118] to-[#1a0b30] text-white overflow-hidden">
      <Header />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Practice Job Interviews</h1>
              <p className="text-lg md:text-xl text-gray-300">Get ready for your next job interview with AI-powered practice</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8 px-4">
              <Button
                onClick={handleBack}
                className="bg-[#1a1d3d] hover:bg-[#252849] text-white font-semibold px-8 sm:px-16 py-2 md:py-3 h-auto rounded-md flex items-center justify-center gap-2 text-lg md:text-xl w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path d="M19 12H5"/>
                  <path d="M12 19l-7-7 7-7"/>
                </svg>
                Back
              </Button>
              <Button
                onClick={handleViewWebsite}
                className="bg-[#4da8ff] hover:bg-[#3a8de6] text-white font-semibold px-8 sm:px-16 py-2 md:py-3 h-auto rounded-md flex items-center justify-center gap-2 text-lg md:text-xl w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                View Website
              </Button>
            </div>

            <div className="bg-[#11142B] rounded-xl p-4 md:p-6">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border-2 border-[#4da8ff]">
                <Image
                  src="/job1.png"
                  alt="Job Interview Practice Preview"
                  fill
                  className="object-fill"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 