import HeroWaveform from "../components/HeroWaveform";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <DownloadSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          <p className="inline-block text-xs font-semibold tracking-[3px] uppercase text-pulse-text-secondary mb-5">
            Audio Waveform Video Maker
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] mb-6">
            Make your audio{" "}
            <span className="text-gradient">look unforgettable</span>
          </h1>
          <p className="text-lg text-pulse-text-secondary leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
            Import a track or video, tune your visualizer, and export a
            share-ready clip. Perfect for music, podcasts, and social posts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              id="download"
              href="https://apps.apple.com"
              className="btn-gradient inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-base"
            >
              <AppleIcon />
              Download on the App Store
            </a>
          </div>
          <p className="mt-4 text-sm text-pulse-text-tertiary">Free to download · iOS</p>
        </div>

        {/* Waveform demo */}
        <div className="w-full max-w-sm lg:max-w-[360px] flex-shrink-0">
          <HeroWaveform />
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Import",
      description:
        "Pick any video or audio clip from your photo library. Osci works with music, voice, podcasts — anything with sound.",
    },
    {
      number: "02",
      title: "Style",
      description:
        "Choose your visualizer style, dial in the colors and layout, and watch your waveform come alive in real time.",
    },
    {
      number: "03",
      title: "Export",
      description:
        "Render a polished, share-ready video in seconds. No watermark, full resolution, ready for Instagram, TikTok, or anywhere else.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <SectionLabel>How it works</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-black mt-3 mb-14">
        Three steps to a stunning clip
      </h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-pulse-panel bg-pulse-panel border border-pulse-stroke p-7"
          >
            <span className="text-gradient text-sm font-black tracking-widest">
              {step.number}
            </span>
            <h3 className="text-xl font-bold mt-3 mb-2">{step.title}</h3>
            <p className="text-pulse-text-secondary text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "🎚️",
      title: "Multiple visualizer styles",
      description:
        "Bars, lines, dots, and more — all animated, all customizable.",
    },
    {
      icon: "🎨",
      title: "Full color control",
      description:
        "Pick any gradient or solid color. Match your brand, album art, or mood.",
    },
    {
      icon: "📐",
      title: "Flexible layout",
      description:
        "Adjust amplitude, density, vertical position, and mirroring until it looks exactly right.",
    },
    {
      icon: "✂️",
      title: "Clip trimming",
      description:
        "Trim your source to the perfect moment with the in-app timeline editor.",
    },
    {
      icon: "⚡",
      title: "Fast export",
      description:
        "Hardware-accelerated rendering means your video is ready in seconds, not minutes.",
    },
    {
      icon: "📱",
      title: "Built for iOS",
      description:
        "Designed natively for iPhone — smooth, responsive, and works offline.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 border-t border-pulse-stroke">
      <SectionLabel>Features</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-black mt-3 mb-14">
        Everything you need, nothing you don't
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-pulse-panel bg-pulse-panel border border-pulse-stroke p-6 hover:bg-pulse-panel-elevated transition-colors"
          >
            <span className="text-2xl mb-4 block">{f.icon}</span>
            <h3 className="text-base font-bold mb-1.5">{f.title}</h3>
            <p className="text-pulse-text-secondary text-sm leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  const freeTier = [
    "All visualizer styles",
    "Preview and design without limits",
    "Export up to 30 seconds at 720p",
  ];

  const proTier = [
    "Everything in Free",
    "Watermark-free exports",
    "Full-length exports",
    "1080p and 4K quality",
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 border-t border-pulse-stroke">
      <SectionLabel>Pricing</SectionLabel>
      <h2 className="text-3xl md:text-4xl font-black mt-3 mb-14">
        Free to start, Pro when you're ready
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
        {/* Free */}
        <div className="rounded-pulse-card bg-pulse-panel border border-pulse-stroke p-8">
          <p className="text-pulse-text-secondary text-sm font-semibold uppercase tracking-widest mb-2">
            Free
          </p>
          <p className="text-4xl font-black mb-6">$0</p>
          <ul className="space-y-3">
            {freeTier.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-pulse-text-secondary">
                <CheckIcon className="text-pulse-text-tertiary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pro */}
        <div
          className="rounded-pulse-card border p-8 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,45,138,0.12) 0%, rgba(123,44,255,0.12) 100%)",
            borderColor: "rgba(255,45,138,0.35)",
          }}
        >
          <div
            className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
            style={{
              background: "rgba(255,45,138,0.25)",
              color: "#FF2D8A",
            }}
          >
            PRO
          </div>
          <p className="text-pulse-text-secondary text-sm font-semibold uppercase tracking-widest mb-2">
            Osci Pro
          </p>
          <p className="text-4xl font-black mb-6">
            <span className="text-gradient">From $2.99</span>
            <span className="text-lg font-normal text-pulse-text-secondary">
              /mo
            </span>
          </p>
          <ul className="space-y-3">
            {proTier.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white">
                <CheckIcon className="text-pulse-pink flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-sm text-pulse-text-tertiary max-w-md">
        Subscriptions are optional and renew automatically. Cancel anytime via your Apple ID.
      </p>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 border-t border-pulse-stroke text-center">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        Ready to make your audio{" "}
        <span className="text-gradient">unforgettable?</span>
      </h2>
      <p className="text-pulse-text-secondary mb-10 max-w-md mx-auto">
        Download Osci for free and start creating in minutes.
      </p>
      <a
        href="https://apps.apple.com"
        className="btn-gradient inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base"
      >
        <AppleIcon />
        Download on the App Store
      </a>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold tracking-[3px] uppercase text-pulse-text-secondary">
      {children}
    </p>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.2-57.4-155.7-127.4-93.7-169.6-93.7-262.5c0-170.9 110.6-261.2 220-261.2 56.8 0 103.7 37.5 139.3 37.5 34.3 0 87.3-39.8 153.9-39.8 24.8 0 108.2 2.6 168.6 79.9zm-56-161.2c25.8-30.4 44.4-72.8 44.4-115.2 0-5.9-.5-11.8-1.5-17.1-42.2 1.5-92.1 28.2-121.9 64.1-22.6 25.8-45.4 68.1-45.4 110.7 0 6.5.9 13 1.4 14.9 2.5.3 6.4.8 10.3.8 37.9 0 85.2-25.3 112.7-58.2z" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
