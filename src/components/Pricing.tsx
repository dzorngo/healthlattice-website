import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, Lock, MapPin } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: string | null;
  annualPrice: string | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: '0',
    annualPrice: '0',
    description: 'Perfect for small clinics just getting started with digital records.',
    features: [
      'Up to 2 doctors',
      '500 patient records',
      'Basic scheduling',
      'Email support',
      'Standard reports',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: '499',
    annualPrice: '399',
    description: 'The complete solution for growing clinics serious about efficiency.',
    features: [
      'Up to 10 doctors',
      'Unlimited records',
      'NHIS billing integration',
      'WhatsApp & SMS reminders',
      'Priority support',
      'Advanced analytics',
      'Custom branding',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'Tailored solutions for multi-location hospitals and health systems.',
    features: [
      'Unlimited doctors & locations',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee (99.9%)',
      'On-premise option',
      'Custom compliance support',
      'White-label available',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

function PriceDisplay({ tier, isAnnual }: { tier: PricingTier; isAnnual: boolean }) {
  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

  if (price === null) {
    return (
      <div className="mb-6">
        <span
          className="text-3xl font-bold text-[#054D37]"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          Custom
        </span>
        <p className="text-sm text-[#4A5E55] mt-1">Tailored to your needs</p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-1">
        {price !== '0' && (
          <span className="text-lg font-semibold text-[#4A5E55]">GH₵</span>
        )}
        <AnimatePresence mode="wait">
          <motion.span
            key={`${tier.id}-${price}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="text-4xl font-bold text-[#054D37] font-mono-data"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {price === '0' ? 'Free' : price}
          </motion.span>
        </AnimatePresence>
        {price !== '0' && (
          <span className="text-sm text-[#4A5E55] ml-1">/month</span>
        )}
      </div>
      {isAnnual && price !== '0' && (
        <p className="text-xs text-[#0A6E4F] font-semibold mt-1">
          Billed annually — save GH₵ {(parseInt(tier.monthlyPrice!) - parseInt(price)) * 12}/yr
        </p>
      )}
      {!isAnnual && price === '0' && (
        <p className="text-sm text-[#4A5E55] mt-1">Forever free</p>
      )}
    </div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#F0F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0A6E4F] mb-4">
            Simple, Transparent Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#054D37] leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Plans that grow with your clinic
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-[#0F1C17]' : 'text-[#4A5E55]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2 ${
                isAnnual ? 'bg-[#0A6E4F]' : 'bg-[#4A5E55]/30'
              }`}
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle annual pricing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${isAnnual ? 'text-[#0F1C17]' : 'text-[#4A5E55]'}`}>
                Annual
              </span>
              <AnimatePresence>
                {isAnnual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-xs font-bold bg-[#F4A623] text-[#0F1C17] px-2.5 py-1 rounded-full"
                  >
                    Save 20%
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative rounded-2xl p-7 transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-[#054D37] border-2 border-[#0A6E4F] scale-105 shadow-[0_8px_48px_rgba(10,110,79,0.25)]'
                  : 'bg-white card-shadow border border-[#0A6E4F]/10 hover:border-[#0A6E4F]/30 hover:card-shadow-lg'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F4A623] text-[#0F1C17] text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <p
                className={`text-sm font-semibold uppercase tracking-[0.12em] mb-2 ${
                  tier.highlighted ? 'text-[#12A274]' : 'text-[#0A6E4F]'
                }`}
              >
                {tier.name}
              </p>

              {/* Price */}
              <div className={tier.highlighted ? '[&_span]:text-white [&_p]:text-[#12A274]' : ''}>
                <PriceDisplay tier={tier} isAnnual={isAnnual} />
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 ${tier.highlighted ? 'text-[#8aada0]' : 'text-[#4A5E55]'}`}>
                {tier.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => console.log(`CTA clicked: ${tier.cta} - ${tier.name}`)}
                className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-6 ${
                  tier.highlighted
                    ? 'bg-[#12A274] text-white hover:bg-[#0A6E4F] focus:ring-[#12A274] shadow-lg'
                    : tier.id === 'enterprise'
                    ? 'bg-transparent border-2 border-[#0A6E4F] text-[#0A6E4F] hover:bg-[#0A6E4F] hover:text-white focus:ring-[#0A6E4F]'
                    : 'bg-[#F0F7F4] text-[#0A6E4F] hover:bg-[#0A6E4F] hover:text-white focus:ring-[#0A6E4F]'
                }`}
              >
                {tier.cta}
              </button>

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      tier.highlighted ? 'bg-[#12A274]/20' : 'bg-[#0A6E4F]/10'
                    }`}>
                      <Check size={10} className={tier.highlighted ? 'text-[#12A274]' : 'text-[#0A6E4F]'} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${tier.highlighted ? 'text-[#e8f5f0]' : 'text-[#4A5E55]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Free Trial Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-[#4A5E55] mb-6">
            All plans include a <strong className="text-[#0F1C17]">30-day free trial</strong>. No credit card required.
          </p>

          {/* Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: <Lock size={14} />, label: 'SSL Encrypted' },
              { icon: <Shield size={14} />, label: 'HIPAA-Aligned' },
              { icon: <MapPin size={14} />, label: 'Ghana Data Residency 🇬🇭' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-white border border-[#0A6E4F]/15 rounded-full px-4 py-2 card-shadow"
              >
                <span className="text-[#0A6E4F]">{badge.icon}</span>
                <span className="text-xs font-medium text-[#4A5E55]">{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
