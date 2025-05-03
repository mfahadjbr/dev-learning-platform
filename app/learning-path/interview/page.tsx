"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function InterviewPage() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0118] to-[#1a0b30] text-white overflow-hidden">
      <Header />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice Job Interviews</h1>
              <p className="text-xl text-gray-300">Get ready for your next job interview with AI-powered practice</p>
            </div>

            <div className="flex justify-center mb-8">
              <Button
                onClick={handleBack}
                className="bg-[#1a1d3d] hover:bg-[#252849] text-white font-semibold px-16 py-3 h-auto rounded-md flex items-center gap-2 text-xl"
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
                  className="w-5 h-5"
                >
                  <path d="M19 12H5"/>
                  <path d="M12 19l-7-7 7-7"/>
                </svg>
                Back
              </Button>
            </div>

            <div className="bg-[#11142B] rounded-xl p-6">
              <iframe
                src="https://job-interview-application.vercel.app/"
                className="w-full h-[800px] rounded-lg border-2 border-[#4da8ff]"
                title="Job Interview Practice"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 