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
            Get Your Fit is your AI-powered fashion stylist, helping you discover clothing that
            fits your personality, purpose, and preferences — beautifully.
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
              Our mission is to revolutionize how people approach style. By fusing the art of fashion
              with the precision of AI, we curate looks that truly resonate with your individual essence.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Whether you’re prepping for a high-stakes interview or dressing for a Sunday brunch,
              we aim to eliminate the guesswork and help you dress with intention and confidence.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With a focus on personalization, inclusivity, and sustainability, we empower you
              to feel good in your clothes and express your story — one outfit at a time.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-md"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "3M+", label: "Outfits Recommended" },
                { number: "500k+", label: "Happy Users" },
                { number: "250+", label: "Partner Brands" },
                { number: "24/7", label: "AI-Powered Support" },
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
                desc: "Honest, transparent suggestions that prioritize you — not trends or brands.",
              },
              {
                icon: <Star className="w-10 h-10 text-yellow-500 mx-auto" />,
                title: "Excellence",
                desc: "From recommendations to UI, we deliver nothing short of exceptional.",
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600 mx-auto" />,
                title: "Community",
                desc: "We foster inclusive, diverse spaces where style has no limits or labels.",
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
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Unique</h2>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-indigo-500 mx-auto" />,
                title: "AI-Powered Styling",
                desc: "Real-time outfit suggestions personalized for you.",
              },
              {
                icon: <Smile className="w-8 h-8 text-pink-500 mx-auto" />,
                title: "Inclusive Fashion",
                desc: "All sizes, identities & aesthetics are welcome.",
              },
              {
                icon: <Shirt className="w-8 h-8 text-blue-600 mx-auto" />,
                title: "Brand Discovery",
                desc: "Explore new designers and sustainable brands.",
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-rose-500 mx-auto" />,
                title: "Human + AI",
                desc: "Combining expert stylists with smart algorithms.",
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
              <h2 className="text-3xl font-bold mb-4">Fashion With a Conscience</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Sustainability is not an afterthought — it's built into every recommendation we make.
                We highlight eco-friendly brands, encourage capsule wardrobes, and promote reusability
                in everyday fashion.
              </p>
              <div className="flex items-center gap-3 text-green-700 font-semibold">
                <Leaf className="w-6 h-6" /> Carbon-conscious outfit picks.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
  
  export default AboutPage;
  