import { Star } from 'lucide-react';

export default function ClientSuccess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-sage-100 py-6 mb-8">
          <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black text-center">
            Why Leading Brands Trust GetYourFit
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-16">
          <p className="text-xl lg:text-2xl font-manrope font-bold text-black max-w-6xl mx-auto">
            Top fashion brands are enhancing customer journeys and driving measurable growth with our AI-powered outfit recommendations
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-coral-400 to-coral-200/20 p-8 lg:p-12 rounded-lg shadow-2xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-24 h-32 lg:w-32 lg:h-40 rounded-full bg-gray-300 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("https://api.builder.io/api/v1/image/assets/TEMP/profile-placeholder")'
                    }}
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <blockquote className="text-lg lg:text-xl font-manrope text-black mb-6 leading-relaxed tracking-wide">
                  "Seamless to implement, immediate impact. Our customers love the personalization, and we saw a 44% jump in satisfaction."
                </blockquote>

                {/* Star Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Attribution */}
                <div className="text-black">
                  <p className="text-xl font-manrope font-medium mb-1">Emma Rodrigo</p>
                  <p className="text-lg font-manrope">TrentCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
