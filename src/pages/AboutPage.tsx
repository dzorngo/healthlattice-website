import { motion } from 'framer-motion';
import {
  Heart,
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
  Layers,
  Shield,
  Users,
  TrendingUp,
  Zap,
  HeartHandshake,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ValueCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-6 card-shadow border border-[#0A6E4F]/10 hover:border-[#0A6E4F]/25 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center mb-4 text-[#0A6E4F]">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-[#054D37] mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <CheckCircle size={14} className="text-[#0A6E4F] flex-shrink-0" />
            <span className="text-sm text-[#4A5E55]">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onBookDemo={() => {
        const el = document.getElementById('cta');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pb-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#F0F7F4] text-[#0A6E4F] rounded-full px-4 py-2 mb-6">
                <Heart size={18} />
                <span className="text-sm font-semibold">About HealthLattice</span>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Building Better Healthcare Workflows for Africa
              </h1>
              <p className="text-lg sm:text-xl text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                HealthLattice was founded with a simple belief: healthcare professionals should spend more time caring for patients and less time managing paperwork.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-[#F0F7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-14 items-center"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                  Our Story
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Why We Built HealthLattice
                </h2>
                <div className="flex flex-col gap-4 text-base text-[#4A5E55] leading-relaxed">
                  <p>
                    Across many clinics and healthcare facilities, patient information, appointments, billing, and operational processes are still managed through manual systems that create delays, increase administrative burden, and limit visibility.
                  </p>
                  <p>
                    We created HealthLattice to help healthcare providers transition to efficient, digital workflows that improve both patient experience and operational performance.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users size={22} />, label: 'Patient-Centred', sub: 'Built around the patient journey' },
                  { icon: <Layers size={22} />, label: 'Fully Connected', sub: 'Every department in one system' },
                  { icon: <Shield size={22} />, label: 'Secure & Reliable', sub: 'Data protection at every layer' },
                  { icon: <TrendingUp size={22} />, label: 'Scalable', sub: 'Grows with your facility' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-5 card-shadow border border-[#0A6E4F]/10 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center text-[#0A6E4F]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#054D37]">{item.label}</p>
                      <p className="text-xs text-[#4A5E55] mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#F0F7F4] text-[#0A6E4F] rounded-full px-4 py-2 mb-6">
                <Target size={18} />
                <span className="text-sm font-semibold">Our Mission</span>
              </div>
              <blockquote
                className="text-2xl sm:text-3xl font-bold text-[#054D37] leading-snug"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                "To empower healthcare organizations with practical digital tools that simplify clinical operations, improve efficiency, and support better patient care."
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 md:py-24 bg-[#F0F7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                  What We Do
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-4"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  A Connected System for the Entire Patient Journey
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                  HealthLattice helps clinics and healthcare facilities digitize key workflows — from arrival to checkout.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon: <Users size={18} />, label: 'Patient registration and records' },
                  { icon: <CheckCircle size={18} />, label: 'Appointment scheduling' },
                  { icon: <Heart size={18} />, label: 'Clinical documentation' },
                  { icon: <Zap size={18} />, label: 'Laboratory workflows' },
                  { icon: <Layers size={18} />, label: 'Pharmacy management' },
                  { icon: <TrendingUp size={18} />, label: 'Billing and payments' },
                  { icon: <Shield size={18} />, label: 'Reporting and analytics' },
                  { icon: <HeartHandshake size={18} />, label: 'Onboarding and training' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-xl p-4 flex items-center gap-3 card-shadow border border-[#0A6E4F]/10"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F0F7F4] flex items-center justify-center flex-shrink-0 text-[#0A6E4F]">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-[#054D37]">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Built for Real Healthcare Environments */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                  Our Approach
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-4"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Built for Real Healthcare Environments
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                  Healthcare technology should adapt to the realities of daily clinical operations.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ValueCard
                  icon={<Zap size={20} />}
                  title="Practical and Easy to Use"
                  items={['Intuitive interfaces', 'Minimal training required', 'Works the way your team works']}
                />
                <ValueCard
                  icon={<Heart size={20} />}
                  title="Designed Around Workflows"
                  items={['Clinical-first design', 'Reduces administrative steps', 'Supports the full patient journey']}
                />
                <ValueCard
                  icon={<TrendingUp size={20} />}
                  title="Scalable for Growing Facilities"
                  items={['Starts simple, grows with you', 'Multi-department support', 'Adaptable to your structure']}
                />
                <ValueCard
                  icon={<Target size={20} />}
                  title="Focused on Operational Efficiency"
                  items={['Reduces manual processes', 'Improves staff productivity', 'Real-time visibility']}
                />
                <ValueCard
                  icon={<HeartHandshake size={20} />}
                  title="Supported with Onboarding"
                  items={['Hands-on training provided', 'Dedicated support team', 'Continuous improvement']}
                />
                <ValueCard
                  icon={<Shield size={20} />}
                  title="Secure and Reliable"
                  items={['Data protection built in', 'Encrypted records', 'HIPAA-aligned practices']}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 md:py-24 bg-[#F0F7F4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white text-[#0A6E4F] rounded-full px-4 py-2 mb-6 card-shadow">
                <Eye size={18} />
                <span className="text-sm font-semibold">Our Vision</span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                A Future Where African Healthcare Operates at World-Class Standards
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                We envision a future where healthcare facilities across Africa can operate with the same level of efficiency, accessibility, and digital capability as leading healthcare organizations around the world. By helping clinics modernize their operations, we contribute to stronger healthcare systems and better patient experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why HealthLattice */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                  Why Us
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-4"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Why HealthLattice
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                  We understand that adopting new technology is an important decision. That is why we focus on what matters most to you.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {[
                  { icon: <Zap size={22} />, label: 'Simplicity over complexity' },
                  { icon: <HeartHandshake size={22} />, label: 'Reliable support and training' },
                  { icon: <Shield size={22} />, label: 'Transparent communication' },
                  { icon: <TrendingUp size={22} />, label: 'Continuous improvement' },
                  { icon: <Heart size={22} />, label: 'Long-term partnerships' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#F0F7F4] rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0A6E4F] card-shadow">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold text-[#054D37]">{item.label}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-base text-[#4A5E55] leading-relaxed mt-10 max-w-2xl mx-auto">
                We are committed to helping healthcare organizations succeed in their digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 60% at 20% 30%, rgba(18,162,116,0.3) 0%, transparent 60%),
                radial-gradient(ellipse 60% 70% at 80% 70%, rgba(10,110,79,0.4) 0%, transparent 60%),
                #054D37
              `,
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#F4A623] animate-pulse" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/90">Let's Build Better Healthcare Together</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Let's Build Better Healthcare Together
              </h2>
              <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
                Whether you are exploring digital transformation for the first time or looking to improve existing processes, HealthLattice is ready to help. Book a free demonstration and discover how digital healthcare workflows can improve efficiency, organization, and patient care.
              </p>
              <a
                href="https://wa.me/233552139347?text=Hello%20HealthLattice%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20my%20clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#054D37] text-base font-semibold hover:bg-[#F0F7F4] shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#054D37]"
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </a>
              <p className="text-sm text-white/60 mt-6">
                No commitment. We will confirm within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
