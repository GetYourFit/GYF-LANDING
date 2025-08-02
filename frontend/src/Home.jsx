import React, { useState } from "react";
import { motion } from "framer-motion";
// TODO: IMPORT YOUR ICONS — e.g., from lucide-react or react-icons
// import { CheckCircle, Target, Users, TrendingUp, Zap, Eye, Globe, Code, Camera, ShoppingBag, Star, ChevronDown } from 'your-icon-lib';

// Placeholder icon components to prevent Render errors; replace with real ones
const CheckCircle = ({ className }) => <span className={className}>✔</span>;
const Target = ({ className }) => <span className={className}>🎯</span>;
const Users = ({ className }) => <span className={className}>👥</span>;
const TrendingUp = ({ className }) => <span className={className}>📈</span>;
const Zap = ({ className }) => <span className={className}>⚡</span>;
const Eye = ({ className }) => <span className={className}>👁</span>;
const Globe = ({ className }) => <span className={className}>🌐</span>;
const Code = ({ className }) => <span className={className}>💻</span>;
const Camera = ({ className }) => <span className={className}>📷</span>;
const ShoppingBag = ({ className }) => <span className={className}>🛍</span>;
const Star = ({ className }) => <span className={className}>⭐</span>;
const ChevronDown = ({ className }) => <span className={className}>⬇</span>;

// Example navigation and service data (replace as needed)
const navItems = [
  {
    id: 'services',
    dropdown: [
      { id: 'lookbook', label: 'AI Lookbook Creation', icon: <Eye className="w-6 h-6" /> },
      { id: 'daily-style', label: 'Daily Style Advisor', icon: <Globe className="w-6 h-6" /> },
      { id: 'event-styling', label: 'Event Styling Concierge', icon: <Zap className="w-6 h-6" /> }
    ]
  }
];
const getServiceDescription = (id) => {
  switch (id) {
    case 'lookbook': return "Effortless lookbook generation for eCommerce and editorial campaigns. Upload assets, get AI-curated outfits.";
    case 'daily-style': return "Personalized, adaptive outfit suggestions for your customers every single day.";
    case 'event-styling': return "Style your audience for galas, interviews, and parties through data-backed virtual consultations.";
    default: return "";
  }
};

const floatVariants = {
  animate: { y: [0, -16, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } },
  animateDelayed: { y: [0, 16, 0], transition: { repeat: Infinity, duration: 6, ease: "easeInOut" } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" }
  })
};

