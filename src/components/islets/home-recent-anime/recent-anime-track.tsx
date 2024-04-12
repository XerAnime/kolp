"use client";
import React from "react";
import { RecentAnimeTypes } from "@/lib/types";
import { RecentAnimeMobileView } from "./recent-anime-mobile";
import { RecentAnimeDefaultView } from "./recent-anime-default";

interface RecentAnimeTrackProps {
  recentAnime: RecentAnimeTypes[];
}

const RecentAnimeTrack: React.FC<RecentAnimeTrackProps> = ({ recentAnime }) => {
  return (
    <>
      <RecentAnimeDefaultView recentAnime={recentAnime} />
      <RecentAnimeMobileView recentAnime={recentAnime} />
    </>
  );
};

export default RecentAnimeTrack;
