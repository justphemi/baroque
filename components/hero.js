"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Transforming Business Through Innovation",
      description:
        "We partner with organizations to deliver exceptional results through strategic consulting, advanced engineering, and comprehensive training programs.",
    },
    {
      title: "Engineering Excellence Redefined",
      description:
        "Our expert engineering team delivers innovative solutions that drive efficiency, sustainability, and growth across diverse industries.",
    },
    {
      title: "Empowering Growth Through Training",
      description:
        "Comprehensive training programs designed to enhance skills, boost productivity, and accelerate advancement for individuals and teams.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden brand-gradient">
      {/* Subtle accent glow and grid */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-orange-600/20 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <p className="section-label mb-6 animate-fade-in-up">Professional Excellence Delivered</p>

          <div className="mb-10 min-h-[260px] flex items-center justify-center">
            <div key={currentSlide} className="animate-slide-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-base font-semibold group rounded-full"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-orange-500 w-8" : "bg-white/25 w-2"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
