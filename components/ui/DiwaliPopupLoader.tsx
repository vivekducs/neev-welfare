"use client";

import dynamic from "next/dynamic";

const DiwaliPopup = dynamic(() => import("@/components/ui/DiwaliPopup"), { ssr: false });

export function DiwaliPopupLoader() {
  return <DiwaliPopup />;
}
