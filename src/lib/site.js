export const siteName = "Osci";
export const siteTagline = "Audio Waveform Video Maker";
export const defaultTitle = `${siteName} — ${siteTagline}`;
export const defaultDescription =
  "Osci — Audio waveform video maker. Turn your tracks and videos into stunning waveform visualizations.";

export const siteUrl =
  import.meta.env.VITE_SITE_URL ?? "https://osci-website-bay.vercel.app";

export const appStoreUrl =
  import.meta.env.VITE_APP_STORE_URL ?? "https://apps.apple.com";

export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? "";

export const ogImageUrl = `${siteUrl}/app-icon.png`;
