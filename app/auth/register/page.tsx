"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AuthBackground from "@/components/auth-background"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Loader from "@/components/Loader"

export default function RegisterPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://fastapi-backend-learning-path-nxr6.vercel.app/register", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ full_name: fullName, email, password }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData?.detail || "Registration failed. Please try again.")
      }

      toast.success("Registration successful! Please log in.")
      setFullName("")
      setEmail("")
      setPassword("")
      setTimeout(() => {
        router.push("/auth/login")
        setIsSubmitting(false)
      }, 1500)
    } catch (error: any) {
      alert(error.message || "There was an error. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <AuthBackground />

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
        <h1 className="text-white text-3xl font-bold text-center mb-8">Create a new account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-white text-sm">
              Full name
            </label>
            <Input
              id="fullName"
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-[#131136] border-none text-white h-12 rounded-md"
              required
            />
          </div>

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
            <Input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#131136] border-none text-white h-12 rounded-md"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#4da8ff] hover:bg-[#3a8ad8] text-black font-medium h-12 rounded-md"
          >
            Register
          </Button>
        </form>

        <p className="text-white text-center mt-8">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#4da8ff] hover:underline">
            Log in
          </Link>
        </p>
      </div>

      {/* Loader at the bottom */}
      {isSubmitting && (
        <div className="fixed bottom-4 left-0 w-full flex justify-center z-50">
          <Loader />
        </div>
      )}
    </div>
  )
}
