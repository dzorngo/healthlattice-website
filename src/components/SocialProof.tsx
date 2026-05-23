import { motion } from 'framer-motion';

const institutions = [
  'Primary Care Clinics',
  'Private Hospitals',
  'Diagnostic Centers',
  'Maternity Clinics',
  'Specialist Clinics',
  'Pharmacy Laboratories',
  'Telemedicine Platforms',
  'Urgent Care Centers',
  'Wellness Centers',
  'Multi-Specialty Hospitals',
  'Community Health Centers',
  'Medical Laboratories',
];

export default function SocialProof() {
  const doubled = [...institutions, ...institutions];

  return (
    <section className="py-14 bg-white border-y border-[#0A6E4F]/08 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#4A5E55]"
        >
          Powering Healthcare Across Ghana 🇬🇭
        </motion.p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }}
          aria-hidden="true"
        />

        <div className="flex">
          <div className="animate-marquee flex items-center gap-4 whitespace-nowrap">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="inline-flex items-center gap-2 bg-[#F0F7F4] border border-[#0A6E4F]/12 rounded-full px-5 py-2.5 group hover:bg-[#0A6E4F] hover:border-[#0A6E4F] transition-all duration-300 cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-[#0A6E4F] group-hover:bg-white transition-colors duration-300" />
                <span className="text-sm font-medium text-[#4A5E55] group-hover:text-white transition-colors duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
