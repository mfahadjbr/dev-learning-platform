"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import LearningPath from "@/components/learning-path"
import PathSelection from "@/components/path-selection"
import CourseCarousel from "@/components/course-coursel"
import ContactForm from "@/components/contact-form"
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0118] to-[#1a0b30] text-white overflow-hidden">
      <Header />

      {/* Main content with padding for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Path Selection Section */}
        <div className="mt-16">
          <PathSelection />
        </div>

            {/* Course Carousel Section */}
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  <span className="text-[#4da8ff]">Master</span> the Complete Web Development Journey
                </h2>
                <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                  Follow our structured learning path to become a professional web developer. From HTML basics to
                  advanced React applications, we've got you covered.
                </p>

                <CourseCarousel />
              </div>
            </div>

        {/* Learning Path Section */}
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            <span className="text-[#4da8ff]">Learning Path</span>
          </h1>
          <LearningPath />
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto px-4 py-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-[#4da8ff]">Contact Us</span>
          </h2>
          <ContactForm />
        </div>
      </div>
      <div className="container mx-auto px-10 py-5 z-50 fixed bottom-0 right-0 left-10 sm:right-5 sm:left-15">
        <Chatbot />
      </div>
    </main>
  )
}
