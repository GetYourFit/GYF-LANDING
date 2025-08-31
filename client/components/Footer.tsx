import { Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const services = [
    'Personal Styling',
    'Style Challenges', 
    'Outfit planning',
    'Virtual Consulting'
  ];

  const company = [
    'About Us',
    'Team',
    'Contact'
  ];

  const legal = [
    'Privacy policy',
    'Term of Service'
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-manrope font-semibold text-black mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-600 hover:text-coral-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-manrope font-semibold text-black mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-coral-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-manrope font-semibold text-black mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-coral-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-manrope font-semibold text-black mb-4">Send Request</h3>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                →
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              GYF is your AI-powered fashion companion. From personal styling to smart outfit planning, we bring tech & style together.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="text-2xl font-manrope font-bold text-black">
              Logo
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-coral-400 transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-coral-400 transition-colors duration-200">Cookies</a>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-coral-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-coral-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-coral-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
