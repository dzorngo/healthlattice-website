import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onBookDemo={() => setDemoOpen(true)} />

      <main>
        <Hero onBookDemo={() => setDemoOpen(true)} />
        <SocialProof />
        <ProblemStatement />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection onBookDemo={() => setDemoOpen(true)} />
      </main>

      <Footer />

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}

export default App;
