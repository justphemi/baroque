'use client'

import { useState } from "react"
import Hero from "@/components/hero"
import AboutPreview from "@/components/about-preview"
import TeamPreview from "@/components/team-preview"
import ServicesPreview from "@/components/services-preview"
import Image from "next/image"

export default function HomePage() {
  // Partners data
  const partners = [
    { name: 'Waka Credit', logo: 'https://th.bing.com/th/id/OIP.WwH72oWinRhfw3LpztamfQHaB1?w=344&h=86&c=7&r=0&o=7&pid=1.7&rm=3' },
    { name: 'Intellifix Services', logo: 'https://th.bing.com/th/id/OIP.XzPDtSgWZ3dGilsKd93O0AHaHa?w=161&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
    { name: 'Mint MFB', logo: 'https://th.bing.com/th/id/OIP._e0ez13_GEZ5gh4165osLgHaE7?w=210&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
  ]

  // Clients data
  const clients = [
    { name: 'NDDC', logo: 'https://th.bing.com/th/id/OIF.OsHkvCPz87ZFc2IBtLsvTA?w=241&h=180&c=7&r=0&o=7&pid=1.7&rm=3g' },
    { name: 'Dover Engineering', logo: 'data:image/webp;base64,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' },
    { name: 'Signature Bank', logo: 'data:image/webp;base64,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' },
    { name: 'Globus Bank', logo: 'data:image/webp;base64,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' },
    { name: 'Heirs Energy', logo: 'https://th.bing.com/th/id/OIP.zNRJHT2GYgRVucjwKGHkhwAAAA?w=292&h=62&c=7&r=0&o=7&pid=1.7&rm=3' },
    { name: 'SIms Nigeria', logo: 'https://th.bing.com/th/id/OIP.RH9JrVn0vK9xgTflEY-rcQHaCH?w=350&h=99&c=7&r=0&o=7&pid=1.7&rm=3' },
  ]

  return (
    <div className="overflow-hidden relative">
      <Hero />

      {/* Image Section */}
      <section className="pt-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-xl">At Baroque Variations</strong>, we believe that innovation is not just about technology—it's about reimagining
                how businesses operate, grow, and succeed in an ever-evolving marketplace.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our state-of-the-art facilities and collaborative environment foster creativity and excellence, enabling
                our team to deliver solutions that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutPreview />
      <ServicesPreview />
      <TeamPreview />
      
      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6 hover:scale-105 transition-transform duration-300">
                <div className="h-24 w-24 md:h-32 md:w-32 relative mb-4">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </div>
                <p className="text-center font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300">
                <div className="h-20 w-20 md:h-24 md:w-24 relative mb-3">
                  <Image 
                    src={client.logo} 
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 100px"
                  />
                </div>
                <p className="text-center text-sm font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
