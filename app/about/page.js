import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/page-hero"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-36 bg-white">
      
              <div className="text-center bg-gradient-to-r from-orange-900 via-green-900 to-blue-900 p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">About Us</h1>
              </div>


      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6 leading-relaxed">
                 <strong>Baroque Variations Limited </strong> was founded with a vision to bridge the gap between traditional business practices and modern innovation,
                  Baroque Variations Limited has emerged as a trusted partner for organizations seeking comprehensive
                  solutions across multiple domains.
                </p>
                <p className="mb-6 leading-relaxed">
                  Located in the heart of Port Harcourt, Rivers State, we have built our reputation on delivering
                  exceptional value through our diverse portfolio of services. From strategic consultancy that reshapes
                  business landscapes to cutting-edge engineering solutions.
                </p>
                <p className="leading-relaxed">
                  What sets us apart is our holistic approach to business transformation. We don't just provide
                  services; we forge partnerships that endure beyond project completion.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/logo.png?height=500&width=500"
                  alt="Baroque Variations team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading consultancy firm in Nigeria and across Africa, recognized for our innovative
                  solutions, technical expertise, and unwavering commitment to client success.
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To deliver exceptional consultancy services, world-class training programs, and innovative engineering
                  solutions that empower our clients to achieve sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultancy</h3>
                <p className="text-gray-600">Strategic business consulting to optimize operations and drive growth</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Training</h3>
                <p className="text-gray-600">Professional development programs and skill enhancement workshops</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering</h3>
                <p className="text-gray-600">Innovative engineering solutions and technical expertise</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-orange-900 via-green-900 to-blue-900 rounded-2xl text-white p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-orange-100">
                  With years of experience across diverse industries, we bring proven methodologies and best practices
                  to every project, ensuring consistent delivery of exceptional results.
                </p>
              </div>
              <div>
                <p className="text-orange-100">
                  Our multidisciplinary team also combines deep industry knowledge with innovative thinking, providing
                  comprehensive solutions tailored to your unique challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
