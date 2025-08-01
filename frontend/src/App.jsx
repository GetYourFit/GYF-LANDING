import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Dumbbell, Users, Shield, FileText,Sparkles,Smile,Shirt,HeartHandshake,Leaf,TrendingUp,Zap,Eye,Globe,Code,Camera,ShoppingBag, Mail, Phone, MapPin, Star, CheckCircle, Award, Target } from 'lucide-react';
import ContactPage from './ContactPage';
import AboutPage from './About';
import HomePage from './Home';
import TeamPage from './Team';
import MobileView from './MobileView';
import TermsPage from './Terms';
const serviceDropdownPages = [
  { id: 'personal-styling', label: 'Personal Styling' },
  { id: 'style-challenges', label: 'Style Challenges' },
  { id: 'outfit-planning', label: 'outfit planning' },
  { id: 'virtual-consulting', label: 'virutal consulting' }
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { 
    id: 'services', 
    label: 'Services',
    dropdown: serviceDropdownPages
  },
  { id: 'contact', label: 'Contact' },
  { id: 'Team', label: 'Team' }
];

const legalItems = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms & Conditions' }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen]);
  
  
  

  
  

  const PrivacyPage = () => (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">Privacy Policy</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">Last updated: August 1, 2025</p>
        </div>
  
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Welcome to GYF (Get Your Fit), operated by GetYourFit Private Limited ("we," "us," or "our"). This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our AI-powered fashion personalization platform and services.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              By using our services, you agree to this policy. If you disagree, please do not use our services.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
            <h3 className="font-semibold text-slate-700 mb-2">2.1 Personal Information You Provide</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li><strong>Account Info:</strong> name, email, phone, profile picture, etc.</li>
              <li><strong>Fashion Profile:</strong> body measurements, style/color preferences, shopping behavior.</li>
              <li><strong>User-Generated Content:</strong> uploaded photos, comments, messages, surveys.</li>
              <li><strong>Communication:</strong> support messages, emails, inquiries.</li>
            </ul>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">2.2 Automatically Collected</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>IP address, browser and device data</li>
              <li>Usage behavior and engagement metrics</li>
              <li>Geolocation (approximate), time zone, language</li>
              <li>Cookies: session, analytics, personalization, and marketing (with consent)</li>
            </ul>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">2.3 From Third Parties</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Retailers (purchase history, browsing data)</li>
              <li>Social platforms (with permission)</li>
              <li>Data enrichment tools (for personalization and trends)</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
            <h3 className="font-semibold text-slate-700 mb-2">3.1 Primary Service Functions</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Personalized outfit suggestions</li>
              <li>Occasion-specific recommendations</li>
              <li>Account management, support, and communication</li>
            </ul>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">3.2 Service Improvement & Analytics</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Train AI models and refine algorithms</li>
              <li>Feature development and optimization</li>
              <li>Market analysis and business insights</li>
            </ul>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">3.3 Communication & Marketing</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Account alerts, feature updates</li>
              <li>Styling tips and fashion content</li>
              <li>Promotions and research (with consent)</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Information Sharing</h2>
            <h3 className="font-semibold text-slate-700 mb-2">4.1 With Service Providers</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>AI tech vendors (e.g., OpenAI)</li>
              <li>Cloud and analytics providers</li>
              <li>Retail partners (only anonymized data unless otherwise agreed)</li>
            </ul>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">4.2 Legal and Safety</h3>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Compliance with legal requests</li>
              <li>Fraud prevention and protection</li>
            </ul>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">4.3 Business Transfers</h3>
            <p className="text-slate-600">
              In mergers or acquisitions, your data may be transferred under the same privacy protections.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Security & Protection</h2>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>End-to-end and AES-256 encryption</li>
              <li>Multi-factor admin login</li>
              <li>Regular audits and 24/7 monitoring</li>
            </ul>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">5.2 Data Retention</h3>
            <p className="text-slate-600">
              We retain your data as long as needed to provide services or meet legal obligations. You may request deletion anytime at <strong>gyf1ltd@gmail.com</strong>.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Your Privacy Rights</h2>
            <p className="text-slate-600 mb-2">You may:</p>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li>Access and correct your data</li>
              <li>Request deletion or export</li>
              <li>Manage communication and cookie preferences</li>
            </ul>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">GDPR (EU)</h3>
            <p className="text-slate-600">Includes rights to portability, restrict/oppose processing, and lodge complaints.</p>
  
            <h3 className="font-semibold text-slate-700 mt-6 mb-2">CCPA (California)</h3>
            <p className="text-slate-600">You may request access, deletion, and opt-out of data sale with no penalty.</p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Cookies and Tracking</h2>
            <ul className="list-disc ml-6 text-slate-600 space-y-1">
              <li><strong>Essential:</strong> Authentication and fraud protection</li>
              <li><strong>Analytics:</strong> Feature usage and traffic monitoring</li>
              <li><strong>Personalization:</strong> Preferences and recommendations</li>
              <li><strong>Marketing:</strong> With your consent only</li>
            </ul>
            <p className="text-slate-600 mt-2">
              Manage cookie settings through browser options or our cookie consent tool.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. International Data Transfers</h2>
            <p className="text-slate-600">
              We transfer data outside your country only with safeguards like standard clauses, adequacy decisions, or explicit consent.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Children's Privacy</h2>
            <p className="text-slate-600">
              Our services are not for users under 16. We delete data promptly if collected mistakenly.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Changes to Policy</h2>
            <p className="text-slate-600">
              We’ll notify you of material updates via email, platform notices, or request renewed consent where required.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Contact Information</h2>
            <p className="text-slate-600">
              For questions or requests, contact us at <strong>gyf1ltd@gmail.com</strong> (Subject: Privacy Policy Inquiry).
              <br />
              For data protection rights: <strong>gyf1ltd@gmail.com</strong> (Subject: DPO - Privacy Rights Request).
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Governing Law</h2>
            <p className="text-slate-600">
              This policy is governed by the laws of India and any applicable international data protection regulations.
            </p>
          </section>
  
          <p className="text-center text-sm text-slate-500 pt-8">
            Version 1.0 &nbsp;|&nbsp; Effective Date: August 1, 2025
          </p>
        </div>
      </div>
    </div>
  );
  
 
  
  
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage}/>;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'privacy': return <PrivacyPage />;
      case 'terms': return <TermsPage />;
      case 'Team': return <TeamPage setCurrentPage={setCurrentPage} />;
      case 'personal-styling': return <PersonalStylingPage />;
      case 'style-challenges': return <StyleChallengesPage />;
      case 'outfit-planning': return <OutfitPlanningPage />;
      case 'virtual-consulting': return <VirtualConsultingPage />;
      default: return <HomePage />;
    }
  };
  const PersonalStylingPage = () => (
    <div className="min-h-screen pt-24 pb-20 bg-white text-slate-800 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-5xl font-bold mb-6">1-on-1 Personal Styling</h1>
          <p className="text-lg text-slate-600 mb-6">
            Say goodbye to guesswork. With our AI-powered personal styling, you get curated outfits
            based on your body type, lifestyle, and preferences. Whether you're prepping for a job
            interview, vacation, or casual brunch — we’ve got your back.
          </p>
          <ul className="text-slate-600 space-y-3 list-disc list-inside">
            <li>Tailored suggestions from AI + fashion stylists</li>
            <li>Style quiz to define your aesthetic and needs</li>
            <li>Real-time outfit pairing from your wardrobe or preferred stores</li>
            <li>Inclusive of all body types, genders & fashion identities</li>
          </ul>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-ormFNfHRNGL3Tdo2Hgy0MIN7Fq9rLWKOw&s"
          alt="Personal Styling"
          className="rounded-xl shadow-xl w-full object-cover h-[500px]"
        />
      </div>
  
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-left mt-10">
          {[
            {
              step: "1. Take Our Quiz",
              desc: "Define your style, body type, favorite colors, and goals.",
            },
            {
              step: "2. Get Matched",
              desc: "Our AI matches your profile with curated outfits & combinations.",
            },
            {
              step: "3. Get Feedback",
              desc: "Rate outfits, provide feedback — we adapt with your taste.",
            },
            {
              step: "4. Look Amazing",
              desc: "Receive seasonal recommendations and shop seamlessly.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.step}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const StyleChallengesPage = () => (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 text-slate-800 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/12/infinity-nikki-style-challenges-wardrobe.jpg"
          alt="Style Challenges"
          className="rounded-xl shadow-xl w-full object-cover h-[500px]"
        />
        <div>
          <h1 className="text-5xl font-bold mb-6">Weekly Style Challenges</h1>
          <p className="text-lg text-slate-600 mb-6">
            Show off your fits. Join global users in style battles and challenges. Gain exposure, earn
            rewards, and let your creativity shine.
          </p>
          <ul className="text-slate-600 space-y-3 list-disc list-inside">
            <li>Participate in themed challenges (90s, monochrome, streetwear)</li>
            <li>Get voted up by the community</li>
            <li>Win badges, discounts, and featured slots</li>
            <li>Grow your style profile & followers</li>
          </ul>
        </div>
      </div>
  
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Top Ongoing Challenges</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "🌈 Color Clash", theme: "Create vibrant contrasting looks" },
            { title: "👔 Formal Friday", theme: "Reimagine business wear with flair" },
            { title: "🌿 Sustainable Style", theme: "Outfits using eco-conscious fashion" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
              <p className="text-slate-600">{item.theme}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const OutfitPlanningPage = () => (
    <div className="min-h-screen pt-24 pb-20 bg-white text-slate-800 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-5xl font-bold mb-6">Smart Outfit Planning</h1>
          <p className="text-lg text-slate-600 mb-6">
            Plan your week or trip in advance. Our AI helps you mix, match, and organize your looks
            across events, weather, and mood.
          </p>
          <ul className="text-slate-600 space-y-3 list-disc list-inside">
            <li>Drag & drop outfits into a calendar</li>
            <li>Receive packing lists & event-based recommendations</li>
            <li>Sync your closet or wishlist items</li>
            <li>Avoid repeat-wear or style clashes</li>
          </ul>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4f39kcb-YNWGtsml2wmLqjvL9AhY-j-4C4Q&s"
          alt="Outfit Planning"
          className="rounded-xl shadow-xl w-full object-cover h-[500px]"
        />
      </div>
    </div>
  );
  
  const VirtualConsultingPage = () => (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 text-slate-800 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6uq8rYdpelqbvjqPZ4o4HX7dgWz1C6vidA&s"
          alt="Virtual Consulting"
          className="rounded-xl shadow-xl w-full object-cover h-[500px]"
        />
        <div>
          <h1 className="text-5xl font-bold mb-6">Virtual Style Consultations</h1>
          <p className="text-lg text-slate-600 mb-6">
            Need expert help? Talk to a stylist live via video or chat. Perfect for weddings, career
            wardrobe upgrades, or seasonal makeovers.
          </p>
          <ul className="text-slate-600 space-y-3 list-disc list-inside">
            <li>Book time with certified stylists</li>
            <li>Show your wardrobe, selfies, or shopping cart</li>
            <li>Get direct feedback and actionable advice</li>
            <li>Receive a style summary post-session</li>
          </ul>
        </div>
      </div>
    </div>
  );
  
        


  return (
    <div className="min-h-screen bg-slate-50">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => setCurrentPage('home')}
            >
              <img className="h-20 mt-5  rounded-full" src="/logo2.png" alt="Logo" />
              <span className="text-2xl font-black bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                GYF
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.dropdown ? (
                    <div
                      ref={dropdownRef}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex justify-between items-center w-full cursor-pointer"
                    >
                      <span
                        className={`w-full text-left px-4 py-3 font-medium transition-all duration-300 rounded-lg ${
                          isServicesOpen ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                        }`}
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 mr-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180 text-blue-600' : 'text-slate-500'
                        }`}
                      />
                    </div>

                      <div
                        className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 z-50 ${
                          isServicesOpen
                            ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                        }`}
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => {
                              setCurrentPage(sub.id);
                              setIsServicesOpen(false);
                            }}
                            className={`w-full px-6 py-3 text-left font-medium transition-colors duration-200 ${
                              currentPage === sub.id ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className={`px-6 py-3 font-medium transition-all duration-300 rounded-lg ${
                        currentPage === item.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <div className="ml-8 flex items-center space-x-1">
                {legalItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-slate-200 shadow-lg z-50 transition-all duration-300 ${
            isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-6 py-4 space-y-2">
          {navItems.map((item) =>
  item.dropdown ? (
    <MobileView item={item} currentPage={currentPage} setIsMenuOpen={setIsMenuOpen} setIsServicesOpen={setIsServicesOpen} setCurrentPage={setCurrentPage} isServicesOpen={isServicesOpen}/>
    
  ) : (
    <button
      key={item.id}
      onClick={() => {
        setCurrentPage(item.id);
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }}
      className={`w-full text-left px-4 py-3 font-medium transition-all duration-300 rounded-lg ${
        currentPage === item.id
          ? 'text-blue-600 bg-blue-50'
          : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {item.label}
    </button>
  )
)}



            <div className="pt-4 border-t border-slate-200 space-y-2">
              {legalItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-[90px]">{renderPage()}</div>
      <footer className="bg-slate-800 text-white pt-12 pb-8 px-6 mt-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-sm">
    <div>
      <h4 className="font-semibold text-lg mb-4">About GYF</h4>
      <p className="text-slate-300">
        GYF is your AI-powered fashion companion. From personal styling to smart outfit planning,
        we bring tech & taste together.
      </p>
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-4">Services</h4>
      <ul className="space-y-2 text-slate-300">
        <li><button onClick={() => setCurrentPage('personal-styling')}>Personal Styling</button></li>
        <li><button onClick={() => setCurrentPage('style-challenges')}>Style Challenges</button></li>
        <li><button onClick={() => setCurrentPage('outfit-planning')}>Outfit Planning</button></li>
        <li><button onClick={() => setCurrentPage('virtual-consulting')}>Virtual Consulting</button></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-4">Company</h4>
      <ul className="space-y-2 text-slate-300">
        <li><button onClick={() => setCurrentPage('about')}>About Us</button></li>
        <li><button onClick={() => setCurrentPage('Team')}>Team</button></li>
        <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-4">Legal</h4>
      <ul className="space-y-2 text-slate-300">
        <li><button onClick={() => setCurrentPage('privacy')}>Privacy Policy</button></li>
        <li><button onClick={() => setCurrentPage('terms')}>Terms of Service</button></li>
      </ul>
    </div>
  </div>

  <div className="max-w-6xl mx-auto mt-10 border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
    <p>&copy; {new Date().getFullYear()} GYF. All rights reserved.</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="https://www.instagram.com/gyf.ltd?igsh=Z3piZWpqeW43eDly" className="hover:text-white transition">Instagram</a>
      <a href="https://www.linkedin.com/company/get-your-fit-g-y-f/" className="hover:text-white transition">LinkedIn</a>

    </div>
  </div>
</footer>

    </div>
  );
};

export default App;