import { Sparkles, Globe, Zap } from 'lucide-react';

export default function WhyChooseGYF() {
  const features = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "AI Fashion Analysis:",
      description: "Advanced computer vision analyzes body measurements, proportions, and skin undertones to provide precise fashion recommendations with 98.6% accuracy.",
      benefits: [
        "Body type detection",
        "Skin tone analysis", 
        "Style preference learning"
      ]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Universal Gender Support",
      description: "Inclusive algorithms for all genders, body types, and style preferences. Culturally aware recommendations for global retail.",
      benefits: [
        "All gender support",
        "Cultural sensitivity",
        "Diverse style database"
      ]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Real-time Integration",
      description: "Seamless REST API & SDK integration. Response times under 150ms. Industry-best docs and 24/7 enterprise support.",
      benefits: [
        "RESTful API (v3.4)",
        "SDK: JS, Swift, Kotlin",
        "99.9% uptime SLA"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-sage-100 py-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black text-center">
            Why choose GYF
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 sm:gap-10 lg:gap-12 xl:gap-16 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-coral-400 to-coral-200/20 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="text-black mb-6 flex justify-center">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-manrope font-bold text-black mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-black font-manrope mb-6 text-center leading-relaxed">
                {feature.description}
              </p>
              
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-black">
                    <span className="mr-2">✔</span>
                    <span className="font-manrope text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
