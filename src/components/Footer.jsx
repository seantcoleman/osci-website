import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-pulse-stroke mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <BrandMark size="sm" />
        <div className="flex items-center gap-6 text-sm text-pulse-text-secondary">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Use
          </Link>
        </div>
        <p className="text-sm text-pulse-text-tertiary">
          © {year} Osci. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
