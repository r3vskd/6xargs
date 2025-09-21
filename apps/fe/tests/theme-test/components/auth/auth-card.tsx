"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, ChevronDown, Eye, EyeOff, Lock, Building, Globe } from "lucide-react"

interface AuthCardProps {
  isLoading: boolean
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  confirmPassword: string
  setConfirmPassword: (confirmPassword: string) => void
  companyName: string
  setCompanyName: (companyName: string) => void
  country: string
  setCountry: (country: string) => void
  rememberMe: boolean
  setRememberMe: (remember: boolean) => void
  onSignIn: (e: React.FormEvent) => void
  onSignUp: (e: React.FormEvent) => void
  onSocialLogin: (provider: string) => void
  onForgotPassword: () => void
}

export function AuthCard({
  isLoading,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  companyName,
  setCompanyName,
  country,
  setCountry,
  rememberMe,
  setRememberMe,
  onSignIn,
  onSignUp,
  onSocialLogin,
  onForgotPassword,
}: AuthCardProps) {
  const [activeTab, setActiveTab] = useState("signin")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const cybersecurityCountries = [
    "United States", "United Kingdom", "Germany", "Canada", "Australia", "France", "Netherlands", "Israel", "Japan", "Singapore",
    "Switzerland", "Sweden", "Finland", "Denmark", "Norway", "South Korea", "India", "China", "Russia", "Ukraine",
    "Poland", "Czech Republic", "Estonia", "Lithuania", "Latvia", "Ireland", "Belgium", "Austria", "Italy", "Spain",
    "Portugal", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", "South Africa", "Nigeria", "Kenya", "Egypt",
    "United Arab Emirates", "Saudi Arabia", "Qatar", "Turkey", "Greece", "Romania", "Bulgaria", "Hungary", "Slovakia", "Slovenia",
    "Croatia", "Serbia", "Bosnia and Herzegovina", "Montenegro", "North Macedonia", "Albania", "Moldova", "Belarus", "Georgia", "Armenia",
    "Azerbaijan", "Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Afghanistan", "Pakistan", "Bangladesh", "Sri Lanka",
    "Nepal", "Bhutan", "Maldives", "Myanmar", "Thailand", "Vietnam", "Laos", "Cambodia", "Malaysia", "Indonesia",
    "Philippines", "Brunei", "East Timor", "Papua New Guinea", "Fiji", "New Zealand", "Taiwan", "Hong Kong", "Macau", "Mongolia"
  ]

  const handleRedirect = () => {
    window.open("https://www.youtube.com/@diecastbydollarall", "_blank")
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
        {/* Header with tabs and close button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex bg-black/30 backdrop-blur-sm rounded-full p-1 border border-white/10">
            <button
              onClick={() => setActiveTab("signup")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === "signup"
                  ? "bg-white/20 backdrop-blur-sm text-white border border-white/20 shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Sign up
            </button>
            <button
              onClick={() => setActiveTab("signin")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === "signin"
                  ? "bg-white/20 backdrop-blur-sm text-white border border-white/20 shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Sign in
            </button>
          </div>
          <button className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-black/40 transition-all duration-200 hover:scale-110 hover:rotate-90">
            <X className="w-5 h-5 text-white/80" />
          </button>
        </div>

        <h1 className="text-3xl font-normal text-white mb-8 transition-all duration-300">
          {activeTab === "signup" ? "Create an account" : "Welcome back"}
        </h1>

        <div className="relative overflow-hidden">
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "signup" ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 absolute inset-0"
            }`}
          >
            {/* Sign Up Form */}
            <form
              onSubmit={onSignUp}
              className="space-y-4"
            >
              {/* Company name field */}
              <div className="relative">
                <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200" />
                <Input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="custom-input bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-purple-400/60 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Company Name"
                  required
                />
              </div>

              {/* Country selector */}
              <div className="relative" ref={dropdownRef}>
                <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200 z-10" />
                <div
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="custom-input w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white focus:border-purple-400/60 focus:ring-0 pl-12 pr-12 text-base transition-all duration-200 hover:bg-black/30 cursor-pointer flex items-center"
                >
                  <span className={country ? "text-white" : "text-white/40"}>
                    {country || "Company Country"}
                  </span>
                </div>
                <ChevronDown 
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none transition-transform duration-200 ${
                    isCountryDropdownOpen ? "rotate-180" : ""
                  }`} 
                />
                
                {/* Custom dropdown */}
                {isCountryDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl max-h-60 overflow-y-auto z-50 shadow-2xl">
                    {cybersecurityCountries.map((countryName) => (
                      <div
                        key={countryName}
                        onClick={() => {
                          setCountry(countryName)
                          setIsCountryDropdownOpen(false)
                        }}
                        className="px-4 py-3 text-white hover:bg-cyan-500/20 cursor-pointer transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                      >
                        {countryName}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Email field */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-input bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-purple-400/60 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Email"
                />
              </div>

              {/* Password field */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="custom-input bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-purple-400/60 focus:ring-0 pl-12 pr-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Confirm Password field */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="custom-input bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-purple-400/60 focus:ring-0 pl-12 pr-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Create account button */}
              <Button
                type="submit"
                className="w-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium rounded-2xl h-14 mt-8 text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create an account"}
              </Button>
            </form>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "signin" ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 absolute inset-0"
            }`}
          >
            <form
              onSubmit={onSignIn}
              className="space-y-4"
            >
              {/* Email field */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-input bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-purple-400/60 focus:ring-0 pl-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password field */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 transition-colors duration-200" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="custom-input bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 text-white placeholder:text-white/40 focus:border-purple-400/60 focus:ring-0 pl-12 pr-12 text-base transition-all duration-200 hover:bg-black/30 focus:bg-black/30"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Remember me and forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border border-white/20 bg-black/20 text-white focus:ring-white/20 focus:ring-2"
                  />
                  <span className="text-white/60 text-sm">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign in button */}
              <Button
                type="submit"
                className="w-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 text-white font-medium rounded-2xl h-14 mt-8 text-base transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="px-4 text-white/40 text-sm font-medium">
            {activeTab === "signup" ? "OR SIGN IN WITH" : "OR CONTINUE WITH"}
          </span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleRedirect}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 flex items-center justify-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full"></div>
            </div>
          </button>
          <button
            onClick={handleRedirect}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl h-14 flex items-center justify-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <div className="w-6 h-6 text-white">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
          </button>
        </div>

        <p className="text-center text-white/40 text-sm mt-8">
          {activeTab === "signup"
            ? "By creating an account, you agree to our Terms & Service"
            : "By signing in, you agree to our Terms & Service"}
        </p>
      </div>
    </div>
  )
}
