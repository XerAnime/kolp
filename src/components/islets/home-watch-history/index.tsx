"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import WatchHistoryHeader from "./watch-history-header";
import WatchHistoryTrack from "./watch-history-track";
import { fetchUserWatchList } from "@/lib/watchList";

export default function HomeWatchHistory() {
  const { data: userWatchList, isSuccess } = useQuery({
    queryKey: ["userWatchList", "", ""],
    queryFn: () => fetchUserWatchList("", ""),
  });
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  if (userWatchList?.length === 0) {
    return null;
  }

  if (isSuccess) {
    return (
      <div className="mt-16">
        <WatchHistoryHeader />
        <WatchHistoryTrack userWatchList={userWatchList} />
      </div>
    );
  }
}
