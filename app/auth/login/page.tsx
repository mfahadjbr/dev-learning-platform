"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import AuthBackground from "@/components/auth-background"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Loader from "@/components/Loader"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://fastapi-backend-learning-path-nxr6.vercel.app/login", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        let errorMsg = "Login failed. Please try again."
        try {
          const errorData = await response.json()
          if (errorData && errorData.detail) {
            errorMsg = typeof errorData.detail === "string"
              ? errorData.detail
              : JSON.stringify(errorData.detail)
          }
        } catch (jsonErr) {}
        alert(errorMsg)
        setIsSubmitting(false)
        return
      }

      toast.success("Login successful!")
      setEmail("")
      setPassword("")
      setTimeout(() => {
        router.push("/")
        setIsSubmitting(false)
      }, 1500)
    } catch (error: any) {
      alert(error.message || "There was an error. Please try again.")
      setIsSubmitting(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <AuthBackground />
      {/* Loader at the bottom */}
      {isSubmitting && (
        <div className="fixed bottom-4 left-0 w-full flex justify-center z-50">
          <Loader />
        </div>
      )}

      {/* Logo */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4da8ff] to-[#2a5a8f] p-[2px] shadow-lg">
          <div className="w-full h-full rounded-2xl bg-[#0c0a1d] flex items-center justify-center">
            <div className="text-white text-xl font-bold text-center flex flex-col items-center justify-center">
              <span className="text-[#4da8ff]">&#123;FJ&#125;</span>
              <span className="text-xs block text-white text-center">RootXran</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="w-full max-w-md z-10">
        <h1 className="text-white text-3xl font-bold text-center mb-8">Log in to your account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-white text-sm">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#131136] border-none text-white h-12 rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-white text-sm">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#131136] border-none text-white h-12 rounded-md pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#4da8ff] hover:bg-[#3a8ad8] text-black font-medium h-12 rounded-md"
          >
            Log in
          </Button>
        </form>

        <p className="text-white text-center mt-8">
          Are you new here?{" "}
          <Link href="/auth/register" className="text-[#4da8ff] hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}
