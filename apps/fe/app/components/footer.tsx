import { Link } from "@remix-run/react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Github, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 font-sans mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-sans">About</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                About 6xargs
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                Our Mission
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-sans">Support</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                Documentation
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                API Reference
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                Help Center
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                Contact Support
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors font-sans">
                Payment Options
              </Link>
            </div>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-sans">Stay Connected</h3>
            <div className="space-y-6">
              {/* Newsletter - More prominent */}
              <div className="space-y-3">
                <p className="text-sm text-gray-300 font-sans">Get the latest updates and security insights</p>
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-gray-950 border-gray-700 text-white placeholder-gray-400 font-sans"
                  />
                  <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 font-sans">
                    Subscribe
                  </Button>
                </div>
              </div>
              
              {/* Social Icons */}
              <div>
                <p className="text-sm text-gray-300 font-sans mb-3">Follow us</p>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    <MessageCircle className="h-6 w-6" />
                    <span className="sr-only">Discord</span>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 font-sans">
            ©2025 6xargs All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}