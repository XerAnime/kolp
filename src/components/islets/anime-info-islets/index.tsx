import React from "react";
import AnimeInfo from "./anime-info";
import AnimeInfoPlus from "./anime-info-plus";
import AnimeWatchList from "./anime-watchlist";

interface AnimeWrapperProps {
  children: React.ReactNode;
  background: string;
}

function AnimeInfoWrapper({ children, background }: AnimeWrapperProps) {
  return (
    <div className="relative backdrop-blur-xl bg-background">
      <img
        src={background}
        alt="Background"
        className="absolute h-full w-full object-cover blur-lg opacity-20"
      />
      <div className="relative px-4 md:px-10 lg:px-16">
        <div className="w-full xl:w-[1200px] m-auto">
          <div className="pt-10 lg:pt-24 pb-10 lg:pb-24 flex flex-col lg:grid lg:grid-cols-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimeInfoWrapper, AnimeInfo, AnimeInfoPlus, AnimeWatchList };
