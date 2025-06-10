import { Card, CardContent } from "@/components/ui/card"

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-900 via-green-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Strategic Partners</h2>
          <p className="text-xl text-orange-200 mb-12 leading-relaxed">
            We collaborate with industry leaders to deliver comprehensive solutions and expand our service capabilities.
          </p>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-green-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IF</span>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Intelifix Services</h3>
                  <p className="text-orange-200">
                    Strategic technology partner providing innovative IT solutions and digital transformation services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-orange-200 text-lg">
              Interested in partnering with us?
              <a href="/contact" className="text-white font-semibold hover:underline ml-2">
                Let's discuss opportunities →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
