import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

// Import team member photos
import sanidhyaImg from "../public/sani.jpeg";
import atharvaImg from "../public/sani.jpeg";
import dhruvImg from "../public/dhruv.jpeg";
import aradhayImg from "../public/aradhay.png";
import adityaImg from "../public/aditya1.jpeg";
import ayushImg from "../public/sani.jpeg";

const teamMembers = [
  {
    name: "Sanidhya",
    role: "CEO & Co-Founder",
    bio: "Fashion-tech founder with a strategic vision...",
    specialties: ["Fashion Strategy", "Leadership", "Market Partnerships"],
    linkedin: "https://www.linkedin.com/in/sanidhya-nautiyal-2a0160287/",
    photo: sanidhyaImg,
  },
  {
    name: "Atharva",
    role: "CTO & Co-Founder",
    bio: "Ex-Midjourney AI engineer...",
    specialties: ["AI Engineering", "Infra & Security", "Deep Learning"],
    linkedin: "https://www.linkedin.com/in/atharvmotghare/",
    photo: atharvaImg,
  },
  {
    name: "Dhruv",
    role: "COO",
    bio: "Startup operator with a fashion background...",
    specialties: ["Business Ops", "Process Design", "Team Leadership"],
    linkedin: "https://www.linkedin.com/in/dhruv1104/",
    photo: dhruvImg,
  },
  {
    name: "Aradhay Jain",
    role: "Lead Software Engineer",
    bio: "Engineering lead with hands-on experience...",
    specialties: ["Full-Stack Eng.", "APIs", "Cloud Architecture"],
    linkedin: "https://www.linkedin.com/in/aradhayjain2006",
    photo: aradhayImg,
  },
  {
    name: "Aditya Bibhas Sahu",
    role: "ML Engineer",
    bio: "ML specialist. Designs and tunes deep learning models...",
    specialties: ["Machine Learning", "Personalization", "Model Deployment"],
    linkedin: "https://www.linkedin.com/in/aditya-bibhas-sahu-632995280",
    photo: adityaImg,
  },
  {
    name: "Ayush Verma",
    role: "UI/UX Engineer",
    bio: "UI/UX designer & engineer building delightful interfaces...",
    specialties: ["UI/UX Design", "User Research", "Prototyping"],
    linkedin: "https://www.linkedin.com/in/ayush-verma-7334a8194/",
    photo: ayushImg,
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

const TeamPage = ({ setCurrentPage }) => (
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
        {teamMembers.map((member, index) => (
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
              <motion.img
                src={member.photo}
                alt={`${member.name} profile`}
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
              <p className="text-purple-600 font-medium mb-2">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-600 transition mb-3"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <p className="text-slate-600 text-sm leading-relaxed text-center">{member.bio}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800 mb-2">Specialties:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
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
