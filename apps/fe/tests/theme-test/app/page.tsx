"use client"

import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { AuthCard } from "@/components/auth/auth-card"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const { toast } = useToast()

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Signed in successfully!",
        description: "Welcome back to your account.",
      })
    }, 1500)
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Account created!",
        description: "Your account has been created successfully.",
      })
    }, 1500)
  }

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} login`,
      description: `Redirecting to ${provider}...`,
    })
  }

  const handleForgotPassword = () => {
    toast({
      title: "Reset link sent",
      description: "Check your email for password reset instructions.",
    })
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: 'url("/bg8.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <AuthCard
        isLoading={isLoading}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onSocialLogin={handleSocialLogin}
        onForgotPassword={handleForgotPassword}
      />
      <Toaster />
    </div>
  )
}
