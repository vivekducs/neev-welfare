import React from "react";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { CommunityEvent } from "@/lib/data";

interface EventCardProps {
  event: CommunityEvent;
  onRsvp: (event: CommunityEvent) => void;
}

export function EventCard({ event, onRsvp }: EventCardProps) {
  return (
    <article className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-[#00873e] uppercase bg-emerald-50 border border-emerald-200/60">
            {event.badge}
          </span>
          <span className="text-xs font-semibold text-slate-400">
            Upcoming Drive
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-[#001c37] font-heading mb-3 group-hover:text-[#00873e] transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 text-xs text-slate-600 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00873e] shrink-0" />
            <span className="font-semibold text-slate-700">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00873e] shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00873e] shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onRsvp(event)}
        className="w-full py-2.5 px-4 rounded-xl border-2 border-[#00873e] text-[#00873e] hover:bg-[#00873e] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5"
      >
        <span>REGISTER AS VOLUNTEER</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </article>
  );
}
