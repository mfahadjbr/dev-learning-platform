"use client"

import Header from "@/components/header"
import PathSelection from "@/components/path-selection"

export default function LearningPathPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      {/* Main content with padding for fixed header */}
      <div className="">
        {/* Path Selection Section */}
        <div className="mt-28 mb-3">
          <PathSelection />
        </div>
      </div>
    </main>
  )
}
