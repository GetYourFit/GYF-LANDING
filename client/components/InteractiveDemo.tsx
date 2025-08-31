import { Upload, MessageCircle } from 'lucide-react';

export default function InteractiveDemo() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Interactive Elements */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl lg:text-5xl font-lora font-bold text-black mb-6 leading-tight">
                Curated Outfits & Style Inspo.
              </h2>
              <p className="text-lg font-lora text-gray-700 leading-relaxed">
                Not sure how to style it? GetYourFit's got you. Just upload your image and explore full looks to trending fits—personalized to match your vibe.
              </p>
            </div>

            {/* Upload Photo Button */}
            <div className="bg-black rounded-2xl p-6 flex items-center gap-4 hover:bg-gray-800 transition-colors duration-200 cursor-pointer group">
              <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-200">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-manrope font-semibold text-lg">
                Upload your Photo
              </span>
            </div>

            {/* Chat Interface */}
            <div className="bg-black rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-200 cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors duration-200 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-manrope font-semibold text-lg leading-relaxed">
                  Not sure what to wear tonight? just Chat to discover stylish outfits for your every occasion.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Fashion Images */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-coral-50 rounded-3xl"></div>
            
            {/* Fashion Image 1 - Top Right */}
            <div className="absolute top-0 right-0 w-48 h-64 transform rotate-6 hover:rotate-12 transition-transform duration-300">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1af525cebb7d697ec32ff06ce842da7d7dd13fb0?width=550"
                alt="Purple fashion suit"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                style={{ boxShadow: '1px 1px 31.25px 19px rgba(197, 43, 0, 0.25)' }}
              />
            </div>

            {/* Fashion Image 2 - Middle */}
            <div className="absolute top-32 left-12 w-40 h-52 transform -rotate-3 hover:rotate-3 transition-transform duration-300">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/20ef208220fc9f448e1b28c6b49fc0bb1d5e7d13?width=424"
                alt="Casual summer outfit"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                style={{ boxShadow: '1px 1px 31.25px 19px rgba(197, 43, 0, 0.25)' }}
              />
            </div>

            {/* Fashion Image 3 - Bottom Right */}
            <div className="absolute bottom-4 right-8 w-44 h-56 transform rotate-12 hover:rotate-6 transition-transform duration-300">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2560c67f4057be62e79a38084176994d6b41b15c?width=502"
                alt="Red fashion outfit"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                style={{ boxShadow: '1px 1px 31.7px 19px rgba(197, 43, 0, 0.25)' }}
              />
            </div>

            {/* Background decoration */}
            <div className="relative w-full h-96 rounded-3xl"></div>
          </div>

          {/* Mobile Fashion Images */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1af525cebb7d697ec32ff06ce842da7d7dd13fb0?width=550"
              alt="Purple fashion suit"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/20ef208220fc9f448e1b28c6b49fc0bb1d5e7d13?width=424"
              alt="Casual summer outfit"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
