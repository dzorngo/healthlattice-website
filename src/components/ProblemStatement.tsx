import { motion } from 'framer-motion';
import { FolderOpen, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

interface PainPoint {
  icon: React.ReactNode;
  stat: string;
  title: string;
  description: string;
}

const painPoints: PainPoint[] = [
  {
    icon: <FolderOpen size={28} />,
    stat: '78%',
    title: 'Lost or Misplaced Patient Files',
    description: 'of Ghanaian clinics report chronic record loss, delaying diagnoses and endangering patients.',
  },
  {
    icon: <Clock size={28} />,
    stat: '2+ hrs',
    title: 'Wasted Daily on Manual Entry',
    description: 'per clinic staff member — time stolen from patient care by paperwork that should not exist in 2026.',
  },
  {
    icon: <AlertTriangle size={28} />,
    stat: '15%',
    title: 'Revenue Lost to Billing Errors',
    description: 'average monthly revenue leakage from NHIS claim rejections, duplicate entries, and missed charges.',
  },
];

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-20 md:py-32" style={{ background: '#0F1C17' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#12A274] mb-4">
            The Status Quo is Broken
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Running a clinic on paper in 2026 is costing you more than you think.
          </h2>
        </motion.div>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative rounded-2xl p-7 border border-[#0A6E4F]/30 bg-[#0A6E4F]/05 hover:border-[#0A6E4F]/60 hover:bg-[#0A6E4F]/10 transition-all duration-300 group"
              style={{ background: 'rgba(10,110,79,0.06)' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#0A6E4F]/20 text-[#12A274] flex items-center justify-center mb-5 group-hover:bg-[#0A6E4F]/30 transition-colors duration-300">
                {point.icon}
              </div>

              {/* Stat */}
              <div
                className="text-4xl font-bold text-[#F4A623] mb-2 font-mono-data"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {point.stat}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#4A5E55] leading-relaxed" style={{ color: '#8aada0' }}>
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#F4A623] font-semibold text-base hover:gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F4A623] rounded px-2 py-1"
          >
            There&apos;s a better way
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
