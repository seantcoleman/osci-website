import { useEffect } from "react";
import {
  defaultDescription,
  defaultTitle,
  ogImageUrl,
  siteUrl,
} from "../lib/site";

function setMeta(name, content, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function PageMeta({
  title = defaultTitle,
  description = defaultDescription,
  path = "",
}) {
  useEffect(() => {
    const url = `${siteUrl}${path}`;
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", url, true);
    setMeta("og:type", "website", true);
    setMeta("og:image", ogImageUrl, true);
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImageUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path]);

  return null;
}
