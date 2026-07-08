import { Head } from "vite-react-ssg";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  noindex?: boolean;
}

const SITE_URL = "https://www.ng-climatisation.fr";
const DEFAULT_IMAGE = `${SITE_URL}/LogoNGclim.jpg`;
const DEFAULT_ROBOTS =
  "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

export const Seo = ({
  title,
  description,
  canonicalPath = "/",
  image,
  noindex = false,
}: SeoProps) => {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_IMAGE;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, follow" : DEFAULT_ROBOTS} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};
