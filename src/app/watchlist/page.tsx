import React from "react";
import WatchListData from "@/components/islets/watchlist-islets";

export default async function WatchList() {
  return (
    <div className="px-4 md:px-10 lg:px-16 xs:m-auto sm:m-0 xs:w-[450px] sm:w-full">
      <WatchListData />
    </div>
  );
}
