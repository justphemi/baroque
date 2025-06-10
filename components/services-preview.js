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
        "End-to-end manufacturing solutions with focus on quality, efficiency, and sustainable production practices.",
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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of professional services designed to meet the diverse needs of modern
              businesses and drive sustainable success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
