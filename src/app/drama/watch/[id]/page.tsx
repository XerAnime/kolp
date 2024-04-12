import React, { cache } from "react";
import { getServerSession } from "next-auth";
import connectMongo from "@/utils/mongoose";
import WatchList from "@/models/watchlist";

import { API_HOST, MOVIE, DRAMA_COOL } from "@/config";
import { DramaDetailsType, WatchListType } from "@/lib/types";
import {
  DramaWatchWrapper,
  DramaPlayer,
  DramaDetails,
  DramaEpisodes,
} from "@/components/islets/drama-watch-islets";

const getData = cache(async (id: string): Promise<DramaDetailsType> => {
  const res = await fetch(`${API_HOST + MOVIE + DRAMA_COOL}/info?id=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  return res.json();
});

const getWatchListData = cache(
  async (id: string): Promise<{ watchList: WatchListType | null }> => {
    const session = await getServerSession();

    if (session) {
      await connectMongo();

      const result = await WatchList.findOne({
        userId: session?.user?.email,
        listId: id,
      });

      const watchList = JSON.parse(JSON.stringify(result));

      return { watchList };
    }

    return { watchList: null };
  }
);

export default async function DramaWatchPage({
  params,
}: {
  params: { id: string };
}) {
  const dramaInfo = await getData(params.id);

  const { watchList } = await getWatchListData(decodeURIComponent(params.id));

  return (
    <>
      {dramaInfo?.episodes && dramaInfo.episodes.length > 0 && (
        <DramaPlayer
          episodeId={dramaInfo?.episodes[0]?.id}
          mediaId={params.id}
          cover={dramaInfo.image}
        />
      )}

      <DramaWatchWrapper>
        {dramaInfo?.episodes && (
          <DramaDetails
            id={params.id}
            description={dramaInfo.description}
            status={dramaInfo.status}
            title={dramaInfo.title}
            image={dramaInfo.image}
            episode={dramaInfo?.episodes[0].episode}
            episodeId={dramaInfo?.episodes[0].id}
          />
        )}
        <DramaEpisodes
          dramaEpisodes={dramaInfo?.episodes}
          id={dramaInfo.id}
          isWatchList={!!watchList}
        />
      </DramaWatchWrapper>
    </>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const dramaInfo = await getData(params.id);
  return {
    title: `Watch ${dramaInfo.title}`,
    metadataBase: new URL(process.env.APP_URL as string),
    openGraph: {
      title: `Watch ${dramaInfo.title} Drama Online free on WatchListify.site`,
      type: "video.episode",
      url: `/drama/${dramaInfo.id}`,
      images: dramaInfo.image,
      description: `The best website to watch ${dramaInfo.title} drama for free at WatchListify.site.`,
    },
  };
}
