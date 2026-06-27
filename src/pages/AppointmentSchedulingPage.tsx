import { motion } from 'framer-motion';
import { Calendar, Bell, Clock, Users, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 card-shadow border border-[#0A6E4F]/10 hover:border-[#0A6E4F]/25 transition-all duration-300">
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

export default function AppointmentSchedulingPage() {
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
                <Calendar size={18} />
                <span className="text-sm font-semibold">Smart Scheduling</span>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Appointment Scheduling &amp; Patient Reminders
              </h1>
              <p className="text-lg sm:text-xl text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Fill Your Calendar. Reduce Missed Appointments.
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
                Managing Appointments Shouldn&apos;t Be Hard
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Managing appointments shouldn&apos;t require endless phone calls, paper diaries, or manual follow-ups. HealthLattice helps clinics organize appointments, coordinate provider schedules, and keep patients informed through automated reminders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Smarter Appointment Management */}
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
                    Smarter Scheduling
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                    style={{ fontFamily: 'Fraunces, serif' }}
                  >
                    Smarter Appointment Management
                  </h2>
                  <p className="text-base text-[#4A5E55] leading-relaxed mb-4">
                    Front-desk teams can schedule appointments quickly while maintaining visibility across clinicians and consultation rooms.
                  </p>
                  <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                    With HealthLattice, clinics can:
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      { icon: <Calendar size={18} />, text: 'Schedule appointments digitally' },
                      { icon: <Clock size={18} />, text: 'View provider availability in real time' },
                      { icon: <CheckCircle size={18} />, text: 'Manage daily clinic schedules from a centralized calendar' },
                      { icon: <Users size={18} />, text: 'Reduce scheduling conflicts' },
                      { icon: <Bell size={18} />, text: 'Track upcoming patient visits' },
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
                        Week of May 12, 2026
                      </h4>
                      <div className="flex items-center gap-1.5 bg-[#F0F7F4] rounded-full px-3 py-1.5">
                        <Bell size={12} className="text-[#0A6E4F]" />
                        <span className="text-xs text-[#0A6E4F] font-medium">Reminders On</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, di) => {
                        const appointments = [
                          { day: 0, time: '9am', name: 'A. Mensah', type: 'Check-up', color: '#0A6E4F' },
                          { day: 0, time: '11am', name: 'K. Owusu', type: 'Follow-up', color: '#12A274' },
                          { day: 1, time: '10am', name: 'E. Boateng', type: 'Consult', color: '#0A6E4F' },
                          { day: 2, time: '9am', name: 'Y. Asante', type: 'Lab', color: '#F4A623' },
                          { day: 2, time: '2pm', name: 'A. Darko', type: 'Check-up', color: '#12A274' },
                          { day: 3, time: '11am', name: 'K. Acheam', type: 'Surgery', color: '#054D37' },
                          { day: 4, time: '3pm', name: 'F. Adjei', type: 'Annual', color: '#0A6E4F' },
                        ];
                        return (
                          <div key={day}>
                            <p className="text-xs font-semibold text-[#4A5E55] text-center mb-2">{day}</p>
                            <div className="flex flex-col gap-1.5">
                              {appointments
                                .filter((a) => a.day === di)
                                .map((apt) => (
                                  <div
                                    key={`${apt.day}-${apt.time}`}
                                    className="rounded-lg p-1.5 text-white"
                                    style={{ background: apt.color }}
                                  >
                                    <p className="text-[10px] font-bold">{apt.time}</p>
                                    <p className="text-[10px] opacity-90 truncate">{apt.name}</p>
                                    <p className="text-[9px] opacity-75">{apt.type}</p>
                                  </div>
                                ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#F0F7F4] flex items-center justify-between">
                      <span className="text-xs text-[#4A5E55]">7 appointments this week</span>
                      <span className="text-xs font-semibold text-[#0A6E4F]">0 no-shows ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Automated Reminders */}
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
                  Automated Reminders
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Automated Patient Reminders
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed mb-4">
                  Missed appointments affect patient care and clinic productivity. HealthLattice supports automated appointment reminders through SMS and WhatsApp, helping patients remember upcoming visits and arrive on time.
                </p>
                <p className="text-base text-[#4A5E55] leading-relaxed mb-6">Benefits include:</p>
                <ul className="flex flex-col gap-4">
                  {[
                    { icon: <Bell size={18} />, text: 'Fewer forgotten appointments' },
                    { icon: <MessageSquare size={18} />, text: 'Improved patient communication' },
                    { icon: <CheckCircle size={18} />, text: 'Reduced administrative follow-up' },
                    { icon: <Calendar size={18} />, text: 'Better clinic utilization' },
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
                    icon={<MessageSquare size={20} className="text-[#0A6E4F]" />}
                    title="SMS Reminders"
                    description="Patients receive automatic SMS notifications before their scheduled appointment."
                  />
                  <FeatureCard
                    icon={<Bell size={20} className="text-[#0A6E4F]" />}
                    title="WhatsApp Alerts"
                    description="Reach patients on WhatsApp — the channel they already use every day."
                  />
                  <FeatureCard
                    icon={<Clock size={20} className="text-[#0A6E4F]" />}
                    title="Timely Follow-ups"
                    description="Schedule reminders at the right intervals to maximize attendance rates."
                  />
                  <FeatureCard
                    icon={<CheckCircle size={20} className="text-[#0A6E4F]" />}
                    title="Confirmation Tracking"
                    description="Know in advance which patients have confirmed or need a follow-up call."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Real-Time Visibility */}
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
                  Real-Time Visibility
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Real-Time Visibility Across Providers
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto mb-4">
                  Whether your clinic has one practitioner or multiple providers, HealthLattice helps staff see appointment availability instantly.
                </p>
                <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                  This makes it easier to:
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Clock size={20} />, title: 'Find Open Time Slots', description: 'Instantly see which providers have availability without back-and-forth communication.' },
                  { icon: <Users size={20} />, title: 'Balance Provider Workloads', description: 'Distribute appointments evenly so no provider is overwhelmed while others are idle.' },
                  { icon: <Calendar size={20} />, title: 'Coordinate Patient Bookings', description: 'Book patients with the right provider at the right time from a single view.' },
                  { icon: <CheckCircle size={20} />, title: 'Improve Front-Desk Efficiency', description: 'Spend less time on scheduling coordination and more time on patient care.' },
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

        {/* Built for Busy Clinics */}
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
                Built for Busy Clinics
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto mb-4">
                As patient volumes increase, manual scheduling becomes harder to manage.
              </p>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                HealthLattice gives clinics the tools needed to organize appointments, improve communication, and create a smoother experience for both patients and staff.
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
                <span className="text-sm font-semibold text-white/90">Ready to Improve Appointment Management?</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Ready to Improve Appointment Management?
              </h2>
              <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
                Book a free demonstration and discover how HealthLattice can help your clinic streamline scheduling and improve patient engagement.
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
