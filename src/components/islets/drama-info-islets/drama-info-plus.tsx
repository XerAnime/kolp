"use client";
import React from "react";

import { DramaDetailsType } from "@/lib/types";

interface DramaInfoProps {
  dramaInfo: DramaDetailsType;
}

const DramaInfoPlus: React.FC<DramaInfoProps> = ({ dramaInfo }) => {
  return (
    <div className="flex space-x-3 items-center">
      <div className="flex flex-col">
        <h1>
          <span className="font-semibold">Alternative: </span>
          {dramaInfo.otherNames}
        </h1>
        <h1>
          <span className="font-semibold">Status: </span>
          {dramaInfo.status}
        </h1>
        <h1>
          <span className="font-semibold">Episodes: </span>
          {dramaInfo.episodes?.length}
        </h1>
        <div className="mt-4 flex flex-wrap items-center">
          {dramaInfo.genres.map((genre) => (
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

export default DramaInfoPlus;
