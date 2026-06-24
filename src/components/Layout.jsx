import { Link } from "react-router-dom";
import PulseBackground from "./PulseBackground";
import Footer from "./Footer";
import BrandMark from "./BrandMark";

export default function Layout({ children }) {
  return (
    <>
      <PulseBackground />
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 border-b border-pulse-stroke backdrop-blur-md bg-[rgba(10,8,11,0.7)]">
          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link to="/" aria-label="Osci home">
              <BrandMark size="md" />
            </Link>
            <a
              href="/#download"
              className="text-sm font-semibold text-white btn-gradient px-4 py-1.5 rounded-full"
            >
              Download
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
