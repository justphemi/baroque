export default function PageHero({ title, subtitle, description, label }) {
  return (
    <div className="relative pt-32 pb-20 brand-gradient overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-orange-600/15 rounded-full blur-[120px]" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="section-label mb-4 animate-fade-in-up">{label || "Baroque Variations"}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance animate-fade-in-up">
            {title}
          </h1>
          {subtitle && (
            <p
              className="text-xl md:text-2xl text-slate-200 mb-4 font-light animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p
              className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance animate-fade-in-up"
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
