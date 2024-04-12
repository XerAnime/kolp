"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import AnimeServer from "./anime-server";

const AnimeActions: React.FC<{ id: string }> = ({ id }) => {
  const searchParams = useSearchParams();
  const episodeParams = searchParams.get("ep") as string;

  const selectedEpisode = !episodeParams ? id : episodeParams;
  return (
    <div className="w-full 2xl:w-4/5 m-auto mt-3 mb-4">
      <div className="flex justify-center space-x-4 md:space-x-8">
        <AnimeServer id={selectedEpisode} />
      </div>
    </div>
  );
};

export default AnimeActions;
