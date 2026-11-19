"use client";

import React, { useState } from "react";
import { Users, Mail, AlertCircle, CheckCircle2, HeartHandshake } from "lucide-react";
import { COMMUNITY_EVENTS, CommunityEvent } from "@/lib/data";
import { EventCard } from "@/components/cards/EventCard";
import { SITE_CONFIG } from "@/lib/constants";
import { useToast } from "@/components/ui/Toast";

const INTEREST_AREAS = [
  "Teaching & Digital Classroom Tutoring",
  "Medical Camps / Healthcare Support",
  "Tree Plantation & Clean Water",
  "Tech Literacy & Computer Training",
  "Women Skill Centers & Handcraft Mentoring",
  "Fundraising, Photography & Media Outreach",
];

interface VolunteerSectionProps {
  showTitle?: boolean;
}

export function VolunteerSection({ showTitle = true }: VolunteerSectionProps) {
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [interest, setInterest] = useState(INTEREST_AREAS[0]);

  const handleRsvp = (event: CommunityEvent) => {
    // Match event category to volunteer interest area
    const matched = INTEREST_AREAS.find((i) => i.includes(event.category)) || INTEREST_AREAS[0];
    setInterest(matched);

    const formEl = document.getElementById("volunteer-registration-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
      showToast(`Selected event: "${event.title}". Please submit your volunteer details below!`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoBody = encodeURIComponent(
      `Volunteer Application\n\nName: ${name}\nEmail: ${email}\nWhatsApp / Phone: ${phone}\nCity/State: ${city}\nArea of Interest: ${interest}`
    );
    const mailtoUrl = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
      `Volunteer Application - ${name}`
    )}&body=${mailtoBody}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100" id="volunteer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-bold uppercase tracking-wider mb-3">
              <span>JOIN THE MOVEMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#001c37] font-heading tracking-tight">
              Volunteer & Community Sprints
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Lend your skills, passion, and time to ground-level campaigns. Join our weekend drives or participate as a long-term mentor.
            </p>
          </div>
        )}

        {/* 1. Upcoming Volunteer Drives */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-black text-xl text-[#001c37]">
              Upcoming Ground Drives
            </h3>
            <span className="text-xs text-slate-500 font-semibold">
              Open to All Volunteers
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_EVENTS.map((event, idx) => (
              <EventCard key={idx} event={event} onRsvp={handleRsvp} />
            ))}
          </div>
        </div>

        {/* 2. Volunteer Registration Form Card */}
        <div
          id="volunteer-registration-form"
          className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#00873e] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-black text-2xl text-[#001c37]">
                Volunteer Application Form
              </h3>
              <p className="text-xs text-slate-500">
                Join our changemakers empowering villages in Bundelkhand
              </p>
            </div>
          </div>

          {/* Honest notice */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-5">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Online volunteer registration is not yet automated. Submitting below will open your email app with your application details ready to send to{" "}
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="font-bold underline text-[#00873e]">
                {SITE_CONFIG.contact.email}
              </a>
              . You can also reach us directly at{" "}
              <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, "")}`} className="font-bold underline text-[#001c37]">
                {SITE_CONFIG.contact.phoneDisplay}
              </a>
              .
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
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
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Current City / State *
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Jhansi, Kanpur, Lucknow"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Preferred Area of Contribution
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                {INTEREST_AREAS.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00873e] to-[#006830] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>OPEN EMAIL APP TO SUBMIT APPLICATION</span>
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Or email directly: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#00873e] font-semibold hover:underline">{SITE_CONFIG.contact.email}</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
