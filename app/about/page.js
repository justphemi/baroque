import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/page-hero"
import { Briefcase, GraduationCap, Cog } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const coreServices = [
    {
      icon: Briefcase,
      title: "Consultancy",
      text: "Strategic business consulting to optimize operations and drive growth.",
    },
    {
      icon: GraduationCap,
      title: "Training",
      text: "Professional development programs and skill enhancement workshops.",
    },
    {
      icon: Cog,
      title: "Engineering",
      text: "Innovative engineering solutions and technical expertise.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        label="About Us"
        title="A Partner Built for Lasting Impact"
        description="Bridging the gap between proven business practice and modern innovation across Nigeria and beyond."
      />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900">Baroque Variations Limited</strong> was founded with a vision to
                bridge the gap between traditional business practice and modern innovation. We have emerged as a trusted
                partner for organizations seeking comprehensive solutions across multiple domains.
              </p>
              <p>
                Located in the heart of Port Harcourt, Rivers State, we have built our reputation on delivering
                exceptional value through a diverse portfolio of services, from strategic consultancy that reshapes
                business landscapes to advanced engineering solutions.
              </p>
              <p>
                What sets us apart is our holistic approach to business transformation. We do not just provide services.
                We forge partnerships that endure well beyond project completion.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-100 bg-slate-50">
                <Image
                  src="/logo.png"
                  alt="Baroque Variations"
                  fill
                  className="object-contain p-12"
                />
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid md:grid-cols-2 gap-6 mb-24">
            <Card className="border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="section-label mb-3">Our Vision</p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To be the leading consultancy firm in Nigeria and across Africa, recognized for innovative solutions,
                  technical expertise, and an unwavering commitment to client success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <p className="section-label mb-3">Our Mission</p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To deliver exceptional consultancy services, world class training programs, and innovative engineering
                  solutions that empower our clients to achieve sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Services */}
          <div className="bg-slate-50 rounded-2xl p-10 md:p-14 mb-24 border border-slate-100">
            <div className="text-center mb-12">
              <p className="section-label mb-4">Our Expertise</p>
              <h2 className="text-3xl font-bold text-slate-900">Our Core Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {coreServices.map((service) => (
                <div key={service.title} className="text-center group">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-600 transition-colors">
                    <service.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="brand-gradient rounded-2xl text-white p-10 md:p-14">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label mb-4">Why Choose Us</p>
              <h2 className="text-3xl font-bold mb-8">Experience You Can Build On</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <p className="text-slate-300 leading-relaxed">
                With years of experience across diverse industries, we bring proven methodologies and best practices to
                every project, ensuring consistent delivery of exceptional results.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our multidisciplinary team combines deep industry knowledge with innovative thinking, providing
                comprehensive solutions tailored to your unique challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
