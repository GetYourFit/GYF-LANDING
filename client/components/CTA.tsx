import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-coral-400 to-coral-200/20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-6">
          Ready To Transform Fashion?
        </h2>

        <p className="text-xl lg:text-2xl font-manrope text-black mb-12 max-w-5xl mx-auto leading-relaxed">
          Join leading fashion brands using our AI-powered recommendation engine. Start your free trial today and see the difference personalized fashion intelligence can make.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-3xl font-lora font-bold text-xl hover:bg-gray-800 transition-colors duration-200 shadow-lg">
            Request demo
          </Link>
          <button className="bg-gray-600 text-white px-8 py-4 rounded-3xl font-lora font-bold text-xl hover:bg-gray-700 transition-colors duration-200 shadow-lg">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
