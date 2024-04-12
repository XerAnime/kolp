import { MetadataRoute } from "next";

const URL = process.env.NEXT_PUBLIC_APP_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/recent-updates",
    "/top-airing",
    "/anime",
    "/anime/watch",
    "/drama",
    "/drama/watch",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    priority: 0.8,
  }));

  return [...routes];
}
