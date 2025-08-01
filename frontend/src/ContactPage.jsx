
import React, { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
    const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post(
          "https://landing-backend-mwnn.onrender.com/api/support/get-support",
          {
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            message: `Subject: ${form.subject}\n\n${form.message}`,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("Message sent successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
      } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to send message. Try again later.");
      }
    };
  
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">Get in Touch</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Ready to start your fitness journey? We'd love to hear from you. Reach out and let's make it happen together.
              </p>
            </div>
  
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Contact Information</h2>
  
                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="w-6 h-6 text-blue-600" />,
                      title: "Phone",
                      content: "+91 96673 72666, 8595600366",
                      description: "Mon-Fri 6AM-10PM, Sat-Sun 7AM-8PM"
                    },
                    {
                      icon: <Mail className="w-6 h-6 text-indigo-600" />,
                      title: "Email",
                      content: "gyf1ltd@gmail.com",
                      description: "We'll respond within 24 hours"
                    },
                    {
                      icon: <MapPin className="w-6 h-6 text-purple-600" />,
                      title: "Location",
                      content: "Delhi Technological University, Bawana Road, Shahbad Daulatpur, New Delhi, Delhi 110042",
                      description: "Visit us at our main office"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                      <div className="flex-shrink-0">{contact.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">{contact.title}</h3>
                        <p className="text-slate-700 font-medium mb-1">{contact.content}</p>
                        <p className="text-slate-500 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
  
                <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>7:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Send us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-medium mb-2">First Name</label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg  "
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-medium mb-2">Last Name</label>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg  "
                        placeholder="Doe"
                      />
                    </div>
                  </div>
  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg  "
                      placeholder="john@example.com"
                    />
                  </div>
  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg transition-all duration-300 bg-white"
                    >
                      <option>General Inquiry</option>
                      <option>Personal Influencer</option>
                      <option>Style Recommendations</option>
                      <option>API Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>
  
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg  "
                      placeholder="Tell us about your fitness goals and how we can help you achieve them..."
                    ></textarea>
                  </div>
  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };


  export default ContactPage;