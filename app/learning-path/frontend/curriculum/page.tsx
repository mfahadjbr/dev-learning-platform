"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"

interface Video {
  id: number
  title: string
  description: string
  thumbnail: string
  youtubeId: string
}

interface Videos {
  [key: string]: Video[]
}

const videos: Videos = {
  "html-css": [
    {
      id: 1,
      title: "HTML Tutorial for Beginners | Complete HTML Course",
      description: "In this video tutorial, you will learn the basics of HTML and how to create a modern, fully responsive HTML & CSS website with animations!",
      thumbnail: "https://i.ytimg.com/vi/HcOc7P5BMi4/maxresdefault.jpg",
      youtubeId: "HcOc7P5BMi4"
    },
    {
      id: 2,
      title: "CSS Tutorial for Beginners | Complete CSS Course",
      description: "Master CSS from scratch! Learn CSS fundamentals, selectors, properties, layouts, responsive design, and modern CSS techniques in this comprehensive tutorial.",
      thumbnail: "https://i.ytimg.com/vi/ESnrn1kAD4E/maxresdefault.jpg",
      youtubeId: "ESnrn1kAD4E"
    }
  ],
  "javascript": [
    {
      id: 1,
      title: "JavaScript Tutorial for Beginners",
      description: "Learn JavaScript from scratch! This comprehensive JavaScript tutorial covers all the fundamentals including variables, data types, functions, loops, and more.",
      thumbnail: "https://i.ytimg.com/vi/VlPiVmYuoqw/maxresdefault.jpg",
      youtubeId: "VlPiVmYuoqw"
    }
  ],
  "react": [
    {
      id: 1,
      title: "React JS Full Course for Beginners",
      description: "Master React.js from scratch! Learn components, hooks, state management, routing, and build modern user interfaces with React's latest features.",
      thumbnail: "https://i.ytimg.com/vi/GiyL4KFRNBA/maxresdefault.jpg",
      youtubeId: "GiyL4KFRNBA"
    }
  ],
  "typescript": [
    {
      id: 1,
      title: "TypeScript Full Course for Beginners",
      description: "Learn TypeScript from scratch! This comprehensive tutorial covers types, interfaces, generics, and everything you need to write type-safe JavaScript applications.",
      thumbnail: "https://i.ytimg.com/vi/rRAVqEFnT1s/maxresdefault.jpg",
      youtubeId: "rRAVqEFnT1s"
    }
  ],
  "nextjs": [
    {
      id: 1,
      title: "Next.js Full Course for Beginners",
      description: "Learn Next.js from scratch! This comprehensive tutorial covers server-side rendering, static site generation, API routes, and building modern web applications with Next.js.",
      thumbnail: "https://i.ytimg.com/vi/Zq5fmkH0T78/maxresdefault.jpg",
      youtubeId: "Zq5fmkH0T78"
    }
  ],
  "tailwind": [
    {
      id: 1,
      title: "Tailwind CSS Full Course for Beginners",
      description: "Learn Tailwind CSS from scratch! This comprehensive tutorial covers all the fundamentals including components, utilities, and customizing your own styles.",
      thumbnail: "https://i.ytimg.com/vi/tS7upsfuxmo/maxresdefault.jpg",
      youtubeId: "tS7upsfuxmo"
    }
  ],
  "framer": [
    {
      id: 1,
      title: "Framer Motion Full Course for Beginners",
      description: "Learn Framer Motion from scratch! This comprehensive tutorial covers all the fundamentals including animations, transitions, and building modern user interfaces with Framer Motion.",
      thumbnail: "https://i.ytimg.com/vi/JALCoY9MQg8/maxresdefault.jpg",
      youtubeId: "JALCoY9MQg8"
    }
  ],
  "gsap": [
    {
      id: 1,
      title: "GSAP Full Course for Beginners",
      description: "Learn GSAP from scratch! This comprehensive tutorial covers all the fundamentals including animations, transitions, and building modern user interfaces with GSAP.",
      thumbnail: "https://i.ytimg.com/vi/L4tUG7Jk6g0/maxresdefault.jpg",
      youtubeId: "L4tUG7Jk6g0"
    }
  ]
}

function CurriculumContent() {
  const searchParams = useSearchParams()
  const tech = searchParams.get("tech")
  const [selectedVideo, setSelectedVideo] = useState(0)
  
  if (!tech || !videos[tech]) {
    return <div>Technology not found</div>
  }

  const currentVideos = videos[tech]

  return (
    <div className="min-h-screen bg-[#0a0118] mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Video List */}
          <div className="col-span-3 space-y-4">
            {currentVideos.map((video, index) => (
              <div
                key={video.id}
                className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                  selectedVideo === index ? 'ring-2 ring-[#5995ce]' : ''
                }`}
                onClick={() => setSelectedVideo(index)}
              >
                {/* Video Thumbnail */}
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>
                {/* Video Info */}
                <div className="p-3 bg-[#111631]">
                  <h3 className="text-sm font-medium text-white truncate">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content - Selected Video */}
          <div className="col-span-9">
            <div className="bg-[#111631] rounded-lg overflow-hidden">
              {/* Video Player */}
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideos[selectedVideo].youtubeId}?autoplay=0`}
                  title={currentVideos[selectedVideo].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              {/* Video Info */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-white">
                  {currentVideos[selectedVideo].title}
                </h1>
                <p className="mt-2 text-gray-400">
                  {currentVideos[selectedVideo].description}
                </p>
                
                {/* Resources Section - Only show for HTML/CSS and JavaScript */}
                {(tech === 'html-css' || tech === 'javascript') && (
                  <div className="mt-6 border-t border-gray-800 pt-6">
                    <h2 className="text-lg font-semibold text-white mb-4">
                      {tech === 'javascript' ? 'JavaScript Notes' : 'HTML & CSS Notes'}
                    </h2>
                    <a 
                      href={
                        tech === 'javascript' 
                          ? "https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl"
                          : tech === 'html-css'
                          ? "https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl"
                          : "https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#5995ce] hover:text-[#4da8ff] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download {tech === 'javascript' ? 'JavaScript' : 'HTML & CSS'} Notes
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CurriculumPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-[#0a0118] mt-20 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>}>
        <CurriculumContent />
      </Suspense>
    </>
  )
} 