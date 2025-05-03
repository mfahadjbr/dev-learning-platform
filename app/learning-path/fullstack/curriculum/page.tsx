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
  "mern": [
    {
      id: 1,
      title: "MERN Stack Full Course",
      description: "Learn the complete MERN Stack (MongoDB, Express.js, Tailwind CSS, Node.js) by building a modern web application from scratch. This comprehensive tutorial covers everything you need to know about full-stack development.",
      thumbnail: "https://i.ytimg.com/vi/gxHXPmePnvo/maxresdefault.jpg",
      youtubeId: "gxHXPmePnvo"
    }
  ],
  "devops": [
    {
      id: 1,
      title: "DevOps Full Course",
      description: "Master DevOps with this comprehensive course covering Docker, Kubernetes, CI/CD pipelines, and cloud deployment. Learn how to automate and streamline your development workflow.",
      thumbnail: "https://i.ytimg.com/vi/lGg3VF2RScI/maxresdefault.jpg",
      youtubeId: "lGg3VF2RScI"
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
