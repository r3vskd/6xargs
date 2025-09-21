"use client"

import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { AuthCard } from "@/components/auth/auth-card"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [country, setCountry] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const { toast } = useToast()

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePassword = (password: string) => {
    // Al menos 12 caracteres, una mayúscula, una minúscula, un número y un carácter especial
    const minLength = password.length >= 12
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    return {
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar,
      errors: {
        minLength,
        hasUpperCase,
        hasLowerCase,
        hasNumbers,
        hasSpecialChar
      }
    }
  }

  const validateUsername = (username: string) => {
    // Entre 3 y 20 caracteres, solo letras, números y guiones bajos
    return /^[a-zA-Z0-9_]{3,20}$/.test(username)
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

    if (!password.trim()) {
      toast({
        title: "Password required",
        description: "Please enter your password.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email, // El backend acepta email como username
          password: password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }

      // Guardar token en localStorage
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      toast({
        title: "Signed in successfully!",
        description: `Welcome back, ${data.user.firstName || data.user.username}!`,
      })

      // Aquí puedes redirigir al dashboard o página principal
      // window.location.href = '/dashboard'

    } catch (error) {
      toast({
        title: "Sign in failed",
        description: error instanceof Error ? error.message : "An error occurred during sign in.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!companyName.trim()) {
      toast({
        title: "Company name required",
        description: "Please enter your company name.",
        variant: "destructive",
      })
      return
    }

    if (!country) {
      toast({
        title: "Country required",
        description: "Please select your company's country.",
        variant: "destructive",
      })
      return
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    if (password.length < 12) {
      const passwordValidation = validatePassword(password)
      if (!passwordValidation.isValid) {
        const missingRequirements = []
        if (!passwordValidation.errors.minLength) missingRequirements.push("at least 12 characters")
        if (!passwordValidation.errors.hasUpperCase) missingRequirements.push("one uppercase letter")
        if (!passwordValidation.errors.hasLowerCase) missingRequirements.push("one lowercase letter")
        if (!passwordValidation.errors.hasNumbers) missingRequirements.push("one number")
        if (!passwordValidation.errors.hasSpecialChar) missingRequirements.push("one special character")
        
        toast({
          title: "Password requirements not met",
          description: `Password must have: ${missingRequirements.join(", ")}.`,
          variant: "destructive",
        })
        return
      }
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords are identical.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          username: email.split('@')[0], // Generar username del email
          password: password,
          firstName: '', // Podrías agregar campos para nombre
          lastName: '',
          companyName: companyName,
          role: 'HACKER' // Rol por defecto
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      // Guardar token en localStorage
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      toast({
        title: "Company account created!",
        description: `Account for ${companyName} in ${country} has been created successfully.`,
      })

      // Aquí puedes redirigir al dashboard o página principal
      // window.location.href = '/dashboard'

    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred during registration.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
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
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        companyName={companyName}
        setCompanyName={setCompanyName}
        country={country}
        setCountry={setCountry}
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
