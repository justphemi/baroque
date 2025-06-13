import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import logo from "../public/logo-new.png"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzDpYXvJxvNZuHTlWbSABZNxxWYgC8P1Q8193PvjqlEbqhE2jCX8pR7suuMFtmxH03IRg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      })
      
      if (response.ok) {
        toast.success('Subscription successful! Thank you.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        setEmail('')
      } else {
        throw new Error('Network response was not ok')
      }
    } catch (error) {
      toast.error('Subscription failed. Please try again.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-auto h-10 flex items-center justify-center">
                <Image src={logo || "/placeholder.svg"} alt="Baroque Variations Logo" width={150} height={120} />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading consultancy firm providing innovative solutions in training, engineering, manufacturing, trading,
              and general services across Nigeria and beyond.
            </p>
            
            {/* Simplified Subscription Form */}
            <div className="space-y-3 mt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">
                  No. 1 Spring Bloom Drive, Rumuesara Estate, Eneka, Port Harcourt, Rivers State
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a
                  href="mailto:info@baroquevariations.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@baroquevariations.com
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-medium text-lg mb-4">Subscribe to our newsletter</h3>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-md text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '...' : 'Subscribe'}
                </button>
              </form>
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Consultancy</li>
              <li className="text-gray-300">Training</li>
              <li className="text-gray-300">Engineering</li>
              <li className="text-gray-300">Manufacturing</li>
              <li className="text-gray-300">Trading</li>
              <li className="text-gray-300">General Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Baroque Variations Limited. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer>
  )
}