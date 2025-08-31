import { Camera, BarChart3, ShoppingBag, Monitor } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "API Integration",
      description: "Integrate our RESTful API with comprehensive documentation and SDK support."
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Image Analysis", 
      description: "Upload customer photos for body type and skin tone analysis using computer vision."
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "AI Recommendations",
      description: "Receive personalized fashion recommendations based on AI analysis and preferences."
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Customer Experience",
      description: "Deliver enhanced shopping and virtual styling experiences in real time."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-sage-100 py-6 mb-8">
          <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black text-center">
            How It Works
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-6">
            Seamless Integration Process
          </h3>
          <p className="text-xl lg:text-2xl font-manrope font-bold text-black max-w-5xl mx-auto">
            Effortlessly connect with our Fashion Intelligence API in just a few simple steps and unlock powerful personalization to elevate your customer experience
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 sm:gap-10 lg:gap-12 xl:gap-16 items-stretch">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-coral-400 to-coral-200/20 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="text-black mb-4 flex justify-center">
                {step.icon}
              </div>
              
              <h4 className="text-xl font-manrope font-bold text-black mb-4">
                {step.title}
              </h4>
              
              <p className="text-black font-manrope text-sm leading-relaxed tracking-wide">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
