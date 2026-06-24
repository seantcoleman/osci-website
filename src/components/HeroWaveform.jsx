import { useEffect, useRef } from "react";

const BAR_COUNT = 52;

// Simulates the animated bars waveform from DemoHeroCard / AnimatedDemoWaveform
export default function HeroWaveform() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (ts) => {
      timeRef.current = ts / 1000;
      const t = timeRef.current;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const barW = (W * 0.9) / (BAR_COUNT * 2 - 1);
      const gap = barW;
      const totalW = BAR_COUNT * barW + (BAR_COUNT - 1) * gap;
      const startX = (W - totalW) / 2;
      const centerY = H / 2;
      const maxAmp = H * 0.42;

      // Gradient: pink → purple → cyan (matches primaryGradient)
      const grad = ctx.createLinearGradient(startX, 0, startX + totalW, 0);
      grad.addColorStop(0, "#FF2D8A");
      grad.addColorStop(0.5, "#7B2CFF");
      grad.addColorStop(1, "#47DBFF");

      ctx.fillStyle = grad;

      for (let i = 0; i < BAR_COUNT; i++) {
        const x = startX + i * (barW + gap);
        const phase = (i / BAR_COUNT) * Math.PI * 2;
        const amp =
          Math.sin(phase + t * 1.8) * 0.45 +
          Math.sin(phase * 2.3 + t * 1.1) * 0.3 +
          Math.sin(phase * 0.7 + t * 2.6) * 0.25;
        const h = Math.max(barW, (amp * 0.5 + 0.55) * maxAmp);

        const r = barW / 2;
        // Top bar
        ctx.beginPath();
        ctx.roundRect(x, centerY - h, barW, h, [r, r, 0, 0]);
        ctx.fill();
        // Bottom mirror
        ctx.beginPath();
        ctx.roundRect(x, centerY, barW, h, [0, 0, r, r]);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-[24px] overflow-hidden"
      style={{ aspectRatio: "1.35", background: "#000" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
      />
    </div>
  );
}
