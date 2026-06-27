import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  clinic: string;
  location: string;
  initials: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'We went from losing 3 patient files a week to zero. HealthLattice is indispensable to how we run our clinic now.',
    name: 'Dr. Ama Owusu',
    role: 'Medical Director',
    clinic: 'Sunrise Clinic',
    location: 'Kumasi, Ghana',
    initials: 'AO',
    avatarColor: '#0A6E4F',
  },
  {
    quote: 'NHIS billing used to take our admin team all Friday to complete. Now it\'s done by noon on Tuesday. The time savings alone pay for the subscription.',
    name: 'Mr. Kofi Mensah',
    role: 'Hospital Administrator',
    clinic: 'PearlCare Hospital',
    location: 'Accra, Ghana',
    initials: 'KM',
    avatarColor: '#054D37',
  },
  {
    quote: 'The WhatsApp reminders alone reduced our no-shows by half. The HealthLattice team is also incredibly responsive. Outstanding product.',
    name: 'Dr. Yaw Asante',
    role: 'Founder & Chief Medical Officer',
    clinic: 'AsanteMed Clinic',
    location: 'Takoradi, Ghana',
    initials: 'YA',
    avatarColor: '#12A274',
  },
];

function TestimonialCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="relative bg-white rounded-2xl p-7 card-shadow border border-transparent hover:border-[#0A6E4F]/20 hover:shadow-[0_8px_40px_rgba(10,110,79,0.14)] transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center mb-5">
        <Quote size={18} className="text-[#0A6E4F]" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#F4A623" color="#F4A623" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[#0F1C17] text-sm leading-relaxed italic flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex flex-col gap-2 pt-5 border-t border-[#F0F7F4]">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ background: testimonial.avatarColor }}
            aria-label={`Avatar for ${testimonial.name}`}
          >
            {testimonial.initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#0F1C17]">{testimonial.name}</p>
            <p className="text-xs text-[#4A5E55]">{testimonial.role}, {testimonial.clinic}</p>
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-1 text-xs text-[#0A6E4F] bg-[#F0F7F4] px-2.5 py-1 rounded-full font-medium">
            <span>📍</span>
            {testimonial.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
            Customer Stories
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#054D37] leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Clinic Owners Across Ghana Trust HealthLattice
          </h2>
          <p className="text-lg text-[#4A5E55] mt-4">
            Real results from real healthcare facilities — no marketing speak.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 0.15} />
          ))}
        </div>

        {/* Social Proof Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { stat: '120+', label: 'Clinics & Hospitals' },
            { stat: '200K+', label: 'Patient Records Managed' },
            { stat: '4.9★', label: 'Average Rating' },
            { stat: '60%', label: 'Avg No-Show Reduction' },
          ].map((item) => (
            <div key={item.label} className="text-center p-5 bg-[#F0F7F4] rounded-2xl">
              <p
                className="text-2xl sm:text-3xl font-bold text-[#054D37] font-mono-data"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {item.stat}
              </p>
              <p className="text-sm text-[#4A5E55] mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
