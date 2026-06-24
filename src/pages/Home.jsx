import PageMeta from "../components/PageMeta";
import AppStoreButton from "../components/AppStoreButton";
import HeroWaveform from "../components/HeroWaveform";
import { defaultDescription, defaultTitle } from "../lib/site";

export default function Home() {
  return (
    <>
      <PageMeta title={defaultTitle} description={defaultDescription} path="/" />
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
        <div className="flex-1 text-center lg:text-left animate-fade-up motion-reduce:animate-none motion-reduce:opacity-100">
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
            <AppStoreButton id="download" className="px-7 py-3.5" />
          </div>
          <p className="mt-4 text-sm text-pulse-text-tertiary">Free to download · iOS</p>
        </div>

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
        "Render a polished, share-ready video in seconds. Free exports include a watermark; upgrade to Pro for full-length, watermark-free clips.",
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
    "Export up to 30 seconds at 720p with a watermark",
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
          <p className="text-4xl font-black mb-1">
            <span className="text-gradient">$4.99</span>
            <span className="text-lg font-normal text-pulse-text-secondary">
              /mo
            </span>
          </p>
          <p className="text-sm text-pulse-text-secondary mb-6">
            or $29.99/yr · 7-day free trial on yearly
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
      <p className="mt-6 text-sm text-pulse-text-tertiary max-w-lg">
        Subscriptions are optional and renew automatically. Monthly and yearly plans
        available. Cancel anytime via your Apple ID.
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
      <AppStoreButton className="px-8 py-4" />
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
