import {
  CheckCircle,
  Star,
  Users,
  Sparkles,
  Smile,
  Shirt,
  HeartHandshake,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutPage = () => (
  <div className="min-h-screen pt-24 pb-32 bg-white text-slate-800">
    <div className="container mx-auto px-6">
      {/* Hero */}
      <motion.div
        className="text-center mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Discover Style That Fits <br /> <span className="italic text-blue-700">You</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6" />
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Get Your Fit is building the next-gen fashion assistant. We help you discover and shop
          smarter with AI—tailored to your body, preferences, and goals.
        </p>
        <img
          src="https://yatter.in/wp-content/uploads/2024/04/GettyImages-1345105965-1024x576.webp"
          alt="Fashion Banner"
          className="mt-10 rounded-2xl shadow-lg w-full max-h-[500px] object-cover"
        />
      </motion.div>

      {/* Mission + Stats */}
      <motion.div
        className="grid md:grid-cols-2 gap-16 items-center mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            At Get Your Fit, we’re redefining how people interact with fashion. Using cutting-edge AI,
            we’re bringing personalized, inclusive, and sustainable fashion advice to your fingertips.
          </p>
          <p className="text-slate-600 mb-4 leading-relaxed">
            We're not here to sell trends—we're here to build confidence and make shopping more thoughtful,
            ethical, and efficient.
          </p>
          <p className="text-slate-600 leading-relaxed">
            From the gym to boardrooms to streetwear, we help you show up as your best-dressed self.
          </p>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-md"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "200+", label: "Outfits Curated" },
              { number: "100+", label: "Active Users" },
              { number: "100%", label: "AI-Powered" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        className="bg-slate-50 rounded-2xl p-12 mb-24 shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <CheckCircle className="w-10 h-10 text-green-600 mx-auto" />,
              title: "Integrity",
              desc: "We build trust by prioritizing what’s right for users, not just what's trending.",
            },
            {
              icon: <Star className="w-10 h-10 text-yellow-500 mx-auto" />,
              title: "Excellence",
              desc: "Every pixel, prompt, and product is crafted with care.",
            },
            {
              icon: <Users className="w-10 h-10 text-blue-600 mx-auto" />,
              title: "Community",
              desc: "Fashion is personal. We celebrate diversity, expression, and uniqueness.",
            },
          ].map((v, i) => (
            <motion.div key={i} className="p-6" variants={fadeInUp}>
              {v.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{v.title}</h3>
              <p className="text-slate-600">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Why Users Trust Us</h2>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-indigo-500 mx-auto" />,
              title: "Real-time Fit Advice",
              desc: "Get suggestions tailored to your body and context—instantly.",
            },
            {
              icon: <Smile className="w-8 h-8 text-pink-500 mx-auto" />,
              title: "Truly Inclusive",
              desc: "No size limits, no stereotypes. Fashion for everyone.",
            },
            {
              icon: <Shirt className="w-8 h-8 text-blue-600 mx-auto" />,
              title: "Curated Brands",
              desc: "Shop from verified, stylish, and ethical brands.",
            },
            {
              icon: <HeartHandshake className="w-8 h-8 text-rose-500 mx-auto" />,
              title: "Human + AI",
              desc: "We blend the best of tech and taste for curated experiences.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp}>
              {item.icon}
              <h4 className="text-lg font-bold mt-4 mb-2">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sustainability */}
      <motion.div
        className="bg-green-50 rounded-2xl p-12 shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://jdschoolofdesign.b-cdn.net/wp-content/uploads/2024/02/Sustainable-Fashion-and-Its-Importance-In-Daily-Life-3.jpg"
            alt="Sustainable Fashion"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Sustainable by Default</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Every product we recommend is checked for sustainability markers—eco-friendliness, supply
              chain ethics, and long-term value. We help you make better choices, effortlessly.
            </p>
            <div className="flex items-center gap-3 text-green-700 font-semibold">
              <Leaf className="w-6 h-6" /> Eco-labeled brands highlighted in every list.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default AboutPage;
