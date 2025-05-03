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
  "nodejs": [
    {
      id: 1,
      title: "Node.js Full Course for Beginners",
      description: "Learn Node.js from scratch! This comprehensive tutorial covers all the fundamentals including modules, npm, Express.js, and building modern web applications with Node.js.",
      thumbnail: "https://i.ytimg.com/vi/VrQgmNY96wo/maxresdefault.jpg",
      youtubeId: "VrQgmNY96wo"
    }
  ],
  "express": [
    {
      id: 1,
      title: "Express.js Full Course for Beginners",
      description: "Learn Express.js from scratch! This comprehensive tutorial covers all the fundamentals including routing, middleware, authentication, and building RESTful APIs with Express.js.",
      thumbnail: "https://i.ytimg.com/vi/PfPaefGNnvU/maxresdefault.jpg",
      youtubeId: "PfPaefGNnvU"
    }
  ],
  "sql": [
    {
      id: 1,
      title: "SQL Full Course for Beginners",
      description: "Learn SQL from scratch! This comprehensive tutorial covers all the fundamentals including queries, joins, transactions, and building modern web applications with SQL.",
      thumbnail: "https://i.ytimg.com/vi/hlGoQC332VM/maxresdefault.jpg",
      youtubeId: "hlGoQC332VM"
    }
  ],
  "mongodb": [
    {
      id: 1,
      title: "MongoDB Full Course for Beginners",
      description: "Learn MongoDB from scratch! This comprehensive tutorial covers all the fundamentals including queries, joins, transactions, and building modern web applications with MongoDB.",
      thumbnail: "https://i.ytimg.com/vi/J6mDkcqU_ZE/maxresdefault.jpg",
      youtubeId: "J6mDkcqU_ZE"
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
                
                {/* Resources Section - Only show for SQL */}
                {tech === 'sql' && (
                  <div className="mt-6 border-t border-gray-800 pt-6">
                    <h2 className="text-lg font-semibold text-white mb-4">
                      SQL Notes
                    </h2>
                    <a 
                      href="https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#5995ce] hover:text-[#4da8ff] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download SQL Notes
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
