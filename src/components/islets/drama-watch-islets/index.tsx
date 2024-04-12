"use client";
import React from "react";
import DramaPlayer from "./drama-player";
import DramaDetails from "./drama-details";
import DramaEpisodes from "./drama-episodes";
import useResetPlayerDramaState from "@/hooks/useResetPlayerDramaState";

interface DramaWatchWrapperProps {
  children: React.ReactNode;
}

const DramaWatchWrapper: React.FC<DramaWatchWrapperProps> = ({ children }) => {
  useResetPlayerDramaState();
  return (
    <div className="px-4 md:px-10 lg:px-16 mb-10">
      <div className="mt-4 w-full xl:w-[1200px] m-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export { DramaWatchWrapper, DramaPlayer, DramaDetails, DramaEpisodes };
