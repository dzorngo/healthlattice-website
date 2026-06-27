import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  clinicName: string;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', clinicName: '' });
  const [formspreeState, handleFormspreeSubmit] = useForm('xjgqvoyq');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleFormspreeSubmit(e);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', clinicName: '' });
    }, 400);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitted = formspreeState.succeeded;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0F1C17]/70 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-3xl shadow-[0_24px_80px_rgba(10,110,79,0.2)] w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Green top bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#0A6E4F] via-[#12A274] to-[#F4A623]" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F0F7F4] flex items-center justify-center text-[#4A5E55] hover:bg-[#0A6E4F] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F]"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="mb-7">
                        <span className="inline-flex items-center gap-1.5 bg-[#F0F7F4] text-[#0A6E4F] text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                          🎯 Live Demo — 30 Minutes
                        </span>
                        <h2
                          id="demo-modal-title"
                          className="text-2xl font-bold text-[#054D37]"
                          style={{ fontFamily: 'Fraunces, serif' }}
                        >
                          Book Your Live Demo
                        </h2>
                        <p className="text-sm text-[#4A5E55] mt-2 leading-relaxed">
                          A HealthLattice specialist will walk you through the platform tailored to your clinic&apos;s needs.
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {[
                          { name: 'name', label: 'Full Name', placeholder: 'Dr. Ama Owusu', type: 'text', required: true },
                          { name: 'email', label: 'Work Email', placeholder: 'you@clinic.com', type: 'email', required: true },
                          { name: 'phone', label: 'Phone / WhatsApp', placeholder: '+233 XX XXX XXXX', type: 'tel', required: true },
                          { name: 'clinicName', label: 'Clinic or Hospital Name', placeholder: 'e.g. Sunrise Medical Centre', type: 'text', required: true },
                        ].map((field) => (
                          <div key={field.name}>
                            <label
                              htmlFor={field.name}
                              className="block text-xs font-semibold text-[#4A5E55] uppercase tracking-widest mb-1.5"
                            >
                              {field.label}
                            </label>
                            <input
                              id={field.name}
                              name={field.name}
                              type={field.type}
                              placeholder={field.placeholder}
                              required={field.required}
                              value={form[field.name as keyof FormData]}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-[#0A6E4F]/20 bg-[#F0F7F4] text-[#0F1C17] placeholder-[#4A5E55]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:border-[#0A6E4F] transition-all duration-200"
                            />
                            <ValidationError
                              prefix={field.label}
                              field={field.name}
                              errors={formspreeState.errors}
                              className="text-xs text-red-600 mt-1"
                            />
                          </div>
                        ))}

                        <button
                          type="submit"
                          disabled={formspreeState.submitting}
                          className="w-full py-4 rounded-full bg-[#12A274] text-white text-base font-semibold hover:bg-[#0A6E4F] hover:scale-[1.02] hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F] focus:ring-offset-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {formspreeState.submitting ? 'Sending...' : 'Request Demo →'}
                        </button>

                        {formspreeState.errors && (
                          <p className="text-xs text-red-600 text-center">
                            Something went wrong. Please try again.
                          </p>
                        )}

                        <p className="text-xs text-[#4A5E55] text-center">
                          No commitment. We&apos;ll confirm within 24 hours. 🇬🇭
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="text-center py-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#F0F7F4] flex items-center justify-center mx-auto mb-5">
                        <CheckCircle size={32} className="text-[#0A6E4F]" />
                      </div>
                      <h3
                        className="text-2xl font-bold text-[#054D37] mb-3"
                        style={{ fontFamily: 'Fraunces, serif' }}
                      >
                        Request Received!
                      </h3>
                      <p className="text-sm text-[#4A5E55] leading-relaxed mb-6">
                        Thank you, <strong className="text-[#0F1C17]">{form.name}</strong>! Our team will
                        reach out to <strong className="text-[#0F1C17]">{form.email}</strong> within 24 hours
                        to confirm your demo time.
                      </p>

                      <div className="bg-[#F0F7F4] rounded-2xl p-5 mb-6 text-left">
                        <p className="text-sm font-semibold text-[#054D37] mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                          Need immediate assistance?
                        </p>
                        <div className="flex flex-col gap-2.5">
                          <a
                            href="tel:+233558497419"
                            className="flex items-center gap-2.5 text-sm text-[#4A5E55] hover:text-[#0A6E4F] transition-colors"
                          >
                            <Phone size={16} className="text-[#0A6E4F]" />
                            <span>055 849 7419</span>
                          </a>
                          <a
                            href="https://wa.me/233552139347"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 text-sm text-[#4A5E55] hover:text-[#0A6E4F] transition-colors"
                          >
                            <MessageCircle size={16} className="text-[#0A6E4F]" />
                            <span>WhatsApp: 055 213 9347</span>
                          </a>
                        </div>
                      </div>

                      <button
                        onClick={handleClose}
                        className="px-8 py-3 rounded-full bg-[#F0F7F4] text-[#0A6E4F] text-sm font-semibold hover:bg-[#0A6E4F] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A6E4F]"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
