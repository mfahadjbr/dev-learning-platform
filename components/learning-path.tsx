"use client"

import { Button } from "@/components/ui/button"
import LearningPathVisualization from "./learning-path-visualization"

interface LearningPathProps {
  onClick?: () => void
}

export default function LearningPath({ onClick }: LearningPathProps) {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0d0326] rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <div className="gap-8 mb-8 flex justify-center items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-[#4da8ff]">Personalized learning path</span> with hands-on projects, real-world
                examples, and expert guidance.
              </h2>
            </div>
          </div>

          {/* Learning Path Visualization */}
          <LearningPathVisualization />
        </div>
      </div>
    </div>
  )
}
