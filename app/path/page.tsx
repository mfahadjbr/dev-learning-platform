"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
export default function AboutPage() {
  const [userName, setUserName] = useState("Your")
  const [activeSegment, setActiveSegment] = useState(1)

  // Simulate getting user name from a session
  useEffect(() => {
    // This would normally come from authentication
    const storedName = localStorage.getItem("userName") || "Your"
    setUserName(storedName)
  }, [])

  const scrollToSegment = (segmentId: number) => {
    const element = document.getElementById(`segment-${segmentId}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSegment(segmentId)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0118] text-white overflow-hidden">
      <Header />

      {/* Hero Section with Path Visualization */}
      <section className="pt-24 pb-16 px-4 bg-[#0A0119]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-[#4da8ff]">{userName}</span> Personalized Learning Path
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Guiding your path and fueling your progress in web development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black font-semibold px-6 py-4 h-auto rounded-md flex items-center gap-2">
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
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <Link href="/learning-path">Free Courses</Link>
                </Button>
                <Button
                  className=" text-black font-semibold hover:bg-[#3a8ad8] px-6 py-4 h-auto rounded-md flex items-center gap-2 bg-[#4da8ff]"
                  onClick={() => scrollToSegment(1)}
                >
                  Scroll to where you're at
                  <ChevronDown className="w-5 h-5 font-bold" />
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/path.png-w9llAEuERVZV6aOwUC8CCn5ytV0Ziy.webp"
                  alt="Learning path visualization"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Segments */}
      <section className="py-16 px-4 bg-[#0A0119]">
        <div className="container mx-auto max-w-6xl">
          {/* HTML CSS Segment */}
          <div id="segment-1" className="mb-5">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4da8ff] flex items-center justify-center text-black font-bold">
                    01
                  </div>
                  <h2 className="text-2xl font-bold">HTML CSS Segment</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Start your path to becoming a developer. Learn key programming concepts, build real projects, and gain
                  the skills needed to write code with confidence
                </p>
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/1.png"
                    alt="JavaScript character"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-[#11142B] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  HTML & CSS Guide for Beginners : Creating a Sushi-Themed Website
                </h3>
                <p className="text-gray-300 mb-6">
                  In this video tutorial, you will create a modern, fully responsive HTML & CSS website with animations!
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="w-2 h-2 bg-[#4a7aa7] rounded-full"></span>
                    <span>01 lectures</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
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
                      className="w-3 h-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>2 hrs</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="text-[#3d92e2]">BEGINNER LEVEL</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black text-sm px-4 py-1 h-auto rounded-md">
                    <Link href="/learning-path/frontend/curriculum?tech=html-css">Start learning now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* JavaScript Segment */}
          <div id="segment-2" className="mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4da8ff] flex items-center justify-center text-black font-bold">
                    02
                  </div>
                  <h2 className="text-2xl font-bold">JavaScript Segment</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  "JavaScript might seem tricky at first, but every great developer started where you are now. With each
                  lesson, you'll master JavaScript and build amazing projects"
                </p>
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/6.png"
                    alt="JavaScript character"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-[#11142B] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Do You Need to Find a JavaScript Tutor? Myths vs Reality</h3>
                <p className="text-gray-300 mb-6">
                  JavaScript is the language that makes websites interactive and dynamic. In this segment, you'll learn
                  everything about JavaScript—from the basics to advanced concepts. You'll discover how it works, how to
                  use it to build websites, and why it's one of the most important programming languages today.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="text-[#3d92e2]">BEGINNER LEVEL</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span>Article</span>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black text-sm px-4 py-1 h-auto rounded-md">
                    <Link href="/learning-path/frontend/curriculum?tech=javascript">Start learning now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* TailwindCSS Segment */}
          <div id="segment-3" className="mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4da8ff] flex items-center justify-center text-black font-bold">
                    03
                  </div>
                  <h2 className="text-2xl font-bold">TailwindCSS Segment</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Learn how to build modern, responsive designs with utility-first classes. Simplify styling, improve
                  maintainability, and create sleek UIs effortlessly
                </p>
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/nanja3.png"
                    alt="JavaScript character"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-[#11142B] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Tailwind CSS v4 Crash Course</h3>
                <p className="text-gray-300 mb-6">
                  Master Tailwind CSS v4 with this hands-on crash course! Learn fundamentals, JIT compilation, layouts,
                  Flexbox, media queries, dark mode, custom styles, and pro tips.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="w-2 h-2 bg-[#4a7aa7] rounded-full"></span>
                    <span>01 lectures</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="text-[#3d92e2]">BEGINNER LEVEL</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black text-sm px-4 py-1 h-auto rounded-md">
                    <Link href="/learning-path/frontend/curriculum?tech=tailwind">Start learning now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* React Native Segment */}
          <div id="segment-4" className="mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4da8ff] flex items-center justify-center text-black font-bold">
                    04
                  </div>
                  <h2 className="text-2xl font-bold">React Native Segment</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  "If coding feels tough, that means you're learning! Stick with it—soon, what's hard now will feel
                  easy. Keep pushing!"
                </p>
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/4.png"
                    alt="React Native character"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-[#11142B] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">The React Native Roadmap and Guide for Beginners</h3>
                <p className="text-gray-300 mb-6">
                  React Native is a framework for building mobile apps using JavaScript and React. In this segment,
                  you'll learn everything about React Native—from creating your first app to handling navigation, state
                  management, and performance optimization. You'll see how it lets you build cross-platform apps for iOS
                  and Android with a single codebase.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="text-[#3d92e2]">BEGINNER LEVEL</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span>Tips</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black text-sm px-4 py-1 h-auto rounded-md">
                    <Link href="/learning-path/frontend/curriculum?tech=react">Start learning now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Three.js Segment */}
          <div id="segment-5" className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4da8ff] flex items-center justify-center text-black font-bold">
                    05
                  </div>
                  <h2 className="text-2xl font-bold">GSAP Segment</h2>
                </div>
                <p className="text-gray-300 mb-6">
                    If you're feeling stuck, that's a good sign! It means you're growing. Keep pushing through the
                    challenges and you'll see progress
                </p>
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/nanja1.png"
                    alt="React Native character"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-[#11142B] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">The Ultimate Guide to Mastering GSAP for 3D Development</h3>
                <p className="text-gray-300 mb-6">
                  GSAP is a powerful JavaScript library for creating 3D graphics on the web. In this segment, you'll
                  learn everything about GSAP—from setting up a scene to working with lights, cameras, and
                  animations.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="text-[#3d92e2]">INTERMEDIATE LEVEL</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span>Tips</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black text-sm px-4 py-1 h-auto rounded-md">
                    <Link href="/learning-path/frontend/curriculum?tech=gsap">Start learning now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Next.js Segment */}
          <div id="segment-6" className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4da8ff] flex items-center justify-center text-black font-bold">
                    06
                  </div>
                  <h2 className="text-2xl font-bold">Next.js Segment</h2>
                </div>
                <p className="text-gray-300 mb-6">
                    If you're feeling stuck, that's a good sign! It means you're growing. Keep pushing through the
                    challenges and you'll see progress
                </p>
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/11.png"
                    alt="React Native character"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-[#11142B] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">The Ultimate Guide to Mastering Next.js for 3D Development</h3>
                <p className="text-gray-300 mb-6">
                  Next.js is a powerful JavaScript library for creating 3D graphics on the web. In this segment, you'll
                  learn everything about Next.js—from setting up a scene to working with lights, cameras, and
                  animations.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="text-[#3d92e2]">INTERMEDIATE LEVEL</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span>Tips</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black text-sm px-4 py-1 h-auto rounded-md">
                    <Link href="/learning-path/frontend/curriculum?tech=nextjs">Start learning now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* node js segment */}
          <div id="segment-1" className="mb-5">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4da8ff] flex items-center justify-center text-black font-bold">
                    07
                  </div>
                  <h2 className="text-2xl font-bold">Node.js</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Start your path to becoming a developer. Learn key programming concepts, build real projects, and gain
                  the skills needed to write code with confidence
                </p>
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/10.png"
                    alt="JavaScript character"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 bg-[#11142B] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Node.js Guide for Beginners : Creating a Sushi-Themed Website
                </h3>
                <p className="text-gray-300 mb-6">
                  In this video tutorial, you will create a modern, fully responsive Node.js website with animations!
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="w-2 h-2 bg-[#4a7aa7] rounded-full"></span>
                    <span>01 lectures</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
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
                      className="w-3 h-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>2 hrs</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#2c2967] px-3 py-1 rounded-full text-sm">
                    <span className="text-[#3d92e2]">BEGINNER LEVEL</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black text-sm px-4 py-1 h-auto rounded-md">
                    <Link href="/learning-path/backend/curriculum?tech=nodejs">Start learning now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mock Interview Section */}
          <div id="segment-6" className="mb-5">
            <div className="bg-[#11142B] rounded-xl p-6 ">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-44 h-44 rounded-xl flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex">
                        <Image
                          src="/ninja.png"
                          alt="Mock Interview"
                          height={500}
                          width={500}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4">Test Your Knowledge with Mock Interview</h3>
                  <p className="text-gray-300 mb-4">
                    Test your understanding of HTML/CSS, VS Code, CSS and HTML with an interview-style assessment after
                    completing this segment.
                  </p>
                  <p className="text-gray-300 mb-6">
                    This will help you assess your progress, identify areas for improvement, and ensure you're ready for
                    the next challenge.
                  </p>
                  <div className="flex justify-end items-center">
                    <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black text-sm px-4 py-1 h-auto rounded-md">
                      <Link href="/learning-path/interview">Take Interview</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#11142B] rounded-3xl p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 w-56 h-56 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/path.png-w9llAEuERVZV6aOwUC8CCn5ytV0Ziy.webp"
                  alt="Learning path visualization"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock Your Full Learning Potential</h2>
              <p className="text-gray-300 mb-8 max-w-2xl">
                Subscribe to Elite to access all the exclusive features and benefits of your learning path—maximize your
                experience and get the most out of your journey!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
