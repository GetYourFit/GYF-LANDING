import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion,useInView,useAnimation } from "framer-motion";

// Placeholder icons (replace with lucide or others in production)
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

const testimonialData = [
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
];

const NikeLogo = () => (
  <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
    <path d="M1 13c12.667-2 41.4-8.7 54-12l-5 7-4.4-.5c-3.4 1.7-7.5 3.7-12.9 6.2-3.9 1.8-7.4 3.1-11.7 4.6-2.9 1-14.3 3.8-14 3.7S2.5 19 1 13z" fill="#111"/>
  </svg>
);
const AdidasLogo = () => (
  <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
    <g fill="#111">
      <rect x="6" y="16" width="8" height="8" rx="4" />
      <rect x="24" y="12" width="8" height="12" rx="4" />
      <rect x="42" y="8" width="8" height="16" rx="4" />
    </g>
  </svg>
);
const ZaraLogo = () => (
  <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
    <text x="50%" y="65%" fontSize="15" fontWeight="bold" textAnchor="middle" fill="#111" fontFamily="serif">ZARA</text>
  </svg>
);
const HmLogo = () => (
  <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
    <text x="50%" y="65%" fontSize="15" fontWeight="bold" textAnchor="middle" fill="#E60027" fontFamily="sans-serif">H&M</text>
  </svg>
);
const UniqloLogo = () => (
  <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
    <rect x="0" y="0" width="56" height="24" rx="6" fill="#eb0029"/>
    <text x="50%" y="65%" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#fff" fontFamily="sans-serif">UNIQLO</text>
  </svg>
);

const brandData = [
  { logo: <NikeLogo />, name: "Nike" },
  { logo: <AdidasLogo />, name: "Adidas" },
  { logo: <ZaraLogo />, name: "Zara" },
  { logo: <HmLogo />, name: "H&M" },
  { logo: <UniqloLogo />, name: "Uniqlo" }
];

function useScrollDirection(onDown, onUp, idleDelay = 650) {
  // Custom hook to detect scroll direction and run callbacks.
  // onDown: () => void, onUp: () => void
  const lastScrollY = useRef(window.scrollY || 0);
  const lastTime = useRef(Date.now());
  const scrollTimeout = useRef();

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY || 0;
      const now = Date.now();

      if (scrolled > lastScrollY.current) {
        onDown && onDown();
      } else if (scrolled < lastScrollY.current) {
        onUp && onUp();
      }
      lastScrollY.current = scrolled;
      lastTime.current = now;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        // idle: revert to right
        onDown && onDown();
      }, idleDelay);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout.current);
    };
    // eslint-disable-next-line
  }, []);
}

