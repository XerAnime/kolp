import React from "react";
import { AnimeInfo } from "@/lib/types";

interface AnimeInfoPlusProps {
  animeInfo: AnimeInfo;
}

const AnimeInfoPlus: React.FC<AnimeInfoPlusProps> = ({ animeInfo }) => {
  return (
    <div className="flex space-x-3 items-center">
      <div className="flex flex-col">
        <h1 className="mt-4 lg:mt-0">
          <span className="font-semibold">Alternative: </span>
          {animeInfo.otherName}
        </h1>
        <h1>
          <span className="font-semibold">Status: </span>
          {animeInfo.status}
        </h1>
        <h1>
          <span className="font-semibold">Episodes: </span>
          {animeInfo.totalEpisodes}
        </h1>
        <div className="mt-4 flex flex-wrap items-center">
          {animeInfo.genres.map((genre) => (
            <span
              key={genre}
              className="bg-orange-400 px-2 py-1 mr-3 mb-2 rounded-md text-sm cursor-pointer"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeInfoPlus;
