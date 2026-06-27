import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Users, Award } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Our Vision",
    text: "To be the leading consultancy firm in Nigeria and across Africa, recognized for innovative solutions and an unwavering commitment to client success.",
  },
  {
    icon: Users,
    title: "Our Mission",
    text: "To deliver exceptional consultancy services and innovative solutions that empower our clients to achieve sustainable growth and operational excellence.",
  },
  {
    icon: Award,
    title: "Our Values",
    text: "Excellence, integrity, innovation, and collaboration form the foundation of everything we do, ensuring lasting partnerships and exceptional outcomes.",
  },
]

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built on Purpose and Principle</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="text-center group border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-100 transition-colors">
                    <pillar.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pillar.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/about">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-base font-semibold group rounded-full"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
