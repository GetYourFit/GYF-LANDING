export default function Services() {
  const services = [
    {
      id: "service-api",
      title: "AI Styling API",
      blurb:
        "Integrate our RESTful API to analyze photos and return body type, undertone, and fit recommendations in milliseconds.",
      bullets: [
        "JSON responses with confidence scores",
        "SDKs for JS, Swift, Kotlin",
        "99.9% uptime and rate limiting"
      ],
    },
    {
      id: "service-tryon",
      title: "Virtual Try-On",
      blurb:
        "Render photorealistic try-ons with size-aware draping so shoppers can visualize the fit across catalog items.",
      bullets: [
        "Supports tops, bottoms, dresses, accessories",
        "Batch & real-time modes",
        "Privacy-safe processing"
      ],
    },
    {
      id: "service-recos",
      title: "Style Recommendations",
      blurb:
        "Serve personalized outfits using AI that learns user taste, context, and inventory constraints.",
      bullets: [
        "Trend-aware ranking",
        "Merch rules & exclusions",
        "A/B experiments and analytics"
      ],
    },
  ];

  return (
    <section id="service" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-100 py-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black text-center">
            Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 sm:gap-10 lg:gap-12 xl:gap-16 items-stretch">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="bg-gradient-to-b from-coral-400 to-coral-200/20 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full">
              <h3 className="text-2xl font-manrope font-bold text-black mb-3">{s.title}</h3>
              <p className="text-black/90 font-manrope mb-5 leading-relaxed">{s.blurb}</p>
              <ul className="space-y-2 text-black font-manrope text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start">
                    <span className="mr-2">✔</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
