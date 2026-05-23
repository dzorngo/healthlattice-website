import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

interface CTASectionProps {
  onBookDemo: () => void;
}

export default function CTASection({ onBookDemo }: CTASectionProps) {
  return (
    <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 animate-mesh"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 20% 30%, rgba(18,162,116,0.3) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 80% 70%, rgba(10,110,79,0.4) 0%, transparent 60%),
            #054D37
          `,
        }}
        aria-hidden="true"
      />

      {/* Decorative dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F4A623] animate-pulse" aria-hidden="true" />
            <span className="text-sm font-semibold text-white/90">Now accepting new clinics for May 2026</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Ready to Modernize Your Clinic?
          </h2>

          <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Join 120+ healthcare facilities across Ghana already using HealthLattice to deliver
            faster, better, and more connected patient care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => console.log('CTA clicked: Start Free 30-Day Trial - CTA Section')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#054D37] text-base font-semibold hover:bg-[#F0F7F4] shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#054D37]"
            >
              Start Free 30-Day Trial
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookDemo}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F4A623] text-[#0F1C17] text-base font-semibold hover:bg-[#e09520] shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F4A623] focus:ring-offset-2 focus:ring-offset-[#054D37]"
            >
              <Calendar size={18} />
              Schedule a Live Demo
            </motion.button>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {[
              '✓ No credit card required',
              '✓ 30-day free trial',
              '✓ Setup in 48 hours',
              '✓ Cancel anytime',
            ].map((item) => (
              <span key={item} className="text-sm text-white/60 font-medium">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