export default function HomePage({ setCurrentPage }) {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });
  const controlLeft = useAnimation();
  const controlRight = useAnimation();
  const controlCircle = useAnimation();

  useEffect(() => {
    if (inView) {
      controlLeft.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 70, delay: 0 } });
      controlRight.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 70, delay: 0.15 } });
      controlCircle.start({ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 80, delay: 0.3 } });
    }
  }, [inView, controlLeft, controlRight, controlCircle]);
  const brandSliderRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);

  function slideLeft() {
    if (brandSliderRef.current) brandSliderRef.current.slickNext();
  }
  function slideRight() {
    if (brandSliderRef.current) brandSliderRef.current.slickPrev();
  }

  // Custom scroll direction effect
  useEffect(() => {
    let lastScroll = window.scrollY;
    let timer = null;
    function onScroll() {
      let curr = window.scrollY;
      if (curr > lastScroll) slideLeft(); // down: move left
      else if (curr < lastScroll) slideRight(); // up: move right
      lastScroll = curr;
      setAutoPlay(false);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setAutoPlay(true), 1400); // to allow default right movement after idle
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Brand slider settings -- NOTE: rtl: true for rightward default!
  const brandSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 2100,
    pauseOnHover: true,
    swipe: false,
    draggable: false,
    rtl: true, // key: autoplay moves "right"
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  // Testimonials
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: true
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dae2ed] via-[#f2f6fc] to-[#e1e6ef] overflow-hidden">        <div className="absolute inset-0 bg-gradient-to-l from-purple-200/40 to-pink-200/30 pointer-events-none"></div>
        <motion.div 
          className="absolute inset-0 opacity-25"
          initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 1.2 }}
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,190,220,0.13) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(180,180,255,0.08) 0%, transparent 50%)'
          }}
        />
        {/* HERO CONTENT */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <motion.span
              className="inline-block px-6 py-2 bg-pink-50 text-purple-800 text-sm font-semibold rounded-full mb-6 shadow-md animate-bounce-slow"
              initial={{ scale: 0.92, opacity: 0.7 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.85, repeat: Infinity, repeatType: 'mirror' }}
            >
              ✨ Revolutionizing Fashion Intelligence
            </motion.span>
            <motion.h1
              className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-800 via-purple-700 to-pink-700 bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_6px_rgba(216,31,122,0.07)]"
              variants={fadeUp} custom={1}
            >
              GET YOUR FIT
            </motion.h1>
            <motion.div
              className="w-32 h-1 mx-auto mb-8 rounded bg-gradient-to-r from-[#a76efe] via-[#db5ae2] to-[#f58cca] animate-pulse"
              variants={fadeUp} custom={2}
            />
            <motion.p
              className="text-2xl md:text-2xl text-slate-700 mb-6 max-w-3xl mx-auto font-light leading-relaxed"
              variants={fadeUp} custom={3}
            >
              AI-Powered Fashion Recommendations <span className="font-semibold text-pink-600">for Every Body Type &amp; Skin Tone</span>
            </motion.p>
            <motion.p
              className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto"
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
                className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Get API Access</span>
              </motion.button>
              <motion.button
                onClick={() => setCurrentPage('personal-styling')}
                className="px-12 py-4 border-2 border-pink-300 text-slate-700 font-semibold rounded-full hover:border-pink-500 hover:text-pink-600 bg-white/80 transition-all duration-300 hover:shadow-md"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
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
                1.5k+ Recommendations
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Animated BG decorations */}
        <motion.div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full backdrop-blur-md shadow-lg"
          variants={floatVariants} animate="animate" />
        <motion.div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full backdrop-blur-sm shadow-md"
          variants={floatVariants} animate="animateDelayed" />
        <motion.div className="absolute top-1/2 right-20 w-16 h-16 bg-indigo-400/20 rounded-full backdrop-blur-md"
          variants={floatVariants} animate="animate" />
        <motion.div className="absolute top-40 right-1/4 w-12 h-12 bg-purple-300/10 rounded-full backdrop-blur"
          variants={floatVariants} animate="animateDelayed" />
        <motion.div className="absolute bottom-40 left-1/4 w-24 h-24 bg-pink-200/20 rounded-full backdrop-blur"
          variants={floatVariants} animate="animate" />
      </section>

      {/* BRAND SLIDER SCROLL-SYNC */}




      {/* Stats */}
      <section ref={statsRef} className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e8edf3] to-[#f9fafe] border-b border-slate-100 relative overflow-visible">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ x: -80, opacity: 0 }} animate={controlLeft}
              className="group bg-gradient-to-br from-[#fde5fc]/60 to-[#f6f6ff]/50 rounded-2xl shadow-md p-8"
            >
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-800 mb-2">98.6%</div>
              <div className="text-slate-600 font-medium">Accuracy Rate</div>
            </motion.div>
            <motion.div
              initial={{ x: -80, opacity: 0 }} animate={controlLeft}
              className="group bg-gradient-to-br from-[#fde5fc]/60 to-[#f6f6ff]/50 rounded-2xl shadow-md p-8"
              transition={{ delay: 0.08 }}
            >
              <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-800 mb-2">1.5K+</div>
              <div className="text-slate-600 font-medium">Recommendations</div>
            </motion.div>
            <motion.div
              initial={{ x: 80, opacity: 0 }} animate={controlRight}
              className="group bg-gradient-to-br from-[#fde5fc]/60 to-[#f6f6ff]/50 rounded-2xl shadow-md p-8"
            >
              <Zap className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-800 mb-2">&lt;150ms</div>
              <div className="text-slate-600 font-medium">Response Time</div>
            </motion.div>
            <motion.div
              initial={{ x: 80, opacity: 0 }} animate={controlRight}
              className="group bg-gradient-to-br from-[#fde5fc]/60 to-[#f6f6ff]/50 rounded-2xl shadow-md p-8"
              transition={{ delay: 0.08 }}
            >
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-800 mb-2">4,000+</div>
              <div className="text-slate-600 font-medium">Happy Users</div>
            </motion.div>
          </div>
          {/* Animated circle that appears on scroll */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={controlCircle}
            className="flex items-center font-bold text-3xl justify-center text-black absolute left-1/2 top-full mt-[-80px] -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-indigo-200 via-purple-200 to-white rounded-full shadow-lg z-0"
            style={{ pointerEvents: 'none' }}
          >
            GYF
          </motion.div>
          
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-[#e3e6ef] via-[#f5f6fa] to-[#eef3f8]">
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

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-bl from-[#f4f7fb] via-[#eef2f6] to-[#e2ecf7]">        <div className="container mx-auto px-6">
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
      <section className="py-24 bg-gradient-to-br from-[#f3f4f7] via-[#e2e7ef] to-[#f6f6f8]">        <div className="container mx-auto px-6">
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

      {/* Testimonials Slider */}
      <section className="py-24 bg-gradient-to-t from-[#f7f7fa] via-[#e9eef2] to-[#e5e7eb]">        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              Client Success
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Trusted by Leading Brands</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">See how fashion brands are transforming their customer experience with our AI-powered recommendations.</p>
          </div>
          <Slider {...sliderSettings}>
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="px-6">
                <motion.div
                  className="bg-gradient-to-br from-white to-pink-50/50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.015] border border-slate-100 mx-auto max-w-xl"
                  initial="hidden" animate="visible" variants={fadeUp} custom={index}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4 flex justify-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-current" />))}
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="border-t border-slate-100 pt-6 mt-6 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.author}</div>
                      <div className="text-slate-500 text-sm">{testimonial.company}</div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{testimonial.metric}</div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Early Partners */}
      <section className="py-24 bg-gradient-to-r from-[#f0f2f6] via-[#eef1f5] to-[#e7ebf3]">        <div className="container mx-auto px-6">
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
                description: "We work closely with your team to provide smooth API onboarding, no matter your tech stack."
              },
              {
                title: "Data You Own",
                description: "We believe in transparency — your customer insights stay yours. We simply help you act on them better."
              },
              {
                title: "Iterate with Us",
                description: "As our partner, your feedback directly influences feature development and roadmap priorities."
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#28313b] via-[#416788] to-[#233047] relative overflow-hidden">        <div className="absolute inset-0 bg-black/10"></div>
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
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"
          variants={floatVariants} animate="animateDelayed"
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"
          variants={floatVariants} animate="animate"
        />
      </section>
    </div>
  );
}
