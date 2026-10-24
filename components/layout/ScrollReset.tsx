"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ScrollReset() {
  const pathname = usePathname();
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    // 1. Immediately force instant scroll to top on every route change with zero animation
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // 2. Trigger quick top-line progress animation for tactile feedback
    setNavigating(true);
    const timer = setTimeout(() => {
      setNavigating(false);
    }, 280);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!navigating) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-gradient-to-r from-[#00873e] via-[#10b981] to-[#006830] shadow-[0_1px_8px_rgba(0,135,62,0.4)] transition-all duration-300 animate-in fade-in"
    />
  );
}
