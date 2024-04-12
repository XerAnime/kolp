import React from "react";
import WatchListHeader from "./watchlist-header";
import WatchListTrack from "./watchlist-track";

import { WatchListType } from "@/lib/types";

export default function WatchListData() {
  return (
    <div>
      <WatchListHeader />
      <WatchListTrack />
    </div>
  );
}
