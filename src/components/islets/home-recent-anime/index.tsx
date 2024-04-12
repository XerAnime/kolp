import RecentAnimeHeader from "./recent-anime-header";
import RecentAnimeTrack from "./recent-anime-track";

import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeProps {
  recentAnime: RecentAnimeTypes[];
}

export default function HomeRecentAnime({ recentAnime }: RecentAnimeProps) {
  return (
    <>
      <RecentAnimeHeader />
      <RecentAnimeTrack recentAnime={recentAnime} />
    </>
  );
}
