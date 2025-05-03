"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Course data
const courses = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    description:
      "Learn the building blocks of web development. Master HTML elements and CSS styling to create beautiful, responsive websites.",
    icon: "html-css",
    topics: [
      "Introduction to HTML",
      "Semantic HTML Elements",
      "CSS Selectors and Properties",
      "Flexbox and Grid Layouts",
      "Responsive Design Principles",
      "CSS Variables and Custom Properties",
    ],
    characterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/character-2.png-4nHlwNb715hvXmtgC03PAabI4XKlAL.webp",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description:
      "Explore comments, variables, and different data types. Learn how to store and manipulate data effectively.",
    icon: "javascript",
    topics: [
      "Variables and Data types",
      "Comments",
      "Variables Introduction",
      "Variables",
      "Data Types",
      "Strings in JS",
      "Numbers in JS",
    ],
    characterImage: "/ninja.png",
  },
  {
    id: 3,
    title: "Next.js Framework",
    description:
      "Master the React framework for production. Learn server-side rendering, static site generation, and API routes.",
    icon: "nextjs",
    topics: [
      "Introduction to Next.js",
      "Routing in Next.js",
      "Data Fetching Strategies",
      "Server Components",
      "Client Components",
      "API Routes",
    ],
    characterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/character-3.png-aaJSKrlqF8zTcrb636B7AEOg2sj3s3.webp",
  },
  {
    id: 4,
    title: "React.js Mastery",
    description: "Master component-based architecture, state management, and building interactive UIs with React.",
    icon: "react",
    topics: [
      "React Fundamentals",
      "Components and Props",
      "State and Lifecycle",
      "Handling Events",
      "Conditional Rendering",
      "Lists and Keys",
      "Forms in React",
    ],
    characterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/character-5.png-2WafBqIBbmIkq4XeQ1NaKU1FGlN8am.webp",
  },
  {
    id: 5,
    title: "Node.js",
    description: "Master the Node.js runtime for server-side development.",
    icon: "nodejs",
    topics: ["Node.js Fundamentals", "Modules and Packages", "File System", "HTTP Server"],
    characterImage: "/10.png",
  },
  {
    id: 7,
    title: "Express.js",
    description: "Master the Express.js runtime for server-side development.",
    icon: "express",
    topics: ["Express.js Fundamentals", "Routing", "Middleware", "Error Handling", "API Development", "Database Integration", "Authentication", "Authorization", "Deployment"],
    characterImage: "/4.png",
  },
]
export default function CourseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-[#111631] rounded-3xl overflow-hidden relative shadow-2xl">
      {/* Slide number indicator */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-[#1e3a5f] text-white px-4 py-2 text-xl font-bold clip-hexagon rounded-lg">
          {String(currentSlide + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Slides */}
      <div className="relative">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Left side - Content */}
              <div className="p-8 md:p-12 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h2>
                  <p className="text-gray-300 mb-8">{course.description}</p>
                </div>

                <div className="space-y-4 flex-grow">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="border-b border-gray-800 pb-3">
                      <p className="text-sm md:text-base">
                        <span className="text-[#4da8ff] mr-2">{String(i + 1).padStart(2, "0")}</span>
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Image with hover effect */}
              <div className="relative flex items-center justify-center p-4">
                <div className="relative h-[400px] w-full transform transition-transform duration-300 hover:-translate-y-4">
                  <Image
                    src={course.characterImage || "/placeholder.svg"}
                    alt="Course character"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center p-4 bg-[#1e3a5f]">
        {/* Dot indicators */}
        <div className="flex items-center gap-3">
          {courses.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#5995ce] w-4' : 'bg-gray-600'
              }`}
              onClick={() => {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
