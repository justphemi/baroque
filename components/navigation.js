"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-auto">
                <Image
                  src="/logo-new.png"
                  alt="Baroque Variations Logo"
                  width={180}
                  height={48}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-orange-600 ${
                    pathname === link.href ? "text-orange-600" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href='mailto:info@baroquevariations.com'>
                <Button href='mailto:info@baroquevariations.com' className="bg-orange-600 hover:bg-orange-700 text-white">Email Us</Button>
              </Link>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-8 h-8 text-gray-900 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="w-8 h-8 text-gray-900 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in" onClick={() => setIsOpen(false)} />

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-2xl shadow-2xl z-50 md:hidden animate-modal-pop">
            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <p className="text-gray-600 text-sm">Navigate to</p>
              </div>

              {/* Navigation Links */}
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-center py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 ${
                      pathname === link.href ? "bg-orange-100 text-orange-600" : "text-gray-700"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 border-t border-gray-200">
                  <Link href='mailto:info@baroquevariations.com'>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Email Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
