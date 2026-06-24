// PulseBrandMark.swift: pink rounded square + waveform icon + "OSCI" wordmark
export default function BrandMark({ size = "md" }) {
  const sizeMap = {
    sm: { box: "w-6 h-6 rounded-[6px]", icon: "text-[11px]", text: "text-[11px] tracking-[3px]" },
    md: { box: "w-7 h-7 rounded-[8px]", icon: "text-[14px]", text: "text-[14px] tracking-[3px]" },
    lg: { box: "w-10 h-10 rounded-[10px]", icon: "text-[18px]", text: "text-[18px] tracking-[4px]" },
  };
  const s = sizeMap[size] ?? sizeMap.md;

  return (
    <div className="flex items-center gap-2.5">
      <div className={`${s.box} bg-pulse-pink flex items-center justify-center flex-shrink-0`}>
        <WaveformIcon className={`${s.icon} text-white`} />
      </div>
      <span className={`${s.text} font-black text-white uppercase`}>Osci</span>
    </div>
  );
}

function WaveformIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
    >
      <path
        d="M1 8h1.5M13.5 8H15M3.5 5v6M5 3v10M6.5 6v4M8 4v8M9.5 6v4M11 3v10M12.5 5v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
