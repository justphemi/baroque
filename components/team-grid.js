import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { teamMembers } from "@/lib/team-data"
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export default function TeamGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <Card
          key={member.slug}
          className={`group border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-8 text-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 overflow-hidden bg-slate-100 ring-4 ring-orange-50">
              <Image
                src={member.logo || "/placeholder-user.jpg"}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-orange-600 text-sm font-semibold mb-3">{member.position}</p>
            <p className="text-slate-600 text-sm mb-5 line-clamp-3">{member.shortBio}</p>

            <div className="flex justify-center space-x-2 mb-5">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {member.social.facebook && (
                <a
                  href={member.social.facebook}
                  className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {member.social.instagram && (
                <a
                  href={member.social.instagram}
                  className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>

            <Link href={`/team/${member.slug}`}>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">View Profile</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
