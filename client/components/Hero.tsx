export default function Hero() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-manrope font-bold text-black leading-tight tracking-wide">
                AI-Powered Fashion Recommendations for Every Body Type & Skin Tone
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl font-manrope text-black tracking-wide">
                B2B Fashion Intelligence API · Virtual Styling · Personalized Recommendations for All Genders
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="bg-black text-white px-8 py-4 rounded-2xl font-lora font-bold text-xl tracking-widest hover:bg-gray-800 transition-colors duration-200 shadow-lg">
                  Get API Access
                </button>
                <a href="/services" className="bg-black text-white px-8 py-4 rounded-2xl font-lora font-bold text-xl tracking-widest hover:bg-gray-800 transition-colors duration-200 shadow-lg text-center">
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-b from-coral-400 via-coral-300 to-coral-200 rounded-[160px_0_66px_0] p-8 lg:p-12">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/24a41cecf192c69c173dc46637c1fd3c1c5caf5d?width=1250"
                alt="Fashion model showcasing AI-powered styling"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-coral-400/20 to-sage-400/10 rounded-[160px_0_66px_0] -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
