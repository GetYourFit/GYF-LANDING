import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyChooseGYF from '@/components/WhyChooseGYF';
import HowItWorks from '@/components/HowItWorks';
import InteractiveDemo from '@/components/InteractiveDemo';
import ClientSuccess from '@/components/ClientSuccess';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyChooseGYF />
      <HowItWorks />
      <InteractiveDemo />
      <ClientSuccess />
      <CTA />
      <Footer />
    </div>
  );
}
