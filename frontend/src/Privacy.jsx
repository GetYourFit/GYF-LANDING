import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PrivacyPage = () => (
  <div className="min-h-screen pt-24 pb-16 bg-white text-slate-800">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-slate-600 text-sm">
          <strong>GetYourFit Private Limited</strong><br />
          <em>Effective Date:</em> August 1, 2025 &nbsp; | &nbsp;
          <em>Last Updated:</em> August 1, 2025
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="space-y-8 text-slate-700 text-[17px] leading-relaxed"
      >
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to GYF (Get Your Fit), operated by GetYourFit Private Limited ("we," "us," "our," or "Company").
            We are committed to protecting your privacy and ensuring the security of your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
            our AI-powered fashion personalization platform and services.
          </p>
          <p>
            By using our services, you consent to the collection and use of information in accordance with this policy.
            If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>

          <h3 className="font-bold mt-4 mb-1">2.1 Personal Information You Provide</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Account Information:</strong> Name, email address, phone number, username, password, profile picture, and bio.
            </li>
            <li>
              <strong>Fashion Profile Data:</strong> Body measurements, style preferences, color preferences, occasion types, budget ranges, etc.
            </li>
            <li>
              <strong>User-Generated Content:</strong> Uploaded photos, reviews, comments, feedback, and surveys.
            </li>
            <li>
              <strong>Communication Data:</strong> Support messages, emails, and newsletter interactions.
            </li>
          </ul>

          <h3 className="font-bold mt-4 mb-1">2.2 Information Automatically Collected</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Device and Usage:</strong> IP address, browser, OS, screen resolution, usage patterns, and engagement.
            </li>
            <li>
              <strong>Location:</strong> General location (city/region), time zone, and language preferences.
            </li>
            <li>
              <strong>Cookies:</strong> Session, analytics, personalization, and (with consent) marketing cookies.
            </li>
          </ul>

          <h3 className="font-bold mt-4 mb-1">2.3 Information from Third Parties</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Partner Retailers:</strong> Purchase history, product interactions, returns.</li>
            <li><strong>Social Media:</strong> Public profile info, friends list (with permission).</li>
            <li><strong>Data Enrichment:</strong> Demographics, trends, and preference data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>

          <h3 className="font-bold mt-4 mb-1">3.1 Primary Service Functions</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>Generate personalized outfit suggestions using AI.</li>
            <li>Provide styling advice tailored to user preferences.</li>
            <li>Create and manage user accounts and profiles.</li>
            <li>Process transactions and subscriptions securely.</li>
          </ul>

          <h3 className="font-bold mt-4 mb-1">3.2 Service Improvement and Analytics</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>Improve AI recommendations using user behavior analysis.</li>
            <li>Develop new features through data-driven insights.</li>
            <li>Support A/B testing and trend research.</li>
            <li>Generate business insights and retailer reports.</li>
          </ul>

          <h3 className="font-bold mt-4 mb-1">3.3 Communication and Marketing</h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>Send service updates, support responses, and styling tips.</li>
            <li>Deliver marketing communications (with consent).</li>
            <li>Share personalized fashion offers and new partnerships.</li>
          </ul>
        </section>
      </motion.div>
    </div>
  </div>
);

export default PrivacyPage;
