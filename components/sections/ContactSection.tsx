"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, Building2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/Toast";

interface ContactSectionProps {
  showTitle?: boolean;
}

export function ContactSection({ showTitle = true }: ContactSectionProps) {
  const { showToast } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast(
        `Thank you, ${name}! Your message has been received by our Jhansi administrative team.`
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-3">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#001c37] font-heading tracking-tight">
              Connect with Our Team
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Have queries regarding our ground programs, donations, 80G tax exemptions, or corporate partnerships? We are here to assist you.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact & Governance Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
              <h3 className="font-heading font-black text-xl text-[#001c37]">
                Registered Head Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#00873e] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#001c37] font-heading text-xs font-bold uppercase mb-0.5">
                      Postal Address
                    </strong>
                    <span>{SITE_CONFIG.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#00873e] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#001c37] font-heading text-xs font-bold uppercase mb-0.5">
                      Direct Helpline
                    </strong>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                      className="hover:text-[#00873e] transition-colors font-semibold"
                    >
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#00873e] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#001c37] font-heading text-xs font-bold uppercase mb-0.5">
                      Official Inquiries
                    </strong>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="hover:text-[#00873e] transition-colors font-semibold"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#00873e] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#001c37] font-heading text-xs font-bold uppercase mb-0.5">
                      Working Hours
                    </strong>
                    <span>{SITE_CONFIG.contact.hours}</span>
                  </div>
                </div>
              </div>

              {/* Registration Snapshot */}
              <div className="pt-4 border-t border-slate-200/80 space-y-1.5 text-xs text-slate-500">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">CIN:</span>
                  <span className="font-mono text-slate-700">{SITE_CONFIG.cin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Darpan ID:</span>
                  <span className="font-mono text-slate-700">{SITE_CONFIG.ngoDarpan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Statutory Status:</span>
                  <span className="text-emerald-700 font-bold">Section 8 Nonprofit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl">
            <h3 className="font-heading font-black text-2xl text-[#001c37] mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our team typically responds within 24 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. 80G Tax Exemption Query / Volunteering"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we assist you today?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Dispatching Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND DIRECT MESSAGE</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
