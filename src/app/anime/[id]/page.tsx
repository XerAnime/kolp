import React, { cache } from "react";
import axios from "axios";

import {
  AnimeInfoWrapper,
  AnimeInfo as AnimeInfoDetails,
  AnimeInfoPlus,
} from "@/components/islets/anime-info-islets";

import { AnimeInfo } from "@/lib/types";
import { API_HOST, GOGOANIME_ENDPOINT, ANIME } from "../../../config";

const getData = cache(async (id: string): Promise<{ animeInfo: AnimeInfo }> => {
  const { data } = await axios.get(
    `${API_HOST + ANIME + GOGOANIME_ENDPOINT}/info/${encodeURIComponent(id)}`
  );

  return { animeInfo: data };
});

export default async function AnimePage({
  params,
}: {
  params: { id: string };
}) {
  const { animeInfo } = await getData(params.id);

  return (
    <AnimeInfoWrapper background={animeInfo.image}>
      <AnimeInfoDetails animeInfo={animeInfo} />
      <AnimeInfoPlus animeInfo={animeInfo} />
    </AnimeInfoWrapper>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { animeInfo } = await getData(params.id);
  return {
    title: animeInfo.title,
    metadataBase: new URL(process.env.APP_URL as string),
    openGraph: {
      title: `Watch ${animeInfo.title} Anime Online free on WatchListify.site`,
      type: "video.tv_show",
      url: `/drama/${animeInfo.id}`,
      images: animeInfo.image,
      description: `The best website to watch ${animeInfo.title} anime for free at WatchListify.site.`,
    },
  };
}
