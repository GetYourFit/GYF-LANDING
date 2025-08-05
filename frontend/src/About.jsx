import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  Handshake,
  Sparkles,
  Smile,
  Shirt,
  HeartHandshake,
  Leaf,
  Globe2,
  Feather,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22 } },
};

const coreValues = [
  {
    icon: <CheckCircle className="w-10 h-10 text-green-600 mx-auto" />,
    title: "Honesty",
    desc: "Recommend what’s truly best for each person. No tricks, no fads.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-amber-600 mx-auto" />,
    title: "Trust",
    desc: "Earn real confidence with transparent advice, feedback, and service.",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500 mx-auto" />,
    title: "Joy",
    desc: "Shopping should feel empowering—never stressful.",
  },
];

const trustFeatures = [
  {
    icon: <Sparkles className="w-8 h-8 text-amber-600 mx-auto" />,
    title: "Instant Advice",
    desc: "Personalized for your body, context, and preferences.",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80",
  },
  {
    icon: <Smile className="w-8 h-8 text-yellow-500 mx-auto" />,
    title: "Welcoming Vibes",
    desc: "No size shaming. Only celebration.",
    img: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=500&q=80",
  },
  {
    icon: <Shirt className="w-8 h-8 text-amber-500 mx-auto" />,
    title: "Handpicked Styles",
    desc: "We curate brands we’d wear ourselves.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-amber-700 mx-auto" />,
    title: "Blended Intelligence",
    desc: "Combining warm style expertise with powerful technology.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
];

// Slider settings with spacing & center mode for both sections
const sliderSettingsCore = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "80px",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" } },
    { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10vw" } }
  ],
};

const sliderSettingsTrust = {
  dots: true,
  infinite: true,
  speed: 650,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "60px",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 1, centerPadding: "15vw" } }
  ],
};

export default function AboutPage() {
  // Set up refs to both sliders for programmatic control
  const coreSlider = useRef(null);
  const trustSlider = useRef(null);
  const [coreAutoplay, setCoreAutoplay] = useState(true);
  const [trustAutoplay, setTrustAutoplay] = useState(true);

  useEffect(() => {
    let ticking = false;
    let lastScroll = window.scrollY;

    // Scroll handler that scrolls sliders in opposite directions:
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollNow = window.scrollY;
          if (scrollNow > lastScroll) {
            // Scrolling down: coreSlider next (left), trustSlider prev (right)
            coreSlider.current && coreSlider.current.slickNext();
            trustSlider.current && trustSlider.current.slickPrev();
          } else if (scrollNow < lastScroll) {
            // Scrolling up: coreSlider prev (right), trustSlider next (left)
            coreSlider.current && coreSlider.current.slickPrev();
            trustSlider.current && trustSlider.current.slickNext();
          }
          lastScroll = scrollNow;
          setCoreAutoplay(false);
          setTrustAutoplay(false);
          clearTimeout(window._sliderIdleTimeout);
          window._sliderIdleTimeout = setTimeout(() => {
            setCoreAutoplay(true);
            setTrustAutoplay(true);
          }, 1800);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(window._sliderIdleTimeout);
    };
  }, []);

  return (
    <div
      className="min-h-screen pt-24 pb-32 text-slate-800"
      style={{
        background:
          "linear-gradient(120deg, #f9fafb 0%, #f0f2f6 40%, #e2e7ee 80%, #f9fafb 100%)",
      }}
    >
      <div className="container mx-auto px-3 sm:px-6">
        {/* Hero / Banner */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-snug text-teal-900">
            Wear Confidence. <span className="italic text-amber-600">Made for Real Life.</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-teal-600 mx-auto mb-7 rounded" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Get Your Fit, fashion is personal, not generic. We blend real human advice and smart AI, so you always feel comfortable in your skin—and your style. For every body, every story.
          </p>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
            alt="Fashionable people smiling"
            className="mt-10 rounded-2xl shadow-xl w-full max-h-[450px] object-cover border-2 border-amber-100"
          />
        </motion.div>

        {/* Values + Story */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Story & Mission */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 text-amber-700">Why We Exist</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              <b>We started Get Your Fit after seeing people burnt out by fast fashion and pushy trends that didn’t fit their lives.</b>  
              We believe everyone deserves guidance that celebrates what makes them unique—not what a generic “algorithm” or influencer says is hot now.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Our mission is confidence: helping you make style decisions faster, smarter, and more playfully.  
              No stress, no stereotypes—just what helps <b>you</b> show up as your best-dressed self.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Globe2 className="w-8 h-8 text-amber-400" />
              <span className="text-amber-700 font-semibold">Serving users across 10+ countries</span>
            </div>
          </motion.div>

          {/* Stats & Trust */}
          <motion.div
            className="bg-gradient-to-br from-amber-50 via-yellow-50 to-emerald-50 rounded-2xl p-8 shadow-md border border-amber-100"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 gap-7">
              {[
                { number: "900+", label: "Unique Outfits Curated" },
                { number: "250+", label: "Repeat User Stories" },
                { number: "100%", label: "Crowd-Loved AI Results" },
                
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-extrabold text-amber-600 mb-2">{stat.number}</div>
                  <div className="text-slate-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values as Slider */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-10">What We Stand For</h2>
          <Slider
            {...sliderSettingsCore}
            autoplay={coreAutoplay}
            ref={coreSlider}
          >
            {coreValues.map((v, i) => (
              <motion.div
                key={i}
                className="p-10 bg-white rounded-2xl shadow-lg text-center mx-6"
                variants={fadeInUp}
              >
                {v.icon}
                <h3 className="text-lg font-semibold mt-6 mb-3">{v.title}</h3>
                <p className="text-slate-700">{v.desc}</p>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Why Users Trust as Slider */}
        <motion.div
          className="mb-24 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-10">What Makes Us Different?</h2>
          <Slider
            {...sliderSettingsTrust}
            autoplay={trustAutoplay}
            ref={trustSlider}
          >
            {trustFeatures.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 mx-8"
                variants={fadeInUp}
              >
                {item.icon}
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg w-full h-40 object-cover my-4 border-2 border-amber-100"
                />
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Sustainability Static / Animated Section */}
        <motion.div
          className="bg-gradient-to-tr from-green-50 via-white to-amber-50 rounded-2xl p-12 shadow-lg max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Sustainable fashion community"
              className="w-full md:w-1/2 rounded-xl shadow-md object-cover border-2 border-emerald-100"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4 text-emerald-600 flex items-center gap-2">
                <Leaf className="w-8 h-8" /> Sustainable by Default
              </h2>
              <p className="text-slate-700 text-lg mb-4">
                We vet every brand for eco-friendliness, durable quality, and fair supply chains. Our users love discovering fashion that protects the planet—and still looks amazing!
              </p>
              <div className="flex gap-3 text-emerald-700 font-bold items-center">
                <Feather className="w-6 h-6" />
                <span>Light footprint, big confidence.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
