import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-coral-400 to-coral-200/20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-manrope font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-manrope font-bold text-black mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl font-manrope text-black max-w-4xl mx-auto leading-relaxed">
              We love to meet new people, answer questions, and help you move forward. Drop us a line and let's create something beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-manrope font-bold text-black mb-8">
                  Ways to connect
                </h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-coral-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-coral-400" />
                    </div>
                    <div>
                      <h3 className="font-manrope font-semibold text-black mb-1">Phone</h3>
                      <p className="text-coral-400 font-manrope">+91 96570 73968, 8595900396</p>
                      <p className="text-gray-600 text-sm">Give us a call during our business hours</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-coral-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-coral-400" />
                    </div>
                    <div>
                      <h3 className="font-manrope font-semibold text-black mb-1">Email</h3>
                      <p className="text-coral-400 font-manrope">hello@getyourfit.tech</p>
                      <p className="text-gray-600 text-sm">Drop us a line and we'll get back to you! ❤️</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="bg-coral-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-coral-400" />
                    </div>
                    <div>
                      <h3 className="font-manrope font-semibold text-black mb-1">Location</h3>
                      <p className="text-black font-manrope">Delhi Technological University, Delhi 110042</p>
                      <p className="text-gray-600 text-sm">Come say hi if you're around!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-r from-coral-400 to-coral-300 text-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6" />
                  <h3 className="font-manrope font-semibold text-lg">Business Hours (India Time)</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span>9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sat - Sun</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-manrope font-bold text-black mb-8">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-manrope font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Priya"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-manrope font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Singh"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-colors duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-manrope font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priya@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-manrope font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="API Integration">API Integration</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Support">Technical Support</option>
                    <option value="Pricing">Pricing Information</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-manrope font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we make your day brighter?"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-colors duration-200 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-coral-400 text-white font-manrope font-semibold py-4 px-6 rounded-lg hover:bg-coral-500 transition-colors duration-200 shadow-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We respect your privacy. Your data won't be shared. ❤️
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
