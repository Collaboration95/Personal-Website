import type { MetadataRoute } from "next";

import { siteContent } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteContent.siteUrl}/sitemap.xml`,
  };
}
