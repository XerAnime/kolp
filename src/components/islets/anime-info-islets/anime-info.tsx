"use client";
import React from "react";
import { Calendar, Globe, Play } from "lucide-react";
import { Img } from "@/components/ui/img";
import { AnimeInfo } from "@/lib/types";
import AnimeWatchList from "./anime-watchlist";
import AnimeWatch from "./anime-watch";
import { Description } from "@/components/ui/description";

interface AnimeInfoProps {
  animeInfo: AnimeInfo;
}

const AnimeInfo: React.FC<AnimeInfoProps> = ({ animeInfo }) => {
  return (
    <div className="col-span-2">
      <div className="flex flex-col">
        <Img
          className="rounded-sm w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
          src={animeInfo.image}
          alt={animeInfo.title}
        />
        <h1 className="mt-4 text-lg font-semibold text-orange-400">
          {animeInfo.title}
        </h1>
        <div className=" flex space-x-3 items-center">
          <div className="flex items-center space-x-2">
            <Play size={16} />
            <span className="font-sm lowercase">{animeInfo.type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe size={16} />
            <span className="font-sm">{animeInfo.subOrDub}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span className="font-sm">{animeInfo.releaseDate}</span>
          </div>
        </div>
        <div className="mt-4 flex space-x-3 items-center">
          <AnimeWatch listId={animeInfo.id} />
          <AnimeWatchList
            listId={animeInfo.id}
            title={animeInfo.title}
            image={animeInfo.image}
            episode={animeInfo.episodes[0].number}
            episodeId={animeInfo.episodes[0].id}
          />
        </div>
        <Description className="mt-4" message={animeInfo.description} />
      </div>
    </div>
  );
};

export default AnimeInfo;
