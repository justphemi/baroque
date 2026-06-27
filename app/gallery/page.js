"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      id: 1,
      src: "/logo.png?height=400&width=600",
      alt: "Team collaboration session",
      category: "Team",
      title: "Strategic Planning Session",
    },
    {
      id: 2,
      src: "/logo.png?height=400&width=600",
      alt: "Engineering project",
      category: "Engineering",
      title: "Infrastructure Development",
    },
    {
      id: 3,
      src: "/logo.png?height=400&width=600",
      alt: "Training workshop",
      category: "Training",
      title: "Professional Development Workshop",
    },
    {
      id: 4,
      src: "/logo.png?height=400&width=600",
      alt: "Office environment",
      category: "Office",
      title: "Modern Workspace",
    },
    {
      id: 5,
      src: "/logo.png?height=400&width=600",
      alt: "Client meeting",
      category: "Consultancy",
      title: "Client Consultation",
    },
    {
      id: 6,
      src: "/logo.png?height=400&width=600",
      alt: "Manufacturing facility",
      category: "Manufacturing",
      title: "Production Excellence",
    },
    {
      id: 7,
      src: "/logo.png?height=400&width=600",
      alt: "Team building",
      category: "Team",
      title: "Team Building Event",
    },
    {
      id: 8,
      src: "/logo.png?height=400&width=600",
      alt: "Technology solutions",
      category: "Technology",
      title: "Digital Innovation",
    },
  ]

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative brand-gradient pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-orange-600/15 rounded-full blur-[120px]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <p className="section-label mb-4">A Look Inside</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Our Gallery</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-5 ${
                activeCategory === category
                  ? "bg-orange-600 hover:bg-orange-700 text-white"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-orange-600"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer overflow-hidden border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(image, index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src || "/placeholder-user.jpg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                  <p className="text-orange-200 text-xs">{image.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.src || "/placeholder-user.jpg"}
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="object-contain max-h-[80vh] w-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-bold text-xl mb-2">{selectedImage.title}</h3>
                  <p className="text-orange-200">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
