import { notFound } from "next/navigation"
import MemberDetail from "@/components/member-detail"
import { teamMembers } from "@/lib/team-data"

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export default async function MemberPage({ params }) {
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    notFound()
  }

  return <MemberDetail member={member} />
}
