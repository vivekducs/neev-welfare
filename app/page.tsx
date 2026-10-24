import React, { Suspense } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionPillarsSection } from "@/components/sections/MissionPillarsSection";
import { InterventionsGridSection } from "@/components/sections/InterventionsGridSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { DonationSection } from "@/components/sections/DonationSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { CsrSection } from "@/components/sections/CsrSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="page-entrance">
      <HeroSection />
      <MissionPillarsSection />
      <InterventionsGridSection />
      <ImpactSection />
      <LeadershipSection />
      <Suspense fallback={<div className="py-12 text-center">Loading Donation Portal...</div>}>
        <DonationSection />
      </Suspense>
      <NewsSection />
      <VolunteerSection />
      <CsrSection />
      <ContactSection />
    </div>
  );
}
