"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="p-4 font-mono">
      <div className="bg-white/5 backdrop-blur border rounded-full border-gray-800/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="#" className="flex items-center">
              <span className="font-bold text-white">ideaboard</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <button className="px-4 py-2 text-gray-400 rounded-full border border-gray-700 hover:bg-gray-600 hover:text-white transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 bg-white text-black rounded-full border hover:bg-gray-200 transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800">
              About
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800">
              Services
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800">
              Contact
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="px-2 space-y-1">
              <button className="w-full px-3 py-2 rounded-full text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-left">
                Log in
              </button>
              <button className="w-full px-3 py-2 rounded-full text-base font-medium bg-white text-black hover:bg-gray-200 transition-colors text-left">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}