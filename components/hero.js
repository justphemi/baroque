"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Transforming Business Through Innovation",
      subtitle: "Leading consultancy, engineering, and training solutions",
      description:
        "We partner with organizations to deliver exceptional results through strategic consulting, cutting-edge engineering, and comprehensive training programs.",
    },
    {
      title: "Engineering Excellence Redefined",
      subtitle: "Advanced solutions for complex challenges",
      description:
        "Our expert engineering team delivers innovative solutions that drive efficiency, sustainability, and growth across diverse industries.",
    },
    {
      title: "Empowering Growth Through Training",
      subtitle: "Professional development that makes a difference",
      description:
        "Comprehensive training programs designed to enhance skills, boost productivity, and accelerate career advancement for individuals and teams.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-green-900 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 animate-fade-in-up">
            <div className="mb-6">
              <Image
                src="/logo-new.png"
                alt="Baroque Variations Logo"
                width={300}
                height={100}
                className="mx-auto object-contain"
              />
            </div>
            <p className="text-xl md:text-2xl text-orange-200 font-light">Professional Excellence Delivered</p>
          </div>

          {/* Sliding Content */}
          <div className="mb-12 min-h-[300px] flex items-center justify-center">
            <div key={currentSlide} className="animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{slides[currentSlide].title}</h2>
              <p className="text-xl md:text-2xl text-orange-200 mb-6 font-light">{slides[currentSlide].subtitle}</p>
              <p className="text-lg text-orange-100 max-w-3xl mx-auto leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-orange-400 w-8" : "bg-white/30"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
