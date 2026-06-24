import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { siteName } from "../lib/site";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title={`Page Not Found — ${siteName}`}
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <section className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-xs font-semibold tracking-[3px] uppercase text-pulse-text-secondary mb-4">
          404
        </p>
        <h1 className="text-4xl font-black mb-4">Page not found</h1>
        <p className="text-pulse-text-secondary mb-10">
          That page doesn&apos;t exist or may have moved.
        </p>
        <Link
          to="/"
          className="btn-gradient inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-white text-base"
        >
          Back to Home
        </Link>
      </section>
    </>
  );
}
