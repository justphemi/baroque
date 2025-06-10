import Hero from "@/components/hero"
import AboutPreview from "@/components/about-preview"
import TeamPreview from "@/components/team-preview"
import ServicesPreview from "@/components/services-preview"
import PartnersSection from "@/components/partners-section"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Image Section */}
      <section className="pt-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className='text-xl'>At Baroque Variations</strong>, we believe that innovation is not just about technology—it's about reimagining
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
      <PartnersSection />
    </div>
  )
}
