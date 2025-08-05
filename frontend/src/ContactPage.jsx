import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const iconWiggle = {
  animate: {
    rotate: [0, -10, 10, -10, 8, 0],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
  }
};

const buttonPop = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    boxShadow: "0 4px 24px rgba(236,72,153,.20)",
    transition: { type: "spring", stiffness: 300, damping: 12 }
  },
  tap: { scale: 0.97 }
};

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://landing-backend-mwnn.onrender.com/api/support/get-support",
        {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message: `Subject: ${form.subject}\n\n${form.message}`,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      alert("Thank you for reaching out—we'll be in touch soon! 🌞");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Sorry, something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(115deg, #fff7fa 0%, #fbe9e9 40%, #f3e6fd 80%, #ffe6f2 100%)"
      }}
    >
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent drop-shadow"
              variants={fadeUp}
              custom={0}
            >
              Get in Touch
            </motion.h1>
            <motion.div
              className="w-24 h-1 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 mx-auto mb-8"
              variants={fadeUp}
              custom={1}
            ></motion.div>
            <motion.p
              className="text-lg md:text-xl text-rose-500 font-semibold max-w-2xl mx-auto"
              variants={fadeUp}
              custom={2}
            >
              We love to meet new people, answer questions, and help you move forward. Drop us a line and let's create something beautiful.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              <motion.div
                className="bg-white/90 rounded-2xl shadow-xl px-8 py-10 mb-12 border border-rose-100"
                variants={fadeUp}
                custom={1}
              >
                <h2 className="text-2xl font-bold text-fuchsia-700 mb-7">Ways to connect</h2>
                <div className="space-y-7">
                  {[
                    {
                      icon: <motion.div variants={iconWiggle} animate="animate"><Phone className="w-6 h-6 text-pink-500" /></motion.div>,
                      title: "Phone",
                      content: "+91 96673 72666, 8595600366",
                      description: "Mon-Fri 6AM–10PM, Sat-Sun 7AM–8PM",
                    },
                    {
                      icon: <motion.div variants={iconWiggle} animate="animate"><Mail className="w-6 h-6 text-fuchsia-600" /></motion.div>,
                      title: "Email",
                      content: "hello@getyourfit.tech",
                      description: "Expect a warm reply in 24 hours ❤️",
                    },
                    {
                      icon: <motion.div variants={iconWiggle} animate="animate"><MapPin className="w-6 h-6 text-rose-500" /></motion.div>,
                      title: "Location",
                      content: "Delhi Technological University, Delhi 110042",
                      description: "Come say hi if you’re around!",
                    },
                  ].map((c, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-4 hover:bg-pink-50 transition-colors duration-200 p-4 rounded-xl"
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      custom={2 + idx}
                    >
                      <div className="flex-shrink-0">{c.icon}</div>
                      <div>
                        <div className="text-base font-bold text-rose-600">{c.title}</div>
                        <div className="text-fuchsia-700 font-medium">{c.content}</div>
                        <div className="text-rose-400 text-sm">{c.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mt-6 p-8 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-rose-500 rounded-2xl text-white shadow-lg border border-fuchsia-100/30"
                variants={fadeUp}
                custom={5}
              >
                <h3 className="text-lg font-bold mb-3">Business Hours (India Time)</h3>
                <div className="space-y-2 text-base tracking-tight">
                  <div className="flex justify-between">
                    <span>Mon – Fri</span>
                    <span>6:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sat – Sun</span>
                    <span>7:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white/95 rounded-2xl shadow-2xl px-8 py-10 border border-fuchsia-100 flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              <motion.h2
                className="text-2xl font-extrabold text-fuchsia-700 mb-6"
                variants={fadeUp}
                custom={0}
              >Send a Message</motion.h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div variants={fadeUp} custom={1} className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-fuchsia-700 font-semibold mb-2" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      type="text"
                      className="w-full px-4 py-3 border border-rose-200 rounded-lg bg-rose-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-200 transition shadow-sm"
                      placeholder="Priya"
                    />
                  </div>
                  <div>
                    <label className="block text-fuchsia-700 font-semibold mb-2" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      type="text"
                      className="w-full px-4 py-3 border border-rose-200 rounded-lg bg-rose-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-200 transition shadow-sm"
                      placeholder="Singh"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} custom={2}>
                  <label className="block text-fuchsia-700 font-semibold mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="w-full px-4 py-3 border border-rose-200 rounded-lg bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-200 transition shadow-sm"
                    placeholder="priya@example.com"
                  />
                </motion.div>

                <motion.div variants={fadeUp} custom={3}>
                  <label className="block text-fuchsia-700 font-semibold mb-2" htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-rose-200 rounded-lg bg-rose-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-100 transition"
                  >
                    <option>General Inquiry</option>
                    <option>Personal Influencer</option>
                    <option>Style Recommendations</option>
                    <option>API Consultation</option>
                    <option>Other</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeUp} custom={4}>
                  <label className="block text-fuchsia-700 font-semibold mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-rose-200 rounded-lg bg-rose-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-50 shadow-sm transition"
                    placeholder="How can we make your day brighter?"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  variants={buttonPop}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-full py-4 bg-gradient-to-r from-fuchsia-500 via-pink-400 to-rose-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-100 mt-2 ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending…" : "Send Message 🚀"}
                </motion.button>
                <motion.p
                  className="text-center text-xs text-rose-300 mt-4"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.9 }}
                >
                  We respect your privacy. Your story stays between us. 💜
                </motion.p>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
