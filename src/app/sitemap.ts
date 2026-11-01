import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vedantsinggh.github.io",
      lastModified: new Date(),
    },
  ];
}
