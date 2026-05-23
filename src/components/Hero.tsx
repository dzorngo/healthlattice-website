import { motion } from 'framer-motion';
import { Star, ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const institutions = [
  { name: 'Primary Care Clinics', abbr: 'PC' },
  { name: 'Private Hospitals', abbr: 'PH' },
  { name: 'Diagnostic Centers', abbr: 'DC' },
  { name: 'Maternity Clinics', abbr: 'MC' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } }),
};

function PatientDashboardMockup() {
  return (
    <div className="bg-white rounded-2xl card-shadow-lg p-5 w-full max-w-sm relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-[#4A5E55] font-medium uppercase tracking-widest mb-0.5">Patient Record</p>
          <h3 className="text-[#0F1C17] font-semibold text-base" style={{ fontFamily: 'Fraunces, serif' }}>
            Abena Kwarteng
          </h3>
        </div>
        <span className="bg-[#F0F7F4] text-[#0A6E4F] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#0A6E4F]/20">
          ✓ Vitals OK
        </span>
      </div>

      {/* Patient Info Row */}
      <div className="flex gap-3 mb-4">
        {[
          { label: 'Age', value: '34' },
          { label: 'Blood', value: 'O+' },
          { label: 'Visits', value: '12' },
        ].map((item) => (
          <div key={item.label} className="flex-1 bg-[#F0F7F4] rounded-xl p-2.5 text-center">
            <p
              className="text-lg font-bold text-[#0A6E4F] font-mono-data"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {item.value}
            </p>
            <p className="text-xs text-[#4A5E55] mt-0.5">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Visit History */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-[#4A5E55] uppercase tracking-widest mb-2">Recent Visits</p>
        {[
          { date: '12 May 2026', reason: 'Annual Check-up', status: 'Completed' },
          { date: '3 Mar 2026', reason: 'Blood Pressure Review', status: 'Completed' },
          { date: '18 Jan 2026', reason: 'Malaria Treatment', status: 'Completed' },
        ].map((visit) => (
          <div key={visit.date} className="flex items-center justify-between py-2 border-b border-[#F0F7F4] last:border-0">
            <div>
              <p className="text-xs font-medium text-[#0F1C17]">{visit.reason}</p>
              <p className="text-xs text-[#4A5E55]">{visit.date}</p>
            </div>
            <span className="text-xs text-[#0A6E4F] bg-[#F0F7F4] px-2 py-0.5 rounded-full">{visit.status}</span>
          </div>
        ))}
      </div>

      {/* Mini Bar Chart */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-[#4A5E55] uppercase tracking-widest mb-2">BP Trend (mmHg)</p>
        <div className="flex items-end gap-1.5 h-10">
          {[65, 75, 58, 82, 70, 88, 72].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all duration-300"
              style={{
                height: `${h}%`,
                background: i === 5 ? '#0A6E4F' : '#D1EDE5',
              }}
            />
          ))}
        </div>
      </div>

      {/* Appointment Countdown */}
      <div className="bg-[#054D37] rounded-xl p-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-[#12A274] font-medium">Next Appointment</p>
          <p className="text-white text-sm font-semibold">Dr. Mensah — Tomorrow, 10:00am</p>
        </div>
        <div className="bg-[#F4A623] rounded-lg px-2.5 py-1.5 text-center min-w-[44px]">
          <p className="text-[#0F1C17] text-xs font-bold font-mono-data" style={{ fontFamily: 'JetBrains Mono, monospace' }}>24h</p>
          <p className="text-[#0F1C17] text-[10px]">left</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onBookDemo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden mesh-gradient dot-pattern"
    >
      {/* Decorative blurred circle */}
      <div
        className="absolute right-[5%] top-[15%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10,110,79,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column — 3/5 */}
          <div className="lg:col-span-3">
            {/* Floating badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-white border border-[#0A6E4F]/20 rounded-full px-4 py-2 mb-6 card-shadow"
            >
              <span className="text-base" role="img" aria-label="hospital">🏥</span>
              <span className="text-sm font-semibold text-[#0A6E4F]">Designed for Modern African Healthcare</span>
              <span className="flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#0A6E4F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A6E4F]" />
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold leading-[1.08] tracking-tight text-[#054D37] mb-6"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              The Smarter EMR{' '}
              <span className="italic text-[#0A6E4F]">Built for</span>
              <br />
              African Healthcare
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg sm:text-xl text-[#4A5E55] leading-relaxed mb-8 max-w-xl"
            >
              HealthLattice digitizes patient records, streamlines appointments, and gives your clinic
              real-time insights — all in one secure platform.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={onBookDemo}
                className="animate-pulse-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#12A274] text-white text-base font-semibold hover:bg-[#0A6E4F] hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2"
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => console.log('CTA clicked: Watch 2-Min Demo')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#0A6E4F]/30 text-[#0A6E4F] text-base font-semibold hover:border-[#0A6E4F] hover:bg-[#F0F7F4] hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0A6E4F] text-white">
                  <Play size={12} fill="white" />
                </span>
                Watch 2-Min Demo
              </button>
            </motion.div>

            {/* Social Proof Strip */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              {/* Stars */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F4A623" color="#F4A623" />
                  ))}
                  <span
                    className="ml-2 text-sm font-bold text-[#0F1C17] font-mono-data"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    4.9/5
                  </span>
                </div>
                <p className="text-xs text-[#4A5E55]">from 200+ verified reviews</p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#0A6E4F]/15" />

              {/* Institution Logos */}
              <div className="flex items-center gap-2 flex-wrap">
                {institutions.map((inst) => (
                  <div
                    key={inst.abbr}
                    className="flex items-center gap-1.5 bg-white border border-[#0A6E4F]/20 rounded-lg px-3 py-1.5 card-shadow"
                    title={inst.name}
                  >
                    <span className="w-5 h-5 rounded bg-[#0A6E4F]/10 flex items-center justify-center text-[10px] font-bold text-[#0A6E4F]">
                      {inst.abbr}
                    </span>
                    <span className="text-xs text-[#4A5E55] font-medium">{inst.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column — 2/5 */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 flex justify-center lg:justify-end relative"
          >
            {/* Decorative background glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(10,110,79,0.12) 0%, transparent 70%)',
                filter: 'blur(30px)',
                transform: 'scale(1.2)',
              }}
              aria-hidden="true"
            />
            <div className="animate-float w-full max-w-sm relative z-10">
              <PatientDashboardMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
