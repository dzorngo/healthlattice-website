import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Case Studies', href: '#testimonials' },
  { label: 'About', href: '#how-it-works' },
  { label: 'Blog', href: '#faq' },
];

interface NavbarProps {
  onBookDemo: () => void;
}

export default function Navbar({ onBookDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_2px_20px_rgba(10,110,79,0.10)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded-lg"
            aria-label="HealthLattice home"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="#0A6E4F" />
              <circle cx="8" cy="8" r="2.5" fill="white" opacity="0.9" />
              <circle cx="16" cy="8" r="2.5" fill="white" opacity="0.9" />
              <circle cx="24" cy="8" r="2.5" fill="white" opacity="0.9" />
              <circle cx="8" cy="16" r="2.5" fill="white" opacity="0.9" />
              <circle cx="16" cy="16" r="2.5" fill="#F4A623" />
              <circle cx="24" cy="16" r="2.5" fill="white" opacity="0.9" />
              <circle cx="8" cy="24" r="2.5" fill="white" opacity="0.9" />
              <circle cx="16" cy="24" r="2.5" fill="white" opacity="0.9" />
              <circle cx="24" cy="24" r="2.5" fill="white" opacity="0.9" />
              <line x1="8" y1="8" x2="24" y2="8" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <line x1="8" y1="16" x2="24" y2="16" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <line x1="8" y1="24" x2="24" y2="24" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <line x1="8" y1="8" x2="8" y2="24" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <line x1="16" y1="8" x2="16" y2="24" stroke="white" strokeWidth="0.8" opacity="0.4" />
              <line x1="24" y1="8" x2="24" y2="24" stroke="white" strokeWidth="0.8" opacity="0.4" />
            </svg>
            <span
              className="font-display text-xl font-700 tracking-tight"
              style={{ color: '#054D37', fontFamily: 'Fraunces, serif', fontWeight: 700 }}
            >
              HealthLattice
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded px-1 ${
                  scrolled
                    ? 'text-[#4A5E55] hover:text-[#0A6E4F]'
                    : 'text-[#4A5E55] hover:text-[#0A6E4F]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onBookDemo}
              className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-[#0A6E4F] text-[#0A6E4F] hover:bg-[#0A6E4F] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2"
            >
              Book a Demo
            </button>
            <a
              href="https://wa.me/233552139347?text=Hello%20HealthLattice%2C%20I%20would%20like%20to%20onboard%20my%20clinic%20for%20digital%20workflow%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#0A6E4F] text-white hover:bg-[#054D37] transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2"
            >
              Start OnBoarding
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#0A6E4F] hover:bg-[#F0F7F4] focus:outline-none focus:ring-2 focus:ring-[#0A6E4F]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 pb-10 px-8"
          >
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-2xl font-semibold text-[#0F1C17] hover:text-[#0A6E4F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-8">
              <button
                onClick={() => { setMobileOpen(false); onBookDemo(); }}
                className="w-full py-4 rounded-full text-base font-semibold border-2 border-[#0A6E4F] text-[#0A6E4F] hover:bg-[#0A6E4F] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F]"
              >
                Book a Demo
              </button>
              <a
                href="https://wa.me/233552139347?text=Hello%20HealthLattice%2C%20I%20would%20like%20to%20onboard%20my%20clinic%20for%20digital%20workflow%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full text-base font-semibold bg-[#0A6E4F] text-white hover:bg-[#054D37] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] text-center"
              >
                Start OnBoarding
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
