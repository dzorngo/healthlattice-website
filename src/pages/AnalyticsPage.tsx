import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Package,
  Users,
  FileText,
  Monitor,
  ArrowRight,
  DollarSign,
  AlertTriangle,
  Activity,
} from 'lucide-react';
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

function RevenueDashboardMockup() {
  const weeks = [
    { label: 'W1', val: 68 },
    { label: 'W2', val: 82 },
    { label: 'W3', val: 75 },
    { label: 'W4', val: 91 },
  ];
  return (
    <div className="bg-white rounded-2xl card-shadow p-6 border border-[#0A6E4F]/10">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-sm font-semibold text-[#0F1C17]" style={{ fontFamily: 'Fraunces, serif' }}>
          Revenue Overview — June 2026
        </h4>
        <span className="text-xs text-[#38A169] bg-[#F0FFF4] px-2.5 py-1 rounded-full font-bold">+14% MoM</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'Daily', value: 'GH₵ 3,240' },
          { label: 'MTD', value: 'GH₵ 48,600' },
          { label: 'Outstanding', value: 'GH₵ 6,800' },
        ].map((item) => (
          <div key={item.label} className="bg-[#F0F7F4] rounded-xl p-3 text-center">
            <p className="text-[10px] text-[#4A5E55] mb-1">{item.label}</p>
            <p className="text-sm font-bold text-[#054D37]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-3 h-20">
        {weeks.map((w) => (
          <div key={w.label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md bg-[#0A6E4F]"
              style={{ height: `${w.val}%`, opacity: 0.7 + (w.val / 400) }}
            />
            <span className="text-[10px] text-[#4A5E55]">{w.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#4A5E55] mt-2">Weekly revenue — June 2026</p>
    </div>
  );
}

function InventoryMockup() {
  const items = [
    { name: 'Amoxicillin 500mg', stock: 240, status: 'OK', color: '#38A169' },
    { name: 'Paracetamol 1g', stock: 18, status: 'Low', color: '#F4A623' },
    { name: 'IV Cannula (18G)', stock: 5, status: 'Critical', color: '#E53E3E' },
    { name: 'Metformin 850mg', stock: 120, status: 'OK', color: '#38A169' },
  ];
  return (
    <div className="bg-white rounded-2xl card-shadow p-6 border border-[#0A6E4F]/10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-[#0F1C17]" style={{ fontFamily: 'Fraunces, serif' }}>
          Inventory Status
        </h4>
        <div className="flex items-center gap-1.5">
          <AlertTriangle size={13} className="text-[#F4A623]" />
          <span className="text-xs font-semibold text-[#F4A623]">2 alerts</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.name} className="flex items-center justify-between py-2 border-b border-[#F0F7F4] last:border-0">
            <div>
              <p className="text-sm font-medium text-[#0F1C17]">{item.name}</p>
              <p className="text-xs text-[#4A5E55]">{item.stock} units remaining</p>
            </div>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ color: item.color, background: item.color + '18' }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PatientActivityMockup() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const visits = [58, 72, 64, 88, 79, 95];
  const max = Math.max(...visits);
  return (
    <div className="bg-white rounded-2xl card-shadow p-6 border border-[#0A6E4F]/10">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-sm font-semibold text-[#0F1C17]" style={{ fontFamily: 'Fraunces, serif' }}>
          Patient Activity — H1 2026
        </h4>
        <span className="text-xs text-[#4A5E55] bg-[#F0F7F4] px-3 py-1 rounded-full">Visits / mo</span>
      </div>
      <div className="flex items-end gap-2 h-20 mb-2">
        {visits.map((v, i) => (
          <div key={months[i]} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${(v / max) * 100}%`,
                background: i === visits.length - 1 ? '#0A6E4F' : '#D1EDE5',
              }}
            />
            <span className="text-[9px] text-[#4A5E55]">{months[i]}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-3 pt-3 border-t border-[#F0F7F4]">
        <div className="text-center">
          <p className="text-xs text-[#4A5E55]">New Patients</p>
          <p className="text-sm font-bold text-[#054D37]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>+38</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-[#4A5E55]">Avg Visits/Week</p>
          <p className="text-sm font-bold text-[#054D37]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>21</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-[#4A5E55]">Growth</p>
          <p className="text-sm font-bold text-[#38A169]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>+64%</p>
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
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
                <BarChart3 size={18} />
                <span className="text-sm font-semibold">Analytics &amp; Business Intelligence</span>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Turn Clinic Data Into Better Decisions
              </h1>
              <p className="text-lg sm:text-xl text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Running a successful clinic requires more than delivering excellent care. HealthLattice provides powerful dashboards and reporting tools that transform everyday clinic data into actionable insights.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Monitor Revenue Performance */}
        <section className="py-16 md:py-24 bg-[#F0F7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                  Revenue Performance
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Monitor Revenue Performance
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                  Gain a clear view of your clinic's financial health. Make decisions based on real numbers rather than assumptions.
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    { icon: <TrendingUp size={16} />, text: 'Daily, weekly, and monthly revenue' },
                    { icon: <BarChart3 size={16} />, text: 'Service-based income trends' },
                    { icon: <DollarSign size={16} />, text: 'Outstanding balances' },
                    { icon: <FileText size={16} />, text: 'Payment collections' },
                    { icon: <Activity size={16} />, text: 'Billing performance' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <span className="text-[#0A6E4F]">{item.icon}</span>
                      </div>
                      <span className="text-sm text-[#4A5E55] font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                <RevenueDashboardMockup />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Inventory & Stock Visibility */}
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
                  Inventory & Stock
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Inventory &amp; Stock Visibility
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                  Avoid stock shortages and reduce waste. Maintain better control over supplies and purchasing decisions.
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    { icon: <Package size={16} />, text: 'Medication inventory' },
                    { icon: <Package size={16} />, text: 'Pharmacy stock levels' },
                    { icon: <AlertTriangle size={16} />, text: 'Low-stock alerts' },
                    { icon: <Activity size={16} />, text: 'Inventory movement' },
                    { icon: <TrendingUp size={16} />, text: 'Product utilization trends' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#F0F7F4] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#0A6E4F]">{item.icon}</span>
                      </div>
                      <span className="text-sm text-[#4A5E55] font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1">
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <InventoryMockup />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Understand Patient Activity */}
        <section className="py-16 md:py-24 bg-[#F0F7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                  Patient Activity
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Understand Patient Activity
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                  Measure how patients interact with your clinic. Identify growth opportunities and operational bottlenecks.
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    { icon: <Users size={16} />, text: 'Patient visit volumes' },
                    { icon: <Users size={16} />, text: 'New patient registrations' },
                    { icon: <Activity size={16} />, text: 'Appointment trends' },
                    { icon: <BarChart3 size={16} />, text: 'Provider workload distribution' },
                    { icon: <TrendingUp size={16} />, text: 'Patient flow performance' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <span className="text-[#0A6E4F]">{item.icon}</span>
                      </div>
                      <span className="text-sm text-[#4A5E55] font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                <PatientActivityMockup />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Financial & Operational Reporting */}
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
                  Reporting
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-4"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Financial &amp; Operational Reporting
                </h2>
                <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                  Generate reports that support better management and accountability. Access the information you need to make informed business decisions.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <TrendingUp size={20} />, title: 'Revenue Trends', description: 'Track how income evolves over time across services and departments.' },
                  { icon: <FileText size={20} />, title: 'Billing Performance', description: 'Monitor claims, collections, and outstanding balances at a glance.' },
                  { icon: <BarChart3 size={20} />, title: 'Service Utilization', description: 'Understand which services drive the most volume and revenue.' },
                  { icon: <Activity size={20} />, title: 'Department Activity', description: 'Compare performance across departments and care units.' },
                  { icon: <Monitor size={20} />, title: 'Operational Efficiency', description: 'Identify workflow bottlenecks and reduce administrative overhead.' },
                  { icon: <Users size={20} />, title: 'Staff Workload', description: 'Analyze provider appointment loads to balance capacity effectively.' },
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

        {/* Real-Time Dashboards */}
        <section className="py-16 md:py-24 bg-[#F0F7F4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
                Live Dashboards
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Real-Time Dashboards
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Instead of waiting for manual reports, view important metrics through intuitive dashboards. See key indicators at a glance — revenue summaries, patient activity, inventory status, appointment statistics, and clinic performance metrics.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { icon: <DollarSign size={22} />, label: 'Revenue Summaries' },
                { icon: <Users size={22} />, label: 'Patient Activity' },
                { icon: <Package size={22} />, label: 'Inventory Status' },
                { icon: <Activity size={22} />, label: 'Appointment Stats' },
                { icon: <BarChart3 size={22} />, label: 'Clinic Metrics' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 card-shadow border border-[#0A6E4F]/10"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F0F7F4] flex items-center justify-center text-[#0A6E4F]">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold text-[#054D37]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for Data-Driven Healthcare */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#054D37] leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Built for Data-Driven Healthcare
              </h2>
              <p className="text-base text-[#4A5E55] leading-relaxed max-w-2xl mx-auto">
                Whether you manage a private clinic, diagnostic center, specialist practice, or growing healthcare facility, HealthLattice helps you understand what is happening inside your organization in real time.
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
                <span className="text-sm font-semibold text-white/90">Ready to Gain Better Visibility Into Your Clinic?</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Ready to Gain Better Visibility Into Your Clinic?
              </h2>
              <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
                Book a free demonstration and discover how HealthLattice can help you track performance, improve decision-making, and operate more efficiently.
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
