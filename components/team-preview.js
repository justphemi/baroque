import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { teamMembers } from "@/lib/team-data"
import Image from "next/image"

export default function TeamPreview() {
  const featuredMembers = teamMembers.slice(0, 3)

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The People Behind The Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Our Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
              Our team of experts brings together decades of experience across multiple industries to deliver
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {featuredMembers.map((member, index) => (
              <Card
                key={member.slug}
                className={`group border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-5 relative overflow-hidden ring-4 ring-orange-50">
                    <Image
                      src={member.logo || "/logo.png"}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 text-sm font-semibold mb-3">{member.position}</p>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{member.shortBio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/team">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-base font-semibold group rounded-full"
              >
                Meet The Full Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
