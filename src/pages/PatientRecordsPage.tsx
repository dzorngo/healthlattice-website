import { motion } from 'framer-motion';
import { FileText, Search, CheckCircle, Shield, Monitor, ArrowRight } from 'lucide-react';
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

export default function PatientRecordsPage() {
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
                <FileText size={18} />
                <span className="text-sm font-semibold">Patient Records</span>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Electronic Patient Records
              </h1>
              <p className="text-lg sm:text-xl text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Healthcare teams should spend their time caring for patients—not searching through filing cabinets.
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
                Every Patient File, Instantly at Your Fingertips
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                HealthLattice provides a secure electronic patient record system that allows authorized staff to search, retrieve, and update patient information within seconds. Whether a patient visited yesterday or five years ago, their records are available when needed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Eliminate Paper-Based Delays */}
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
                    Paper-Based Delays
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                    style={{ fontFamily: 'Fraunces, serif' }}
                  >
                    Eliminate Paper-Based Delays
                  </h2>
                  <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                    Paper folders are difficult to organize, vulnerable to loss, and time-consuming to retrieve. As patient volumes grow, these challenges become even more costly.
                  </p>
                  <p className="text-base text-[#4A5E55] leading-relaxed mb-8">
                    With HealthLattice, clinics can:
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      { icon: <Search size={18} />, text: 'Search patient records instantly' },
                      { icon: <FileText size={18} />, text: 'Access visit history from a centralized system' },
                      { icon: <CheckCircle size={18} />, text: 'Update records in real time' },
                      { icon: <Monitor size={18} />, text: 'Reduce dependence on physical storage' },
                      { icon: <Shield size={18} />, text: 'Improve collaboration between departments' },
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
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F0F7F4]">
                      <div className="w-8 h-8 rounded-full bg-[#0A6E4F]/10 flex items-center justify-center">
                        <Search size={14} className="text-[#0A6E4F]" />
                      </div>
                      <div className="flex-1 bg-[#F0F7F4] rounded-lg px-3 py-2 text-xs text-[#4A5E55]">
                        Search patient records...
                      </div>
                      <span className="text-xs bg-[#0A6E4F] text-white px-2.5 py-1 rounded-lg font-medium">Search</span>
                    </div>
                    {[
                      { name: 'Kwame Asante', id: 'GH-00291', condition: 'Hypertension', date: '14 May' },
                      { name: 'Efua Darko', id: 'GH-00544', condition: 'Diabetes Type 2', date: '13 May' },
                      { name: 'Ama Boateng', id: 'GH-00871', condition: 'Malaria', date: '12 May' },
                      { name: 'Kofi Acheampong', id: 'GH-01122', condition: 'Annual Check-up', date: '10 May' },
                    ].map((patient) => (
                      <div
                        key={patient.id}
                        className="flex items-center justify-between py-2.5 border-b border-[#F0F7F4] last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#0A6E4F]/15 flex items-center justify-center text-xs font-bold text-[#0A6E4F]">
                            {patient.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#0F1C17]">{patient.name}</p>
                            <p className="text-xs text-[#4A5E55]">{patient.id} · {patient.condition}</p>
                          </div>
                        </div>
                        <span className="text-xs text-[#4A5E55]">{patient.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Faster Care, Better Decisions */}
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
                Faster Care, Better Decisions
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto mb-8">
                When healthcare providers have immediate access to patient information, they can make more informed clinical decisions and reduce administrative delays.
              </p>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                From registration and triage to consultation and billing, patient information remains accessible throughout the care journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Secure and Controlled Access */}
        <section className="py-16 md:py-24 bg-white">
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
                  Data Security
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Secure and Controlled Access
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                  Patient information is sensitive and must be protected.
                </p>
                <p className="text-base text-[#4A5E55] leading-relaxed">
                  HealthLattice helps clinics manage access to records through user accounts, permissions, and secure digital storage. Authorized staff can access the information they need while maintaining patient confidentiality.
                </p>
              </div>
              <div className="lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <FeatureCard
                    icon={<Shield size={20} className="text-[#0A6E4F]" />}
                    title="User Permissions"
                    description="Control who can view, edit, or manage patient records based on role and responsibility."
                  />
                  <FeatureCard
                    icon={<CheckCircle size={20} className="text-[#0A6E4F]" />}
                    title="Secure Storage"
                    description="Records are stored with industry-standard encryption and regular backup protocols."
                  />
                  <FeatureCard
                    icon={<Search size={20} className="text-[#0A6E4F]" />}
                    title="Audit Trail"
                    description="Track every access and modification to ensure accountability and compliance."
                  />
                  <FeatureCard
                    icon={<FileText size={20} className="text-[#0A6E4F]" />}
                    title="HIPAA-Aligned"
                    description="Built with privacy and compliance standards in mind from the ground up."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Designed for Modern Clinics */}
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
                Designed for Modern Clinics
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Whether you are transitioning from paper records or looking to improve an existing workflow, HealthLattice helps healthcare organizations move toward a more efficient and organized digital environment.
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
                <span className="text-sm font-semibold text-white/90">Ready to Modernize?</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Ready to Modernize Your Patient Records?
              </h2>
              <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
                Book a free demonstration and see how HealthLattice can help your clinic reduce paperwork, improve accessibility, and streamline patient management.
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
