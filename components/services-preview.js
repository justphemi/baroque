import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Cog, Package, TrendingUp, Wrench } from "lucide-react"

export default function ServicesPreview() {
  const services = [
    {
      icon: Briefcase,
      title: "Consultancy",
      description:
        "Strategic business consulting to optimize operations, improve efficiency, and drive sustainable growth across all sectors.",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description:
        "Comprehensive professional development programs designed to enhance skills and accelerate career advancement.",
    },
    {
      icon: Cog,
      title: "Engineering",
      description:
        "Innovative engineering solutions and technical expertise to solve complex challenges and drive technological advancement.",
    },
    {
      icon: Package,
      title: "Manufacturing",
      description:
        "Complete manufacturing solutions with a focus on quality, efficiency, and sustainable production practices.",
    },
    {
      icon: TrendingUp,
      title: "Trading",
      description:
        "Strategic trading services and market analysis to maximize opportunities and minimize risks in various markets.",
    },
    {
      icon: Wrench,
      title: "General Services",
      description:
        "Comprehensive support services tailored to meet diverse business needs and operational requirements.",
    },
  ]

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
              We offer a comprehensive range of professional services designed to meet the diverse needs of modern
              businesses and drive sustainable success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`group bg-white border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-left">
                  <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                    <service.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
