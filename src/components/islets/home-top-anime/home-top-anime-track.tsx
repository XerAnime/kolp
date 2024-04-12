"use client";
import React from "react";
import { TopAnimeTypes } from "@/lib/types";
import { TopAnimeMobileView } from "./top-anime-mobile";
import { TopAnimeDefaultView } from "./top-anime-default";

interface TopAnimeTrackProps {
  topAnime: TopAnimeTypes[];
}

const TopAnimeTrack: React.FC<TopAnimeTrackProps> = ({ topAnime }) => {
  return (
    <>
      <TopAnimeDefaultView topAnime={topAnime} />
      <TopAnimeMobileView topAnime={topAnime} />
    </>
  );
};

export default TopAnimeTrack;
