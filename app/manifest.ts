import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guru Prasath — Software engineer / systems that earn trust",
    short_name: "Guru Prasath",
    description: "A personal working archive by Guru Prasath.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EEE5",
    theme_color: "#F4EEE5",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
