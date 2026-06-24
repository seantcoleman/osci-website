import { appStoreUrl } from "../lib/site";

export default function AppStoreButton({ id, className = "" }) {
  return (
    <a
      id={id}
      href={appStoreUrl}
      className={`btn-gradient inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white text-base ${className}`}
    >
      <AppleIcon />
      Download on the App Store
    </a>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.2-57.4-155.7-127.4-93.7-169.6-93.7-262.5c0-170.9 110.6-261.2 220-261.2 56.8 0 103.7 37.5 139.3 37.5 34.3 0 87.3-39.8 153.9-39.8 24.8 0 108.2 2.6 168.6 79.9zm-56-161.2c25.8-30.4 44.4-72.8 44.4-115.2 0-5.9-.5-11.8-1.5-17.1-42.2 1.5-92.1 28.2-121.9 64.1-22.6 25.8-45.4 68.1-45.4 110.7 0 6.5.9 13 1.4 14.9 2.5.3 6.4.8 10.3.8 37.9 0 85.2-25.3 112.7-58.2z" />
    </svg>
  );
}
