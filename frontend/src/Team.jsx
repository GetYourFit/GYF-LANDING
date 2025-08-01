import React from "react";
import { motion } from "framer-motion";
// If you use lucide-react for icons:
import { Linkedin } from "lucide-react";

// Routing: Swap out for your app solution (e.g. Next/router, React Router, etc)


const teamMembers = [
  {
    name: "Sanidhya",
    role: "CEO & Co-Founder",
    bio: "Fashion-tech founder with a strategic vision...",
    specialties: ["Fashion Strategy", "Leadership", "Market Partnerships"],
    linkedin: "https://www.linkedin.com/in/sanidhya-nautiyal-2a0160287/",
    color: "bg-purple-500 text-purple-100",
  },
  {
    name: "Atharva",
    role: "CTO & Co-Founder",
    bio: "Ex-Midjourney AI engineer...",
    specialties: ["AI Engineering", "Infra & Security", "Deep Learning"],
    linkedin: "https://www.linkedin.com/in/atharvmotghare/",
    color: "bg-indigo-500 text-indigo-100",
  },
  {
    name: "Dhruv",
    role: "COO",
    bio: "Startup operator with a fashion background...",
    specialties: ["Business Ops", "Process Design", "Team Leadership"],
    linkedin: "https://www.linkedin.com/in/dhruv1104/",
    color: "bg-pink-500 text-pink-100",
  },
  {
    name: "Aradhay Jain",
    role: "Lead Software Engineer",
    bio: "Engineering lead with hands-on experience...",
    specialties: ["Full-Stack Eng.", "APIs", "Cloud Architecture"],
    linkedin: "https://www.linkedin.com/in/aradhayjain2006",
    color: "bg-teal-500 text-teal-100",
  },
  {
    name: "Aditya Bibhas Sahu",
    role: "ML Engineer",
    bio: "ML specialist. Designs and tunes deep learning models...",
    specialties: ["Machine Learning", "Personalization", "Model Deployment"],
    linkedin: "https://www.linkedin.com/in/aditya-bibhas-sahu-632995280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "bg-cyan-500 text-cyan-100",
  },
  {
    name: "Ayush Verma",
    role: "UI/UX Engineer",
    bio: "UI/UX designer & engineer building delightful interfaces...",
    specialties: ["UI/UX Design", "User Research", "Prototyping"],
    linkedin: "https://www.linkedin.com/in/ayush-verma-7334a8194/",
    color: "bg-purple-500 text-purple-100",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" }
  })
};

// Animation for the initial letter circle
const letterAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const TeamPage = ({setCurrentPage}) => (
  <div className="min-h-screen pt-24 pb-16 bg-slate-50">
    <div className="container mx-auto px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">Meet Our Team</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Our founding team combines AI, engineering, and fashion expertise—working to make digital fashion truly intelligent and inclusive.
        </p>
      </motion.div>

      {/* Team Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => {
          const initial = member.name.charAt(0).toUpperCase();
          return (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index}
            >
              <div className="flex flex-col items-center mb-6">
                {/* Animated initial circle */}
                <motion.div
                  className={`flex items-center justify-center w-24 h-24 rounded-full font-bold text-5xl shadow-md ${member.color} mb-4 select-none`}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                  aria-label={`${member.name} initial`}
                >
                  {initial}
                </motion.div>

                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                <div className="flex gap-2 items-center mb-3">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-600 transition"
                    aria-label={`LinkedIn of ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed text-center">{member.bio}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, specIndex) => (
                    <span key={specIndex} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Animated CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white shadow-xl"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          We're always looking for AI enthusiasts and creative thinkers who want to build a more personal, inclusive fashion future.
        </p>
        <motion.button
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
        >
          View Open Positions
        </motion.button>
      </motion.div>
    </div>
  </div>
);

export default TeamPage;
