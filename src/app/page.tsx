import { cache } from "react";
import HomeHeader from "@/components/islets/home-header";
import HomeRecentAnime from "@/components/islets/home-recent-anime";
import HomeWatchHistory from "@/components/islets/home-watch-history";
import TopAiringAnime from "@/components/islets/home-top-anime";

import Footer from "@/components/islets/footer";
import { fetchRecentAnime, fetchTopAnime } from "@/lib/anime";
import { RecentAnimeTypes, TopAnimeTypes } from "@/lib/types";

const getHomeData = cache(
  async (): Promise<{
    recentAnime: RecentAnimeTypes[];
    topAnime: TopAnimeTypes[];
  }> => {
    const [recentAnime, topAnime] = await Promise.all([
      fetchRecentAnime(),
      fetchTopAnime(),
    ]);

    return {
      recentAnime,
      topAnime,
    };
  }
);

export default async function Home() {
  const { recentAnime, topAnime } = await getHomeData();

  return (
    <div className="px-4 md:px-10 lg:px-16">
      <HomeHeader />

      {/* Recently Updated */}
      <HomeRecentAnime recentAnime={recentAnime} />

      {/* Watch History */}
      <HomeWatchHistory />

      {/* Top Airing Anime */}
      <TopAiringAnime data={topAnime} />

      <Footer />
    </div>
  );
}

export const revalidate = 0;
