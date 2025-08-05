import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Sanidhya",
    role: "CEO",
    bio: "Fashion-tech founder with a strategic vision...",
    specialties: ["Fashion Strategy", "Leadership", "Market Partnerships"],
    linkedin: "https://www.linkedin.com/in/sanidhya-nautiyal-2a0160287/",
    photo: "/sani.jpeg",
  },
  {
    name: "Atharva",
    role: "CTO",
    bio: "Ex-Midjourney AI engineer...",
    specialties: ["AI Engineering", "Infra & Security", "Deep Learning"],
    linkedin: "https://www.linkedin.com/in/atharvmotghare/",
    photo: "/atharva.jpeg",
  },
  {
    name: "Dhruv",
    role: "COO",
    bio: "Startup operator with a fashion background...",
    specialties: ["Business Ops", "Process Design", "Team Leadership"],
    linkedin: "https://www.linkedin.com/in/dhruv1104/",
    photo: "/dhruv.jpeg",
  },
  {
    name: "Aradhay Jain",
    role: "Lead Software Engineer",
    bio: "Engineering lead with hands-on experience...",
    specialties: ["Full-Stack Eng.", "APIs", "Cloud Architecture"],
    linkedin: "https://www.linkedin.com/in/aradhayjain",
    photo: "/aradhay.png",
  },
  {
    name: "Aditya Bibhas Sahu",
    role: "Lead ML Engineer",
    bio: "ML specialist. Designs and tunes deep learning models...",
    specialties: ["Machine Learning", "Personalization", "Model Deployment"],
    linkedin: "https://www.linkedin.com/in/aditya-bibhas-sahu",
    photo: "/aditya.jpeg",
  },
  {
    name: "Ayush",
    role: "UI/UX Designer",
    bio: "Visual storyteller crafting delightful experiences...",
    specialties: ["UI/UX Design", "Visual Communication", "Prototyping"],
    linkedin: "https://www.linkedin.com/in/ayush",
    photo: "/ayush.jpeg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, type: "spring", stiffness: 60 }
  }),
};

const shimmer = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 2.5, repeat: Infinity, ease: "linear" }
  }
};

export default function TeamPage({ setCurrentPage }) {
  const [expanded, setExpanded] = useState(null);

  // Parallax card tilt for additional “aura”
  const handleMouseMove = (e, i) => {
    const card = document.getElementById(`card-${i}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x / 18}deg) rotateX(${-y / 18}deg) scale(1.055)`;
  };
  const handleMouseLeave = (i) => {
    const card = document.getElementById(`card-${i}`);
    card.style.transform = "";
  };

  return (
    <div
      className="min-h-screen py-24 px-4 relative overflow-x-hidden"
      style={{
        background: "linear-gradient(120deg, #e6fffa 0%, #b2f5ea 40%, #81e6d9 100%)"
      }}
    >
      {/* Floating Blurred Blobs */}
      <motion.div
        className="absolute -top-24 left-0 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl opacity-35 pointer-events-none"
        animate={{ y: [0, 28, 0], x: [0, 22, 0] }}
        transition={{ repeat: Infinity, duration: 9.5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-4 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 pointer-events-none"
        animate={{ x: [0, -18, 0], y: [0, -23, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-extrabold mb-4"
            style={{ fontFamily: "'Merriweather', serif", color: "#22543d" }}
          >
            Meet The Dreamers
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="mx-auto w-28 h-1 rounded bg-gradient-to-r from-teal-500 via-blue-400 to-teal-200 mb-6"
          />
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-gray-700"
          >
            A close-knit team, blending engineering with style—and humanity in every interaction.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {teamMembers.map((member, i) => (
            <motion.div
              id={`card-${i}`}
              key={member.name}
              variants={fadeInUp}
              custom={i}
              className={
                "relative group cursor-pointer shadow-lg transform-gpu will-change-transform " +
                "rounded-[2.25rem] p-8 bg-white/95 transition-all duration-500 ring-1 ring-teal-200 border border-teal-100 " +
                (expanded === i
                  ? "scale-105 ring-4 ring-blue-400 z-20"
                  : "hover:scale-104 hover:-translate-y-2")
              }
              style={{
                boxShadow: expanded === i
                  ? "0 12px 60px rgba(40,170,180,0.13)"
                  : "0 2px 12px rgba(40,170,180,0.09)"
              }}
              tabIndex={0}
              onClick={() => setExpanded(expanded === i ? null : i)}
              onMouseMove={e => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              aria-expanded={expanded === i}
            >
              {/* Floating profile image */}
              <motion.div
                className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-teal-200 group-hover:border-blue-200 transition-all duration-300"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.2 + i / 3, ease: "easeInOut" }}
              >
                <img
                  src={member.photo.src || member.photo}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                {/* Animated LinkedIn icon */}
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gradient-to-br from-blue-600 via-teal-600 to-blue-400 text-white rounded-full shadow-md p-2"
                  whileHover={{ scale: 1.13, boxShadow: "0 2px 12px #38b2ac" }}
                  whileTap={{ scale: 0.96 }}
                  animate={{
                    boxShadow: [
                      "0 0px 8px #31979570",
                      "0 8px 24px #3182ce22",
                      "0 0px 8px #31979570"
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
                  tabIndex={-1}
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={24} />
                </motion.a>
              </motion.div>
              {/* Name & Role */}
              <h3
                className="mt-7 text-2xl font-bold text-center mb-2"
                style={{
                  fontFamily: "'Merriweather', serif",
                  color: "#2c7a7b",
                  letterSpacing: "0.5px"
                }}
              >
                {member.name}
              </h3>
              <div className="text-blue-600 text-base font-semibold mb-1 text-center">{member.role}</div>
              <p className="text-center text-gray-600 italic mb-5">{member.bio}</p>
              {expanded === i &&
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-slate-700 font-medium text-center mb-4"
                >
                  <span className="text-teal-600 font-bold">More:</span> {member.description || "Contact for collaborations or Q&A."}
                </motion.div>
              }
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {member.specialties.map((item, k) => (
                  <motion.span
                    key={k}
                    className="px-4 py-1 text-xs rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #2b6cb0 10%, #319795 75%, #81e6d9 100%)",
                      color: "#bee3f8",
                      fontWeight: 600
                    }}
                    variants={shimmer}
                    animate="animate"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="bg-gradient-to-br from-teal-400 via-blue-300 to-teal-200 rounded-3xl p-12 text-center shadow-xl mt-24"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 40 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "'Merriweather',serif", color: "#22543d" }}
          >Join Our Creative Crew
          </h2>
          <p className="text-lg text-teal-900 mb-10 max-w-xl mx-auto">
            We love creative, kind-hearted minds who want to shape a more human fashion future. Reach out!
          </p>
          <motion.button
            onClick={() => setCurrentPage && setCurrentPage('contact')}
            className="px-8 py-3 bg-white/90 rounded-lg text-teal-700 font-extrabold shadow border-2 border-teal-300 hover:bg-teal-50 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.08, backgroundColor: "#e6fffb" }}
            whileTap={{ scale: 0.96 }}
          >
            Join Us&nbsp;→
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}