"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Twitter, Facebook, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { teamMembers } from "@/lib/team-data"
import SocialMediaEmbed from "@/components/social-media-embed"

export default function MemberDetail({ member }) {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const scrollRef = useRef(null)
  const otherMembers = teamMembers.filter((m) => m.slug !== member.slug)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextMember = () => {
    if (isMobile && scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    } else {
      setCurrentMemberIndex((prev) => (prev + 1) % otherMembers.length)
    }
  }

  const prevMember = () => {
    if (isMobile && scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    } else {
      setCurrentMemberIndex((prev) => (prev - 1 + otherMembers.length) % otherMembers.length)
    }
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Member Profile */}
          {/* Back Button */}
          <div className="mb-1">
            <Link href="/team">
              <Button variant="outline" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back
              </Button>
            </Link>
          </div>
          <Card className="shadow-xl mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden bg-gray-100">
                  <Image
                    src={member.logo || "/logo-new.png"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h1>
                  <p className="text-2xl text-orange-600 font-semibold mb-4">{member.position}</p>

                  <div className="flex justify-center md:justify-start space-x-4 mb-6">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-orange-600" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-green-600" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                      >
                        <Facebook className="w-5 h-5 text-blue-600" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
                      >
                        <Instagram className="w-5 h-5 text-pink-600" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-700 leading-relaxed">{member.shortBio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Bio */}
          <Card className="shadow-xl mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{member.name}'s Profile</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {member.detailedBio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience & Expertise */}
          {member.expertise && (
            <Card className="shadow-xl mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {member.expertise.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Social Media Posts */}
          {member.social.twitter && (
            <SocialMediaEmbed platform="x" username={member.social.twitter.split("/").pop()} count={5} />
          )}

          {member.social.linkedin && (
            <SocialMediaEmbed platform="linkedin" username={member.social.linkedin.split("/").pop()} count={5} />
          )}


          {/* Other Team Members Slider */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Other Team Members</h2>
                {!isMobile && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={prevMember}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextMember}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              {isMobile ? (
                <div
                  ref={scrollRef}
                  className="flex space-x-6 overflow-x-auto pb-4 mobile-slide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {otherMembers.map((otherMember) => (
                    <div key={otherMember.slug} className="flex-shrink-0 text-center group w-48">
                       <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden bg-gray-100">
                  <Image
                          src={member.logo || "/logo-new.png"}
                          alt={otherMember.name}
                          width={80}
                          height={80}
                          className="object-contain rounded-full"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{otherMember.name}</h3>
                      <p className="text-xs text-orange-600 mb-3">{otherMember.position}</p>
                      <Link href={`/team/${otherMember.slug}`}>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white text-xs">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {otherMembers.slice(currentMemberIndex, currentMemberIndex + 3).map((otherMember) => (
                    <div key={otherMember.slug} className="text-center group">
                       <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden bg-gray-100">
                         <Image
                          src={member.logo || "/logo-new.png"}
                          alt={otherMember.name}
                          width={80}
                          height={80}
                          className="object-contain rounded-full"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{otherMember.name}</h3>
                      <p className="text-sm text-orange-600 mb-3">{otherMember.position}</p>
                      <Link href={`/team/${otherMember.slug}`}>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
