import React from "react";


const TermsPage = () => (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Terms & Conditions</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">Last updated: August 1, 2025</p>
        </div>
  
        {/* Terms Content */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-left md:text-justify text-slate-700 space-y-6 leading-relaxed text-sm sm:text-base">
          {[
            {
              title: "1. Agreement to Terms",
              content: [
                "Welcome to GYF (Get Your Fit), an AI-powered fashion personalization platform operated by GetYourFit Private Limited, a company incorporated under the laws of India.",
                "These Terms and Conditions (\"Terms\") constitute a legally binding agreement between you (\"User\") and GetYourFit Private Limited regarding your use of the GYF platform and related services.",
                "By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, do not use the Services."
              ]
            },
            {
              title: "2. Acceptance and Modifications",
              content: [
                "2.1 Acceptance of Terms: Your use of our Services constitutes acceptance of these Terms. This agreement is effective from your first access or use.",
                "2.2 Modifications: We may modify these Terms at our discretion. We’ll notify you via email, app notifications, or updates on our site. Continued use after changes implies acceptance."
              ]
            },
            {
              title: "3. Description of Services",
              content: [
                "GYF provides AI-powered fashion personalization including outfit recommendations, color matching, occasion-based styling, and analytics.",
                "B2B offerings include API access, embedded tools, and business dashboards.",
                "We aim for consistent uptime but do not guarantee uninterrupted service. Downtime may occur for maintenance, updates, or legal compliance."
              ]
            },
            {
              title: "4. User Accounts and Responsibilities",
              content: [
                "To access certain features, you must register with a valid email and password. Optionally, you may provide fashion preferences and measurements.",
                "You’re responsible for safeguarding your credentials and ensuring all data you provide is accurate and up to date.",
                "We reserve the right to suspend or terminate your account for policy violations or fraudulent behavior."
              ]
            },
            {
              title: "5. Prohibited Use & Content",
              content: [
                "You may not post illegal, harmful, infringing, or misleading content.",
                "Do not attempt to access restricted systems, scrape data, or interfere with the experience of others.",
                "We may remove any content or restrict access if these terms are violated."
              ]
            },
            {
              title: "6. Intellectual Property Rights",
              content: [
                "All intellectual property, including AI algorithms, branding, designs, and data architecture, belong to GetYourFit Private Limited.",
                "You retain ownership of content you submit, but grant us a non-exclusive license to use it to improve services."
              ]
            },
            {
              title: "7. Privacy and Data Protection",
              content: [
                "Your privacy is governed by our Privacy Policy. By using our services, you consent to data collection and processing as described.",
                "We use anonymized data to improve AI performance and provide insights."
              ]
            },
            {
              title: "8. Fees and Payment Terms",
              content: [
                "Basic services are free. Premium services may require a subscription.",
                "Business users enter into custom agreements with tailored pricing and features.",
                "All payments are processed by third parties. You're responsible for keeping billing info current."
              ]
            },
            {
              title: "9. Disclaimers",
              content: [
                "Services are provided \"as is\" without warranties. We do not guarantee satisfaction with fashion recommendations or product availability.",
                "We are not liable for downtime, bugs, or service interruptions."
              ]
            },
            {
              title: "10. Limitation of Liability",
              content: [
                "We are not liable for indirect or consequential damages, lost profits, or data loss.",
                "For paid services, our liability is limited to the amount paid in the last 12 months. For free users, liability is capped at ₹1,000."
              ]
            },
            {
              title: "11. Indemnification",
              content: [
                "You agree to indemnify and hold harmless GetYourFit and its affiliates against claims arising from your use of the Services or violations of these Terms."
              ]
            },
            {
              title: "12. Third-Party Services and Retailers",
              content: [
                "We may link to third-party tools or retailers. Your transactions with them are your responsibility.",
                "We are not liable for their content, policies, or performance."
              ]
            },
            {
              title: "13. Dispute Resolution",
              content: [
                "These Terms are governed by Indian law. Disputes shall be resolved in the courts of [City], India.",
                "Before legal action, we encourage amicable resolution by contacting our team."
              ]
            },
            {
              title: "14. General Provisions",
              content: [
                "These Terms represent the full agreement between you and us. If any part is found unenforceable, the rest remains valid.",
                "We are not liable for delays due to force majeure events like natural disasters, wars, or technical failures."
              ]
            },
            {
              title: "15. Contact Information",
              content: [
                "Email: gyf1ltd@gmail.com",
                "Subject: Terms and Conditions Inquiry",
                "We typically respond within 7 business days."
              ]
            },
            {
              title: "16. Effective Date and Version",
              content: [
                "These Terms are effective as of August 1, 2025.",
                "Version 1.0 | Document Status: Active"
              ]
            }
          ].map((section, index) => (
            <details key={index} className="group border-b border-slate-200 pb-4">
              <summary className="cursor-pointer text-lg font-semibold text-slate-800 group-open:mb-2">
                {section.title}
              </summary>
              {section.content.map((para, i) => (
                <p key={i} className="mb-3">{para}</p>
              ))}
            </details>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default TermsPage;
  