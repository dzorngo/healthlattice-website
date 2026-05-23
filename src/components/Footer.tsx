import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const sections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Partners', href: '#' },
    ],
  },
];

export default function Footer() {
  const handleScrollTo = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F1C17] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Logo + Tagline Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
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
              </svg>
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                HealthLattice
              </span>
            </div>
            <p className="text-sm text-[#4A5E55] leading-relaxed mb-6" style={{ color: '#6b8a7e' }}>
              Modern EMR for African Healthcare. Built in Ghana, designed for the continent.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Linkedin size={16} />, label: 'LinkedIn' },
                { icon: <Twitter size={16} />, label: 'Twitter' },
                { icon: <Facebook size={16} />, label: 'Facebook' },
              ].map((social) => (
                <button
                  key={social.label}
                  onClick={() => console.log(`Social: ${social.label}`)}
                  className="w-9 h-9 rounded-full bg-[#1a2e27] flex items-center justify-center text-[#6b8a7e] hover:text-white hover:bg-[#0A6E4F] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F]"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Product + Company Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4
                className="text-sm font-semibold text-white uppercase tracking-widest mb-5"
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleScrollTo(link.href)}
                      className="text-sm text-[#6b8a7e] hover:text-[#12A274] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hello@healthlattice.com"
                  className="flex items-start gap-3 text-sm text-[#6b8a7e] hover:text-[#12A274] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  hello@healthlattice.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+233302000000"
                  className="flex items-start gap-3 text-sm text-[#6b8a7e] hover:text-[#12A274] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  +233 (0) 558 497 419
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/233552139347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-[#6b8a7e] hover:text-[#12A274] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded"
                  aria-label="WhatsApp us"
                >
                  <MessageCircle size={15} className="mt-0.5 flex-shrink-0" />
                  WhatsApp Support
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-[#6b8a7e]">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                  <span>
                    Accra-Kumasi Road,<br />
                    Oforikrom,<br />
                    Ghana
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1a2e27]" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-[#4a6258]">
            © 2026 HealthLattice Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => console.log('Footer: Privacy Policy')}
              className="text-xs text-[#4a6258] hover:text-[#12A274] transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <span className="text-[#4a6258]">·</span>
            <button
              onClick={() => console.log('Footer: Terms of Service')}
              className="text-xs text-[#4a6258] hover:text-[#12A274] transition-colors focus:outline-none"
            >
              Terms of Service
            </button>
          </div>

          <p className="text-xs text-[#4a6258]">
            Made with ❤️ in Ghana 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
