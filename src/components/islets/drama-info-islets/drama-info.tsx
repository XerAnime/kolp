"use client";
import React from "react";
import { Calendar } from "lucide-react";
import { Img } from "@/components/ui/img";
import DramaWatchList from "./drama-watchlist";
import DramaWatch from "./drama-watch";

import { DramaDetailsType } from "@/lib/types";
import { Description } from "@/components/ui/description";

interface DramaInfoProps {
  dramaInfo: DramaDetailsType;
  dramaId: string;
}

const DramaInfo: React.FC<DramaInfoProps> = ({ dramaInfo, dramaId }) => {
  return (
    <div className="col-span-2">
      <div className="flex flex-col">
        <Img
          className="rounded-sm w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
          src={dramaInfo.image}
          alt={dramaInfo.title}
        />
        <h1 className="mt-4 text-lg font-semibold text-orange-400">
          {dramaInfo.title}
        </h1>
        <div className=" flex space-x-3 items-center">
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span className="font-sm">{dramaInfo.releaseDate}</span>
          </div>
        </div>
        <div className="mt-4 flex space-x-3 items-center">
          <DramaWatch listId={decodeURIComponent(dramaId)} />
          {dramaInfo?.episodes && (
            <DramaWatchList
              listId={dramaId}
              title={dramaInfo.title}
              image={dramaInfo.image}
              episode={dramaInfo.episodes[0].episode}
              episodeId={dramaInfo.episodes[0].id}
              decode
            />
          )}
        </div>
        <Description className="mt-4" message={dramaInfo.description} />
      </div>
    </div>
  );
};

export default DramaInfo;
