import { motion } from 'framer-motion';
import { CreditCard, FileText, CheckCircle, TrendingUp, Link, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 card-shadow border border-[#0A6E4F]/10 hover:border-[#0A6E4F]/25 hover:card-shadow-lg transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-[#F0F7F4] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-[#054D37] mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
        {title}
      </h3>
      <p className="text-sm text-[#4A5E55] leading-relaxed">{description}</p>
    </div>
  );
}

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onBookDemo={() => {
        const el = document.getElementById('cta');
        el?.scrollIntoView({ behavior: 'smooth' });
      }} />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pb-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#F0F7F4] text-[#0A6E4F] rounded-full px-4 py-2 mb-6">
                <CreditCard size={18} />
                <span className="text-sm font-semibold">Billing &amp; Insurance</span>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Billing &amp; Revenue Management
              </h1>
              <p className="text-lg sm:text-xl text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Capture Every Charge. Get Paid Faster.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-[#F0F7F4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-4"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Get Paid Faster. Every Time.
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Manual billing processes can lead to missed charges, delayed payments, and unnecessary administrative work. HealthLattice helps clinics manage billing digitally, giving staff the tools to create invoices, track payments, and maintain accurate financial records from a single system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Simplify the Billing Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                    Simplify Billing
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                    style={{ fontFamily: 'Fraunces, serif' }}
                  >
                    Simplify the Billing Process
                  </h2>
                  <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                    From consultation fees to laboratory services and medications, every billable service can be captured and recorded as part of the patient journey.
                  </p>
                  <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                    With HealthLattice, clinics can:
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      { icon: <FileText size={18} />, text: 'Generate patient invoices electronically' },
                      { icon: <TrendingUp size={18} />, text: 'Track outstanding balances' },
                      { icon: <CheckCircle size={18} />, text: 'Record payments accurately' },
                      { icon: <Clock size={18} />, text: 'Maintain complete billing histories' },
                      { icon: <CreditCard size={18} />, text: 'Reduce paperwork and manual calculations' },
                    ].map((item) => (
                      <li key={item.text} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#F0F7F4] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#0A6E4F]">{item.icon}</span>
                        </div>
                        <span className="text-sm text-[#4A5E55] font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="bg-white rounded-2xl card-shadow p-6 border border-[#0A6E4F]/10">
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#F0F7F4]">
                      <h4 className="text-sm font-semibold text-[#0F1C17]" style={{ fontFamily: 'Fraunces, serif' }}>
                        NHIS Claims — May 2026
                      </h4>
                      <span className="text-xs font-bold text-[#38A169] bg-[#F0FFF4] px-2.5 py-1 rounded-full">
                        GH₵ 24,850 processed
                      </span>
                    </div>
                    {[
                      { name: 'Kwame A.', amount: 'GH₵ 480', status: 'Approved', statusColor: '#38A169' },
                      { name: 'Efua D.', amount: 'GH₵ 1,200', status: 'Approved', statusColor: '#38A169' },
                      { name: 'Kofi M.', amount: 'GH₵ 350', status: 'Processing', statusColor: '#F4A623' },
                      { name: 'Ama B.', amount: 'GH₵ 690', status: 'Approved', statusColor: '#38A169' },
                    ].map((claim) => (
                      <div
                        key={claim.name}
                        className="flex items-center justify-between py-2.5 border-b border-[#F0F7F4] last:border-0"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-[#0A6E4F]/10 flex items-center justify-center text-xs font-bold text-[#0A6E4F]">
                            {claim.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#0F1C17]">{claim.name}</p>
                            <p className="text-xs text-[#4A5E55]">NHIS Claim</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-[#0F1C17]">{claim.amount}</p>
                          <p className="text-xs font-medium" style={{ color: claim.statusColor }}>{claim.status}</p>
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 bg-[#0A6E4F] rounded-xl p-3 flex items-center justify-between">
                      <span className="text-white text-xs font-medium">Auto-submit pending claims</span>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-[#F4A623]" />
                        <span className="text-[#F4A623] text-xs font-bold">Enabled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Improve Financial Visibility */}
        <section className="py-16 bg-[#F0F7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="lg:order-2">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                  Financial Visibility
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Improve Financial Visibility
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                  Clinic managers and administrators need a clear view of revenue activity. HealthLattice provides organized billing records that make it easier to:
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    { icon: <TrendingUp size={18} />, text: 'Monitor daily collections' },
                    { icon: <Clock size={18} />, text: 'Review payment histories' },
                    { icon: <FileText size={18} />, text: 'Track service charges' },
                    { icon: <CheckCircle size={18} />, text: 'Support financial reporting' },
                    { icon: <CreditCard size={18} />, text: 'Reduce billing discrepancies' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#0A6E4F]">{item.icon}</span>
                      </div>
                      <span className="text-sm text-[#4A5E55] font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <FeatureCard
                    icon={<TrendingUp size={20} className="text-[#0A6E4F]" />}
                    title="Daily Collections"
                    description="Monitor how much revenue is collected each day with organized summaries."
                  />
                  <FeatureCard
                    icon={<FileText size={20} className="text-[#0A6E4F]" />}
                    title="Payment History"
                    description="Review complete payment records for every patient and service."
                  />
                  <FeatureCard
                    icon={<CheckCircle size={20} className="text-[#0A6E4F]" />}
                    title="Financial Reporting"
                    description="Support compliance and decision-making with accurate billing data."
                  />
                  <FeatureCard
                    icon={<CreditCard size={20} className="text-[#0A6E4F]" />}
                    title="Discrepancy Reduction"
                    description="Reduce errors with digital invoicing and automated tracking."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Connected to Clinical Workflows */}
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
                  Connected Workflows
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Connected to Clinical Workflows
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto mb-4">
                  Billing should not operate in isolation.
                </p>
                <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                  HealthLattice connects billing with patient registration, consultations, laboratory services, and pharmacy dispensing, helping clinics ensure that services provided are properly documented and billed.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Link size={20} />, title: 'Registration to Billing', description: 'Patient registration automatically feeds into billing records for seamless invoicing.' },
                  { icon: <FileText size={20} />, title: 'Consultation Charges', description: 'Consultation fees are captured as part of the patient visit record.' },
                  { icon: <CheckCircle size={20} />, title: 'Lab & Pharmacy Billing', description: 'Services from labs and pharmacy are linked to the same invoice automatically.' },
                  { icon: <CreditCard size={20} />, title: 'Unified Payment Record', description: 'All charges for a patient are organized in one place for easy tracking.' },
                ].map((card) => (
                  <FeatureCard
                    key={card.title}
                    icon={<span className="text-[#0A6E4F]">{card.icon}</span>}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reduce Administrative Burden */}
        <section className="py-16 bg-[#F0F7F4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Reduce Administrative Burden
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto mb-4">
                Manual billing systems consume valuable staff time.
              </p>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                By digitizing billing workflows, clinics can spend less time on paperwork and more time focusing on patient care and operational efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Designed for Growing Healthcare Facilities */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Designed for Growing Healthcare Facilities
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Whether you operate a private clinic, specialist practice, maternity center, or diagnostic facility, HealthLattice provides the tools needed to manage billing with greater confidence and control.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
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
                <span className="text-sm font-semibold text-white/90">Ready to Modernize Your Billing?</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Ready to Modernize Your Billing Operations?
              </h2>
              <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
                Book a free demonstration and discover how HealthLattice can help your clinic improve billing accuracy, streamline payments, and gain better financial visibility.
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
