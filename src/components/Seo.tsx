import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

const SITE_URL = "https://www.ng-climatisation.fr";

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

export const Seo = ({ title, description, canonicalPath = "/" }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description, canonicalPath]);

  return null;
};
