"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

type PathOption = "frontend" | "backend" | "fullstack" | "interview" | null

export default function PathSelection() {
  const [selectedPath, setSelectedPath] = useState<PathOption>(null)
  const router = useRouter()

  const handleNext = () => {
    if (selectedPath) {
      router.push(`/learning-path/${selectedPath}`)
    }
  }

  return (
    <div className="container mx-auto px-4 ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl mb-5 font-bold text-center text-blue-400">Free Courses</h1>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What do you want to focus on?</h1>
          <p className="text-xl text-gray-300">Select your primary goal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Frontend Option */}
          <div
            className={`bg-[#11142B] rounded-xl p-10 cursor-pointer transition-all ${
              selectedPath === "frontend" ? "ring-2 ring-[#4da8ff]" : "hover:bg-[#1a1d3d]"
            }`}
            onClick={() => setSelectedPath("frontend")}
          >
            <div className="bg-[#0d0f24] rounded-lg p-8 mb-6 flex justify-center items-center">
              <div className="w-32 h-32 relative">
                <Image
                  src="/frontend.svg"
                  alt="Frontend Development"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                A
              </div>
              <h3 className="text-2xl font-bold">Frontend</h3>
            </div>
          </div>

          {/* Backend Option */}
          <div
            className={`bg-[#11142B] rounded-xl p-10 cursor-pointer transition-all ${
              selectedPath === "backend" ? "ring-2 ring-[#4da8ff]" : "hover:bg-[#1a1d3d]"
            }`}
            onClick={() => setSelectedPath("backend")}
          >
            <div className="bg-[#0d0f24] rounded-lg p-8 mb-6 flex justify-center items-center">
              <div className="w-32 h-32 relative">
                <Image
                  src="/backend.svg"
                  alt="Backend Development"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                B
              </div>
              <h3 className="text-2xl font-bold">Backend</h3>
            </div>
          </div>

          {/* Full-stack Option */}
          <div
            className={`bg-[#11142B] rounded-xl p-10 cursor-pointer transition-all ${
              selectedPath === "fullstack" ? "ring-2 ring-[#4da8ff]" : "hover:bg-[#1a1d3d]"
            }`}
            onClick={() => setSelectedPath("fullstack")}
          >
            <div className="bg-[#0d0f24] rounded-lg p-8 mb-6 flex justify-center items-center">
              <div className="w-32 h-32 relative">
                <Image
                  src="/fullstack.svg"
                  alt="Full-stack Development"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                C
              </div>
              <h3 className="text-2xl font-bold">Full-stack</h3>
            </div>
          </div>
        </div>

        {/* Interview Option */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            className={`bg-[#11142B] rounded-xl p-10 cursor-pointer transition-all ${
              selectedPath === "interview" ? "ring-2 ring-[#4da8ff]" : "hover:bg-[#1a1d3d]"
            }`}
            onClick={() => setSelectedPath("interview")}
          >
            <div className="bg-[#0d0f24] rounded-lg p-8 mb-6 flex justify-center items-center">
              <div className="w-40 h-40 relative">
                <Image
                  src="/job.png"
                  alt="Interview Preparation"
                  width={258}
                  height={258}
                  className="object-contain rounded-lg mt-6"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                D
              </div>
              <h3 className="text-2xl font-bold">Interview</h3>
            </div>
          </div>
        </div> */}

        {/* Next Button */}
        <div className="flex justify-center mt-16">
          <Button
            onClick={handleNext}
            disabled={!selectedPath}
            className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black font-semibold px-28 py-3 h-auto rounded-md flex items-center gap-2 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
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
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
