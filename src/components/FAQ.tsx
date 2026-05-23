import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is HealthLattice approved for use in Ghana?',
    answer: 'Yes. HealthLattice is designed with Ghanaian healthcare workflows in mind, including patient registration, billing, pharmacy, laboratory coordination, and operational digitization. We also align our implementation approach with local data protection and healthcare operational standards.',
  },
  {
    question: 'Can I migrate my existing paper records?',
    answer: 'Absolutely. Our dedicated onboarding team assists every new clinic with record digitisation — whether you have paper files, Excel sheets, or a legacy EMR system. We provide a structured import process and dedicated support staff to ensure a smooth, accurate transition with zero data loss.',
  },
  {
    question: 'Does it work offline or with poor internet connectivity?',
    answer: 'HealthLattice deployments can be configured for local network environments, helping clinics continue operations even in areas with unstable internet connectivity.',
  },
  {
    question: 'How does NHIS billing integration work?',
    answer: 'Yes. HealthLattice is being developed to support structured NHIS claims preparation and workflow management. Clinics can digitize consultation records, billing data, and patient encounters to simplify claims processing and reduce administrative burden.',
  },
  {
    question: 'What happens to my data if I cancel my subscription?',
    answer: 'Your data belongs to you — always. If you cancel, you receive a full export of all your patient records in standard formats (CSV, PDF, FHIR) within 48 hours. We retain your data securely for 90 days after cancellation in case you change your mind, and then permanently delete it from our servers upon your written request.',
  },
  {
    question: 'Do you offer training for non-technical staff?',
    answer: 'Yes, and this is one of our strongest points. Every plan includes a live virtual training session designed specifically for non-technical healthcare workers — nurses, receptionists, and billing staff. Sessions are conducted in English and Twi, take roughly 2 hours, and are recorded so new staff can be onboarded at any time.',
  },
];

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="border border-[#0A6E4F]/12 rounded-2xl overflow-hidden bg-white card-shadow hover:border-[#0A6E4F]/25 transition-colors duration-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-inset"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-[#0F1C17] leading-snug pr-2">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F0F7F4] flex items-center justify-center"
        >
          <ChevronDown size={16} className="text-[#0A6E4F]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-[#F0F7F4]">
              <p className="text-sm text-[#4A5E55] leading-relaxed pt-4">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
            Frequently Asked Questions
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Everything you need to know
          </h2>
          <p className="text-base text-[#4A5E55] mt-4">
            Can&apos;t find your answer? Our team is available on WhatsApp 24/7.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} item={faq} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center bg-[#F0F7F4] rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold text-[#054D37] mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
            Still have questions?
          </h3>
          <p className="text-sm text-[#4A5E55] mb-5">
            Our Ghana-based support team responds in under 4 minutes on average.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/233552139347"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A6E4F] text-white text-sm font-semibold hover:bg-[#054D37] hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={() => console.log('CTA clicked: Email Support')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#0A6E4F]/30 text-[#0A6E4F] text-sm font-semibold hover:border-[#0A6E4F] hover:bg-white hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2"
            >
              Email Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
