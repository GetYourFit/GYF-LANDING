import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  skills: string[];
}

export default function AboutUs() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sanidhya",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      description: "Fashion-tech founder with a strategic vision.",
      skills: ["Fashion Strategy", "Leadership", "Market Research"]
    },
    {
      id: 2,
      name: "Atharva",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Ex-Midjourney AI engineer.",
      skills: ["AI Engineering", "Data & Security", "Deep Learning"]
    },
    {
      id: 3,
      name: "Dhruv",
      role: "COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Startup operator with a fashion background.",
      skills: ["Operations", "Strategic Growth", "Team Leadership"]
    },
    {
      id: 4,
      name: "Aradhay Jain",
      role: "Lead Software Engineer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      description: "Engineering lead with hands-on experience.",
      skills: ["Full-Stack Engg", "APIs", "Cloud Architecture"]
    },
    {
      id: 5,
      name: "Aditya Bibhas Sahu",
      role: "Lead ML Engineer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      description: "ML specialist. Designs and tunes deep learning models.",
      skills: ["Machine Learning", "Personalization", "Model Development"]
    },
    {
      id: 6,
      name: "Ayush",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Visual storyteller crafting delightful experiences.",
      skills: ["UI/UX Design", "Visual Communication", "Prototyping"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-coral-400 to-coral-200/20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-manrope font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-manrope font-bold text-black mb-6">
              About GetYourFit
            </h1>
            <p className="text-xl lg:text-2xl font-manrope text-black max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing fashion with AI-powered recommendations that understand every body type, skin tone, and personal style preference.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-8">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg lg:text-xl font-manrope text-gray-700 leading-relaxed mb-6">
                At GetYourFit, we believe that fashion should be inclusive, personalized, and accessible to everyone. Our cutting-edge AI technology analyzes body measurements, skin tones, and style preferences to deliver recommendations that make every customer feel confident and beautiful.
              </p>
              <p className="text-lg lg:text-xl font-manrope text-gray-700 leading-relaxed">
                We're not just building a product – we're creating a future where fashion technology serves everyone, regardless of their body type, gender identity, or cultural background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-6">
              Meet The Dreamers
            </h2>
            <p className="text-xl font-manrope text-gray-700 max-w-3xl mx-auto">
              A close-knit team, blending engineering with style—and humanity in every interaction.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Profile Image */}
                <div className="flex justify-center pt-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-coral-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-manrope font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-coral-400 font-manrope font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 font-manrope text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-coral-100 text-coral-600 px-3 py-1 rounded-full text-xs font-manrope font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-manrope font-bold text-black mb-8">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-manrope font-bold text-black mb-4">Inclusivity</h3>
              <p className="text-gray-700 font-manrope">
                Fashion technology that works for everyone, celebrating diversity in all its forms.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-manrope font-bold text-black mb-4">Innovation</h3>
              <p className="text-gray-700 font-manrope">
                Pushing the boundaries of AI and computer vision to solve real fashion challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💖</span>
              </div>
              <h3 className="text-xl font-manrope font-bold text-black mb-4">Empowerment</h3>
              <p className="text-gray-700 font-manrope">
                Helping people express their unique style and feel confident in their choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
