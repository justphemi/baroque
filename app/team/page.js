import TeamGrid from "@/components/team-grid"
import PageHero from "@/components/page-hero"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
        <div className="text-center mb-6 bg-gradient-to-r from-orange-900 via-green-900 to-blue-900 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">Our Leadership Team</h1>         
        </div>
      <div className="container mx-auto px-4 py-20">
        <TeamGrid />
      </div>
    </div>
  )
}
