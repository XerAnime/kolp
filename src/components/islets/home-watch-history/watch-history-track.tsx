"use client";
import React from "react";
import { WatchListType } from "@/lib/types";
import { WatchHistoryMobileView } from "./watch-history-mobile";
import { WatchHistoryDefaultView } from "./watch-history-default";

const WatchHistoryTrack: React.FC<{
  userWatchList: WatchListType[] | undefined;
}> = ({ userWatchList }) => {
  return (
    <>
      {/* Large screen view. */}
      <WatchHistoryDefaultView userWatchList={userWatchList} />

      {/* Mobile View */}
      <WatchHistoryMobileView userWatchList={userWatchList} />
    </>
  );
};

export default WatchHistoryTrack;
