import TeamGrid from "@/components/team-grid"
import PageHero from "@/components/page-hero"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        label="Our People"
        title="Our Leadership Team"
        description="A multidisciplinary team bringing decades of combined experience to every engagement."
      />
      <div className="container mx-auto px-4 py-24">
        <TeamGrid />
      </div>
    </div>
  )
}
