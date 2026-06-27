import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Calendar, CreditCard, BarChart3, Search, Bell, CheckCircle } from 'lucide-react';

function PatientRecordMockup() {
  return (
    <div className="bg-white rounded-2xl card-shadow p-5 w-full">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#F0F7F4]">
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
          className="flex items-center justify-between py-2.5 border-b border-[#F0F7F4] last:border-0 hover:bg-[#F0F7F4] rounded-lg px-2 -mx-2 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0A6E4F]/15 flex items-center justify-center text-xs font-bold text-[#0A6E4F]">
              {patient.name.split(' ').map(n => n[0]).join('')}
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
  );
}

function CalendarMockup() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const appointments = [
    { day: 0, time: '9am', name: 'A. Mensah', type: 'Check-up', color: '#0A6E4F' },
    { day: 0, time: '11am', name: 'K. Owusu', type: 'Follow-up', color: '#12A274' },
    { day: 1, time: '10am', name: 'E. Boateng', type: 'Consultation', color: '#0A6E4F' },
    { day: 2, time: '9am', name: 'Y. Asante', type: 'Lab Results', color: '#F4A623' },
    { day: 2, time: '2pm', name: 'A. Darko', type: 'Check-up', color: '#12A274' },
    { day: 3, time: '11am', name: 'K. Acheam', type: 'Surgery Prep', color: '#054D37' },
    { day: 4, time: '3pm', name: 'F. Adjei', type: 'Annual', color: '#0A6E4F' },
  ];

  return (
    <div className="bg-white rounded-2xl card-shadow p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-[#0F1C17]" style={{ fontFamily: 'Fraunces, serif' }}>
          Week of May 12, 2026
        </h4>
        <div className="flex items-center gap-1.5 bg-[#F0F7F4] rounded-full px-3 py-1.5">
          <Bell size={12} className="text-[#0A6E4F]" />
          <span className="text-xs text-[#0A6E4F] font-medium">Reminders On</span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {days.map((day, di) => (
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
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-[#F0F7F4] flex items-center justify-between">
        <span className="text-xs text-[#4A5E55]">7 appointments this week</span>
        <span className="text-xs font-semibold text-[#0A6E4F]">0 no-shows ✓</span>
      </div>
    </div>
  );
}

function BillingMockup() {
  return (
    <div className="bg-white rounded-2xl card-shadow p-5 w-full">
      <div className="flex items-center justify-between mb-4">
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
              {claim.name.split(' ').map(n => n[0]).join('')}
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
      <div className="mt-3 bg-[#0A6E4F] rounded-xl p-3 flex items-center justify-between">
        <span className="text-white text-xs font-medium">Auto-submit pending claims</span>
        <div className="flex items-center gap-1.5">
          <CheckCircle size={14} className="text-[#F4A623]" />
          <span className="text-[#F4A623] text-xs font-bold">Enabled</span>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const kpis = [
    { label: 'Patients Today', value: '84', change: '+12%', up: true },
    { label: 'Revenue (MTD)', value: 'GH₵48K', change: '+8%', up: true },
    { label: 'Avg Wait Time', value: '12min', change: '-4min', up: true },
    { label: 'Bed Occupancy', value: '73%', change: '+3%', up: false },
  ];
  const bars = [62, 78, 55, 90, 84, 70, 88, 65, 94, 80, 72, 86];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="bg-white rounded-2xl card-shadow p-6 w-full">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-base font-semibold text-[#0F1C17]" style={{ fontFamily: 'Fraunces, serif' }}>
          Clinic Performance Dashboard
        </h4>
        <span className="text-xs text-[#4A5E55] bg-[#F0F7F4] px-3 py-1.5 rounded-full">Live · Updated now</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-[#F0F7F4] rounded-xl p-3">
            <p className="text-xs text-[#4A5E55] mb-1">{kpi.label}</p>
            <p
              className="text-lg font-bold text-[#054D37] font-mono-data"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {kpi.value}
            </p>
            <p className={`text-xs font-semibold mt-0.5 ${kpi.up ? 'text-[#38A169]' : 'text-[#4A5E55]'}`}>
              {kpi.change}
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-end justify-between gap-1 h-16">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div
                className="w-full rounded-sm transition-all duration-500"
                style={{
                  height: `${h}%`,
                  background: i === 4 ? '#0A6E4F' : i === 11 ? '#F4A623' : '#D1EDE5',
                }}
              />
              <span className="text-[9px] text-[#4A5E55]">{months[i].slice(0, 1)}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#4A5E55] mt-1">Monthly patient volume — FY2026</p>
      </div>
    </div>
  );
}

interface Feature {
  id: string;
  icon: React.ReactNode;
  badge: string;
  headline: string;
  body: string;
  visual: React.ReactNode;
  flip: boolean;
}

const features: Feature[] = [
  {
    id: 'records',
    icon: <FileText size={22} />,
    badge: 'Patient Records',
    headline: 'Every Patient File, Instantly at Your Fingertips',
    body: 'Search, retrieve, and update patient records in seconds. No more filing cabinets. No more lost folders. Fully encrypted and HIPAA-aligned for complete peace of mind.',
    visual: <PatientRecordMockup />,
    flip: false,
  },
  {
    id: 'scheduling',
    icon: <Calendar size={22} />,
    badge: 'Smart Scheduling',
    headline: 'Fill Your Calendar. Reduce No-Shows by 60%.',
    body: 'Automated SMS and WhatsApp reminders. Drag-and-drop scheduling. Real-time availability across all your doctors — your front desk will thank you.',
    visual: <CalendarMockup />,
    flip: true,
  },
  {
    id: 'billing',
    icon: <CreditCard size={22} />,
    badge: 'Billing & Insurance',
    headline: 'Get Paid Faster. Every Time.',
    body: 'Auto-generate invoices, process NHIS claims, and track outstanding payments — all from one dashboard. Stop chasing revenue, start capturing it.',
    visual: <BillingMockup />,
    flip: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
            Platform Features
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#054D37] leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Everything your clinic needs. Nothing it doesn&apos;t.
          </h2>
        </motion.div>

        {/* Alternating Feature Rows */}
        <div className="flex flex-col gap-24">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${feature.flip ? 'direction-rtl' : ''}`}
            >
              <div className={feature.flip ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 bg-[#F0F7F4] text-[#0A6E4F] rounded-full px-4 py-2 mb-5">
                  {feature.icon}
                  <span className="text-sm font-semibold">{feature.badge}</span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#054D37] mb-4 leading-tight"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {feature.headline}
                </h3>
                <p className="text-base text-[#4A5E55] leading-relaxed mb-6">{feature.body}</p>
                {feature.id === 'records' ? (
                  <Link
                    to="/features/patient-records"
                    className="inline-flex items-center gap-2 text-[#0A6E4F] font-semibold text-sm hover:text-[#054D37] hover:gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded px-1"
                  >
                    Learn more →
                  </Link>
                ) : feature.id === 'scheduling' ? (
                  <Link
                    to="/features/appointment-scheduling"
                    className="inline-flex items-center gap-2 text-[#0A6E4F] font-semibold text-sm hover:text-[#054D37] hover:gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded px-1"
                  >
                    Learn more →
                  </Link>
                ) : (
                  <Link
                    to="/features/billing"
                    className="inline-flex items-center gap-2 text-[#0A6E4F] font-semibold text-sm hover:text-[#054D37] hover:gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] rounded px-1"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
              <div className={`${feature.flip ? 'lg:order-1' : ''} w-full`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  {feature.visual}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Full-width Feature */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-24 rounded-2xl bg-[#F0F7F4] p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-[#0A6E4F] rounded-full px-4 py-2 mb-5 card-shadow">
                <BarChart3 size={20} />
                <span className="text-sm font-semibold">Analytics Dashboard</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#054D37] mb-4 leading-tight"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Run Your Clinic with Data, Not Guesswork
              </h3>
              <p className="text-base text-[#4A5E55] leading-relaxed mb-6">
                Real-time metrics on patient flow, revenue trends, and staff performance. Spot
                bottlenecks before they become crises. Make confident decisions backed by your own data.
              </p>
              <Link
                to="/features/analytics"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A6E4F] text-white text-sm font-semibold hover:bg-[#054D37] hover:scale-105 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2"
              >
                Explore Analytics
              </Link>
            </div>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
              <AnalyticsMockup />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
