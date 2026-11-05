"use client";

import React, { useEffect, useRef, useState } from "react";

// ── Fireworks canvas ────────────────────────────────────────────────────────

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  radius: number;
  decay: number;
  gravity: number;
};

type Rocket = {
  x: number;
  y: number;
  vy: number;
  targetY: number;
  color: string;
  trail: { x: number; y: number; alpha: number }[];
};

const COLORS = [
  "#ff4500", "#ff8c00", "#ffd700", "#ff69b4",
  "#00bfff", "#7fff00", "#ff6347", "#da70d6",
  "#00ced1", "#ff1493", "#adff2f", "#ff7f50",
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function explode(x: number, y: number, particles: Particle[]) {
  const count = Math.floor(randomBetween(60, 100));
  const color = randomColor();
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = randomBetween(1.5, 5);
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color,
      radius: randomBetween(2, 4),
      decay: randomBetween(0.012, 0.022),
      gravity: 0.06,
    });
  }
}

function FireworksCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particles = useRef<Particle[]>([]);
  const rockets = useRef<Rocket[]>([]);
  const frameCount = useRef(0);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    function launchRocket() {
      if (!canvas) return;
      const x = randomBetween(canvas.width * 0.1, canvas.width * 0.9);
      const targetY = randomBetween(canvas.height * 0.1, canvas.height * 0.45);
      rockets.current.push({
        x,
        y: canvas.height,
        vy: randomBetween(-14, -10),
        targetY,
        color: randomColor(),
        trail: [],
      });
    }

    function loop() {
      if (!ctx || !canvas) return;
      frameCount.current++;

      // Semi-transparent overlay for trail effect
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Launch rockets periodically
      if (frameCount.current % 28 === 0) launchRocket();

      // Update & draw rockets
      rockets.current = rockets.current.filter((r) => {
        r.trail.push({ x: r.x, y: r.y, alpha: 1 });
        if (r.trail.length > 12) r.trail.shift();

        r.y += r.vy;
        r.vy += 0.3; // slight gravity pull back

        // Draw trail
        r.trail.forEach((t, i) => {
          ctx.beginPath();
          ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,220,100,${(i / r.trail.length) * 0.8})`;
          ctx.fill();
          t.alpha -= 0.08;
        });

        // Draw rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();

        if (r.y <= r.targetY) {
          explode(r.x, r.y, particles.current);
          return false;
        }
        return true;
      });

      // Update & draw particles
      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.alpha -= p.decay;

        if (p.alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();

        return true;
      });

      animRef.current = requestAnimationFrame(loop);
    }

    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      particles.current = [];
      rockets.current = [];
      frameCount.current = 0;
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9998 }}
    />
  );
}

// ── Floating diyas / sparkles ─────────────────────────────────────────────

function FloatingDiyas() {
  const diyas = ["🪔", "✨", "🌟", "💥", "🎆", "🎇", "🌸", "🪔", "⭐", "🌼"];
  return (
    <>
      {diyas.map((d, i) => (
        <span
          key={i}
          className="absolute text-2xl sm:text-3xl select-none animate-bounce"
          style={{
            left: `${5 + (i * 9) % 90}%`,
            top: `${8 + (i * 13) % 30}%`,
            animationDelay: `${i * 0.18}s`,
            animationDuration: `${1.2 + (i % 4) * 0.3}s`,
            filter: "drop-shadow(0 0 6px rgba(255,200,0,0.9))",
          }}
        >
          {d}
        </span>
      ))}
    </>
  );
}

// ── Main popup ────────────────────────────────────────────────────────────

export default function DiwaliPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Show only once per session
    const seen = sessionStorage.getItem("diwali_popup_seen");
    if (!seen) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function handleClose() {
    setClosing(true);
    sessionStorage.setItem("diwali_popup_seen", "1");
    setTimeout(() => setVisible(false), 500);
  }

  if (!visible) return null;

  return (
    <>
      {/* Fireworks behind popup */}
      <FireworksCanvas active={visible} />

      {/* Backdrop */}
      <div
        className="fixed inset-0 flex items-center justify-center px-4"
        style={{
          zIndex: 9999,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(3px)",
          animation: closing ? "fadeOut 0.5s ease forwards" : "fadeIn 0.4s ease",
        }}
        onClick={handleClose}
      >
        {/* Card */}
        <div
          className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #1a0a00 0%, #3d1500 40%, #1a0a00 100%)",
            border: "2px solid rgba(255,180,0,0.5)",
            boxShadow: "0 0 60px rgba(255,140,0,0.4), 0 0 120px rgba(255,80,0,0.2)",
            animation: closing
              ? "popOut 0.4s cubic-bezier(0.16,1,0.3,1) forwards"
              : "popIn 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top glow strip */}
          <div
            className="h-1.5 w-full"
            style={{
              background: "linear-gradient(90deg, #ff4500, #ffd700, #ff8c00, #ffd700, #ff4500)",
            }}
          />

          {/* Floating diyas */}
          <div className="relative h-20 overflow-hidden">
            <FloatingDiyas />
          </div>

          {/* Main content */}
          <div className="px-6 pb-8 flex flex-col items-center text-center">
            {/* Big emoji burst */}
            <div
              className="text-6xl sm:text-7xl mb-3 select-none"
              style={{
                filter: "drop-shadow(0 0 16px rgba(255,200,0,1))",
                animation: "pulse 1.4s ease-in-out infinite",
              }}
            >
              🪔
            </div>

            {/* Greeting */}
            <h2
              className="font-heading font-black uppercase tracking-widest mb-1"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                background: "linear-gradient(135deg, #ffd700, #ff8c00, #ffd700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 0 12px rgba(255,180,0,0.6))",
              }}
            >
              Happy Diwali!
            </h2>

            <div
              className="font-heading font-bold mb-4"
              style={{
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                color: "rgba(255,220,120,0.9)",
                letterSpacing: "0.08em",
              }}
            >
              दीपावली की हार्दिक शुभकामनाएँ
            </div>

            {/* Message */}
            <p
              className="text-sm sm:text-base leading-relaxed mb-6 max-w-xs"
              style={{ color: "rgba(255,220,150,0.85)" }}
            >
              May this festival of lights bring joy, prosperity, and hope to every home.
              From all of us at{" "}
              <span style={{ color: "#ffd700", fontWeight: 700 }}>Neev Welfare Foundation</span>,
              wishing you a bright &amp; blessed Diwali! 🎆
            </p>

            {/* Row of diyas */}
            <div className="flex gap-2 mb-6 text-2xl select-none">
              {["🪔", "🪔", "🪔", "🪔", "🪔"].map((d, i) => (
                <span
                  key={i}
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    filter: "drop-shadow(0 0 8px rgba(255,180,0,0.9))",
                    animation: "pulse 1.4s ease-in-out infinite",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full font-heading font-black uppercase tracking-widest text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #ff8c00, #ffd700, #ff8c00)",
                color: "#1a0a00",
                border: "none",
                boxShadow: "0 0 24px rgba(255,180,0,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.06)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(255,180,0,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(255,180,0,0.5)";
              }}
            >
              ✨ Celebrate &amp; Continue
            </button>
          </div>

          {/* Bottom glow strip */}
          <div
            className="h-1 w-full"
            style={{
              background: "linear-gradient(90deg, #ff4500, #ffd700, #ff8c00, #ffd700, #ff4500)",
            }}
          />
        </div>
      </div>

      {/* Keyframe animations via style tag */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.7) translateY(40px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes popOut {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to   { opacity: 0; transform: scale(0.75) translateY(30px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }
      `}</style>
    </>
  );
}

