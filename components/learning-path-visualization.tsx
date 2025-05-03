"use client"

import Image from "next/image"

export default function LearningPathVisualization() {
  return (
    <div className="relative w-full h-[300px] bg-[#0d0326] rounded-2xl ">
      {/* Curved Path SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dashed curved path */}
        <path
          d="M100 150 C 250 150, 300 50, 400 50 C 500 50, 550 250, 650 250 C 750 250, 800 150, 900 150"
          stroke="#2A2A4E"
          strokeWidth="4"
          strokeDasharray="8 8"
          fill="none"
        />
      </svg>

      {/* Technology Icons with Numbers */}
      <div className="relative h-full flex items-center justify-between">
        {/* HTML/CSS */}
        <div className="relative group">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E1339] text-[#4da8ff] rounded-full w-8 h-8 flex items-center justify-center font-bold">
            01
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 relative">
              <Image
                src="/icons/html.svg"
                alt="HTML"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="w-12 h-12 relative">
              <Image
                src="/icons/css.svg"
                alt="CSS"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="relative group -mt-16">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E1339] text-[#4da8ff] rounded-full w-8 h-8 flex items-center justify-center font-bold">
            02
          </div>
          <div className="w-12 h-12 relative">
            <Image
              src="/icons/javascript.svg"
              alt="JavaScript"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>

        {/* React */}
        <div className="relative group">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E1339] text-[#4da8ff] rounded-full w-8 h-8 flex items-center justify-center font-bold">
            03
          </div>
          <div className="w-12 h-12 relative">
            <Image
              src="/icons/react.svg"
              alt="React"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          {/* You're here badge */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#4ade80] text-black text-sm px-3 py-1 rounded-full whitespace-nowrap">
            You're here in your journey
          </div>
        </div>

        {/* TypeScript */}
        <div className="relative group -mt-16">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E1339] text-[#4da8ff] rounded-full w-8 h-8 flex items-center justify-center font-bold">
            04
          </div>
          <div className="w-12 h-12 relative">
            <Image
              src="/icons/typescript.svg"
              alt="TypeScript"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>

        {/* Next.js */}
        <div className="relative group">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E1339] text-[#4da8ff] rounded-full w-8 h-8 flex items-center justify-center font-bold">
            05
          </div>
          <div className="w-12 h-12 relative">
            <Image
              src="/icons/nextjs.svg"
              alt="Next.js"
              width={48}
              height={48}
              className="object-contain bg-white rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 