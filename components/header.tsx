"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { deleteCookie } from "cookies-next"

// Mobile Navigation component
function MobileNav({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  // Add logout handler
  function handleLogout() {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      window.location.href = '/auth/login';
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-[#0a0118] z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={() => setIsOpen(false)} className="text-white">
          <X className="h-6 w-6 hover:text-[#4da8ff] transition-colors" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 p-8">
        <Link href="/learning-path/" className="text-white text-lg hover:text-[#4da8ff] transition-colors">
          Free courses
        </Link>
        <Link href="/learning-path/interview" className="text-white text-lg hover:text-[#4da8ff] transition-colors">
          Interview
        </Link>
        <Link href="/path" className="text-white text-lg hover:text-[#4da8ff] transition-colors">
          Learning Path
        </Link>
        <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black font-semibold px-6 py-2 h-auto rounded-md w-full" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  )
}

// Header component
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    deleteCookie('token')
    router.push('/auth/login')
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#0a0118] z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white text-2xl font-bold">
              <span className="text-[#4da8ff]">&#123;FJ&#125;</span>
              <span className="text-xs block text-white">RootXran</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/learning-path/" className="text-white hover:text-[#4da8ff] transition-colors">
              Free courses
            </Link>
            <Link href="/learning-path/interview" className="text-white hover:text-[#4da8ff] transition-colors">
              Interview
            </Link>
            <Link href="/path" className="text-white hover:text-[#4da8ff] transition-colors">
              Learning Path
            </Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button className="bg-[#4da8ff] hover:bg-[#3a8ad8] text-black font-semibold px-6 py-2 h-auto rounded-md" onClick={handleLogout}>
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
