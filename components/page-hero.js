export default function PageHero({ title, subtitle, description }) {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-orange-900 via-green-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">{title}</h1>
          {subtitle && (
            <p
              className="text-xl md:text-2xl text-orange-200 mb-6 font-light animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p
              className="text-lg text-orange-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