export default function HomePage({setCurrentPage}) {
  // You'd use your app's router/state
  

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 1.2 }}
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(147,51,234,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236,72,153,0.1) 0%, transparent 50%)'
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <motion.span
              className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold rounded-full mb-6 animate-bounce-slow"
              initial={{ scale: 0.92, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.85, repeat: Infinity, repeatType: 'mirror' }}
            >
              ✨ Revolutionizing Fashion Intelligence
            </motion.span>
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-slate-800 via-purple-700 to-pink-700 bg-clip-text text-transparent leading-tight"
              variants={fadeUp}
              custom={1}
            >
              GET YOUR FIT
            </motion.h1>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 animate-pulse"
              variants={fadeUp} custom={2}
            />
            <motion.p
              className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto font-light leading-relaxed"
              variants={fadeUp} custom={3}
            >
              AI-Powered Fashion Recommendations for Every Body Type &amp; Skin Tone
            </motion.p>
            <motion.p
              className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
              variants={fadeUp} custom={4}
            >
              B2B Fashion Intelligence API · Virtual Styling · Personalized Recommendations for All Genders
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.button
                onClick={() => setCurrentPage('contact')}
                className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Get API Access</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
              <motion.button
                onClick={() => setCurrentPage('personal-styling')}
                className="px-12 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services
              </motion.button>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 text-sm">
              <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                98.6% Accuracy Rate
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                15k+ Recommendations
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full backdrop-blur-sm"
          variants={floatVariants} animate="animate" 
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full backdrop-blur-sm"
          variants={floatVariants} animate="animateDelayed"
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 bg-indigo-500/10 rounded-full backdrop-blur-sm"
          variants={floatVariants} animate="animate"
        />
        <motion.div
          className="absolute top-40 right-1/4 w-12 h-12 bg-purple-400/10 rounded-full backdrop-blur-sm"
          variants={floatVariants} animate="animateDelayed"
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-pink-400/10 rounded-full backdrop-blur-sm"
          variants={floatVariants} animate="animate"
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "98.6%", label: "Accuracy Rate", icon: <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" /> },
              { number: "1.5K+", label: "Recommendations", icon: <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-3" /> },
              { number: "<150ms", label: "Response Time", icon: <Zap className="w-8 h-8 text-emerald-600 mx-auto mb-3" /> }
            ].map((stat, index) => (
              <motion.div
                key={index} className="group hover:transform hover:scale-105 transition-all duration-300"
                variants={fadeUp} initial="hidden" animate="visible" custom={index}
                whileHover={{ scale: 1.08 }}
              >
                {stat.icon}
                <div className="text-3xl font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              Why Choose GYF
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Revolutionary Fashion Intelligence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our AI-powered platform understands every body type, skin tone, and style preference to deliver personalized fashion recommendations that increase sales and customer satisfaction.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Eye className="w-12 h-12 text-purple-600" />,
                title: "AI Fashion Analysis",
                description: "Advanced computer vision analyzes body measurements, proportions, and skin undertones to provide precise fashion recommendations with 98.6% accuracy.",
                features: ["Body type detection", "Skin tone analysis", "Style preference learning"]
              },
              {
                icon: <Globe className="w-12 h-12 text-pink-600" />,
                title: "Universal Gender Support",
                description: "Inclusive algorithms for all genders, body types, and style preferences. Culturally aware recommendations for global retail.",
                features: ["All gender support", "Cultural sensitivity", "Diverse style database"]
              },
              {
                icon: <Zap className="w-12 h-12 text-indigo-600" />,
                title: "Real-time Integration",
                description: "Seamless REST API & SDK integration. Response times under 150ms. Industry-best docs and 24/7 enterprise support.",
                features: ["RESTful API (v3.4)", "SDK: JS, Swift, Kotlin", "99.9% uptime SLA"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-200"
                whileHover={{ scale: 1.05 }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Simple Integration Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Get started with our fashion intelligence API in a few simple steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: <Code className="w-10 h-10 text-purple-600" />,
                title: "API Integration",
                description: "Integrate our RESTful API with comprehensive documentation and SDK support."
              },
              {
                step: "02",
                icon: <Camera className="w-10 h-10 text-pink-600" />,
                title: "Image Analysis",
                description: "Upload customer photos for body type and skin tone analysis using computer vision."
              },
              {
                step: "03",
                icon: <TrendingUp className="w-10 h-10 text-indigo-600" />,
                title: "AI Recommendations",
                description: "Receive personalized fashion recommendations based on AI analysis and preferences."
              },
              {
                step: "04",
                icon: <ShoppingBag className="w-10 h-10 text-emerald-600" />,
                title: "Customer Experience",
                description: "Deliver enhanced shopping and virtual styling experiences in real time."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-4 border-slate-100 group-hover:border-purple-200">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Curated Fashion, Powered by AI
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Whether you&#39;re planning a lookbook, need daily style advice, or want to stand out at events—
              our personalized fashion services have you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navItems.find(item => item.id === 'services')?.dropdown?.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2 border border-slate-200"
                onClick={() => setCurrentPage(service.id)}
                whileHover={{ scale: 1.04 }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-purple-700 transition-colors duration-300">
                    {service.label}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {getServiceDescription(service.id)}
                </p>
                <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
                  Learn more
                  <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              Client Success
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Trusted by Leading Brands</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">See how fashion brands are transforming their customer experience with our AI-powered recommendations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "GYF's API increased our conversion rate by 35% and reduced returns by 31%. The accuracy is incredible.",
                author: "Sarah Johnson",
                company: "FashionForward Inc.",
                metric: "+35% Conversion"
              },
              {
                quote: "The virtual styling feature has revolutionized how our customers shop. Engagement is through the roof.",
                author: "Michael Chen",
                company: "StyleTech Solutions",
                metric: "+70% Engagement"
              },
              {
                quote: "Implementation was seamless and the results immediate. Our customers love the personalized recommendations.",
                author: "Emma Rodriguez",
                company: "TrendCorp",
                metric: "+44% Satisfaction"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-6">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.author}</div>
                      <div className="text-slate-500 text-sm">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">{testimonial.metric}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
        For Early Partners
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Promise to Fashion Innovators</h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        As an early-stage startup, we’re working hand-in-hand with brands who believe in the future of AI-driven fashion. We’re not just building tools — we’re co-creating the future of personalized shopping.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Agile Integration",
          description:
            "We work closely with your team to provide smooth API onboarding, no matter your tech stack."
        },
        {
          title: "Data You Own",
          description:
            "We believe in transparency — your customer insights stay yours. We simply help you act on them better."
        },
        {
          title: "Iterate with Us",
          description:
            "As our partner, your feedback directly influences feature development and roadmap priorities."
        }
      ].map((promise, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-3">{promise.title}</h3>
          <p className="text-slate-600 leading-relaxed">{promise.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Fashion?</h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join leading fashion brands using our AI-powered recommendation engine. Start your free trial today and see the difference personalized fashion intelligence can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={() => setCurrentPage('contact')}
                className="px-12 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                Request Demo
              </motion.button>
              <motion.button
                onClick={() => setCurrentPage('contact')}
                className="px-12 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                View Pricing
              </motion.button>
            </div>
          </div>
        </div>
        {/* Floating CTA Decorations */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full"
          variants={floatVariants} animate="animateDelayed"
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full"
          variants={floatVariants} animate="animate"
        />
      </section>
    </div>
  );
}
