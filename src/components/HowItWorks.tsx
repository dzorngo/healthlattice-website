import { motion } from 'framer-motion';
import { UserPlus, GraduationCap, Rocket } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: <UserPlus size={24} />,
    title: 'Sign Up & Onboard',
    description: 'We migrate your existing records and configure your setup.',
    detail: 'Our onboarding team handles everything — from importing paper records to setting up your clinic profile, insurance codes, and staff accounts. Zero disruption to your operations.',
  },
  {
    number: '02',
    icon: <GraduationCap size={24} />,
    title: 'Train Your Staff',
    description: 'Live virtual training session (2 hours). Your team is ready.',
    detail: 'We run a focused, hands-on virtual training for all your staff — doctors, nurses, admin. No technical background needed. Most teams are fully confident within a single session.',
  },
  {
    number: '03',
    icon: <Rocket size={24} />,
    title: 'Go Live',
    description: 'Start using HealthLattice on day one. 24/7 support included.',
    detail: 'From the moment you go live, our Ghana-based support team is available around the clock. Average response time is under 4 minutes. You are never alone on this journey.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#F0F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
            Getting Started
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#054D37] leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Up and Running in 48 Hours
          </h2>
          <p className="text-lg text-[#4A5E55] mt-4 max-w-xl mx-auto">
            We handle the heavy lifting so you can focus on what matters — your patients.
          </p>
        </motion.div>

        {/* Steps — Desktop: horizontal with connector, Mobile: vertical */}
        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-[52px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#0A6E4F]/20 via-[#0A6E4F]/60 to-[#0A6E4F]/20" aria-hidden="true" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center lg:text-center"
              >
                {/* Mobile connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-[52px] top-[104px] bottom-0 w-px bg-gradient-to-b from-[#0A6E4F]/40 to-transparent"
                    style={{ height: 'calc(100% - 104px)' }}
                    aria-hidden="true"
                  />
                )}

                {/* Step badge + icon */}
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 rounded-full bg-[#0A6E4F] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(10,110,79,0.3)] mx-auto">
                    {step.icon}
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#F4A623] flex items-center justify-center text-[10px] font-bold text-[#0F1C17] shadow-md font-mono-data"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 card-shadow w-full hover:card-shadow-lg transition-shadow duration-300">
                  <p
                    className="text-sm font-semibold text-[#12A274] uppercase tracking-widest mb-2 font-mono-data"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Step {step.number}
                  </p>
                  <h3
                    className="text-xl font-bold text-[#054D37] mb-2"
                    style={{ fontFamily: 'Fraunces, serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4A5E55] font-medium mb-3">{step.description}</p>
                  <p className="text-sm text-[#4A5E55] leading-relaxed">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/233552139347?text=Hello%20HealthLattice%2C%20I%20would%20like%20to%20onboard%20my%20clinic%20for%20digital%20workflow%20setup."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A6E4F] text-white text-base font-semibold hover:bg-[#054D37] hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2"
          >
            Start Your Onboarding Today
          </a>
          <p className="text-sm text-[#4A5E55] mt-3">Average onboarding time: under 48 hours</p>
        </motion.div>
      </div>
    </section>
  );
}
