import Image from "next/image"
import { Star, Youtube, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 relative">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative">
        {/* Image - Appears at the top on mobile */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative mb-8 lg:mb-0">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/technology.png-gystnO3evEhdTrUoXC2Ri26zkdzKXA.webp"
              alt="Developer learning path with technology icons"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        </div>

        {/* Left Content - Appears below image on mobile */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 z-10">
          <div className="inline-block rounded-full bg-[#1e1339] px-4 py-2 text-sm mb-6">
            START YOUR PERSONALIZED DEVELOPER LEARNING PATH
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Code </span>
            <span className="text-[#4da8ff]">Your Way</span>
            <span className="text-white"> to a</span>
            <br />
            <span className="text-[#4da8ff]">Life-Changing</span>
            <span className="text-white"> Career</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            Stop wasting time on scattered tutorials. Get a personalized learning path, build real-world projects, and
            land your dream job—faster.
          </p>

          {/* Buttons - Styled to match the image */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black font-semibold px-6 py-2 rounded-md flex items-center gap-2 text-base">
              <Link href="/learning-path/">Free courses</Link>
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
            <Button
              variant="outline"
              className="bg-[#1a1a2e] border-[#2a2a4e] text-white hover:bg-[#2a2a4e] px-6 py-2 rounded-md text-base font-semibold"
            >
              <Link href="/learning-path/interview">All Frameworks Free Interview</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0d0326] p-4 rounded-lg">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-lg font-medium">Excellent</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-300">
                2,244 reviews on <span className="font-medium">★ Trustpilot</span>
              </p>
            </div>

            <div className="bg-[#0d0326] p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1">
                  <Youtube className="w-5 h-5 text-red-500" />
                  <span className="font-medium">1.05M</span>
                </div>
                <div className="flex items-center gap-1">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="font-medium">250k</span>
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">250k</span>
                </div>
              </div>
              <p className="text-sm text-gray-300">Loved by 1,500,000+ developers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
      </div>
    </div>
  )
}
