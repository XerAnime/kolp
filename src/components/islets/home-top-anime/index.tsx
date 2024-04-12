import React from "react";

import TopAnimeHeader from "./home-top-anime-header";
import TopAnimeTrack from "./home-top-anime-track";
import { TopAnimeTypes } from "@/lib/types";

interface TopAiringAnimeProps {
  data: TopAnimeTypes[];
}

export default function TopAiringAnime({ data }: TopAiringAnimeProps) {
  return (
    <div className="mt-16">
      <TopAnimeHeader />
      <TopAnimeTrack topAnime={data} />
    </div>
  );
}
