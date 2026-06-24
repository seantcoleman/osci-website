// Aurora radial background matching PulseBackground.swift
export default function PulseBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0A080B]" />
      {/* Top-left violet radial */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full animate-aurora-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(115,25,140,0.55) 0%, transparent 70%)",
        }}
      />
      {/* Bottom-right blue radial */}
      <div
        className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full animate-aurora-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(13,77,140,0.45) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{ mixBlendMode: "overlay", background: "white" }}
      />
    </div>
  );
}
