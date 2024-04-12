import React, { cache } from "react";
import { Metadata } from "next";
import {
  DramaInfoWrapper,
  DramaInfo,
  DramaInfoPlus,
} from "@/components/islets/drama-info-islets";
import { API_HOST, MOVIE, DRAMA_COOL } from "@/config";
import { DramaDetailsType } from "@/lib/types";

const getData = cache(async (id: string): Promise<DramaDetailsType> => {
  const res = await fetch(`${API_HOST + MOVIE + DRAMA_COOL}/info?id=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  return res.json();
});

export default async function DramaPage({
  params,
}: {
  params: { id: string };
}) {
  const dramaInfo = await getData(params.id);

  return (
    <DramaInfoWrapper background={dramaInfo.image}>
      <DramaInfo dramaInfo={dramaInfo} dramaId={params.id} />
      <DramaInfoPlus dramaInfo={dramaInfo} />
    </DramaInfoWrapper>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const dramaInfo = await getData(params.id);
  return {
    title: dramaInfo.title,
    metadataBase: new URL(process.env.APP_URL as string),
    openGraph: {
      title: `Watch ${dramaInfo.title} Drama Online free on WatchListify.site`,
      type: "video.tv_show",
      url: `/drama/${dramaInfo.id}`,
      images: dramaInfo.image,
      description: `The best website to watch ${dramaInfo.title} drama for free at WatchListify.site.`,
    },
  };
}
