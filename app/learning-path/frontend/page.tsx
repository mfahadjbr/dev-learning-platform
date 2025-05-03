"use client"

import { useState } from "react"
import Header from "@/components/header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type TechOption = "html-css" | "javascript" | "react" | "typescript" | "nextjs" | "tailwind" | "framer" | "gsap"

export default function FrontendTechSelection() {
  const [selectedTech, setSelectedTech] = useState<TechOption | null>(null)
  const router = useRouter()

  const handleNext = () => {
    if (selectedTech) {
      router.push(`/learning-path/frontend/curriculum?tech=${selectedTech}`)
    }
  }

  const handleBack = () => {
    router.back()
  }

  const technologies = [
    { id: "html-css" as TechOption, label: "HTML/CSS", letter: "A", icon: "/htmlcss.svg" },
    { id: "javascript" as TechOption, label: "JavaScript", letter: "B", icon: "/javascript.svg" },
    { id: "react" as TechOption, label: "React.js", letter: "C", icon: "/tech/react.svg" },
    { id: "typescript" as TechOption, label: "TypeScript", letter: "D", icon: "/typescript.svg" },
    { id: "nextjs" as TechOption, label: "Next.js", letter: "E", icon: "/nextjs.svg" },
    { id: "tailwind" as TechOption, label: "Tailwind CSS", letter: "F", icon: "/tech/tailwind.svg" },
    { id: "framer" as TechOption, label: "Framer Motion", letter: "G", icon: "/framer.svg" },
    { id: "gsap" as TechOption, label: "GSAP", letter: "H", icon: "/gsap.svg" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0118] to-[#1a0b30] text-white overflow-hidden">
      <Header />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">What Frontend tech do you want to explore?</h1>
              <p className="text-xl text-gray-300">Select one to begin your journey</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className={`bg-[#11142B] rounded-xl p-6 cursor-pointer transition-all ${
                    selectedTech === tech.id ? "ring-2 ring-[#4da8ff]" : "hover:bg-[#1a1d3d]"
                  }`}
                  onClick={() => setSelectedTech(tech.id)}
                >
                  <div className="bg-[#0d0f24] rounded-lg p-4 mb-6 flex justify-center items-center">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={tech.icon}
                        alt={tech.label}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      {tech.letter}
                    </div>
                    <h3 className="text-xl font-bold">{tech.label}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              <Button
                onClick={handleBack}
                className="w-full sm:w-auto bg-[#1a1d3d] hover:bg-[#252849] text-white font-semibold px-4 sm:px-16 py-3 h-auto rounded-md flex items-center justify-center gap-2 text-base sm:text-xl"
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

              <Button
                onClick={handleNext}
                disabled={!selectedTech}
                className="w-full sm:w-auto bg-[#4da8ff] hover:bg-[#3a8ad8] text-black font-semibold px-4 sm:px-16 py-3 h-auto rounded-md flex items-center justify-center gap-2 text-base sm:text-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
