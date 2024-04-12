"use client";
import React from "react";
// import Link from "next/link";

const WatchHistoryHeader = () => {
  return (
    <div className="mt-10 flex justify-between items-center">
      <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
        Continue Watching
      </h2>
      {/* <Link href="/watchlist" className="cursor-pointer text-sm md:text-lg">
        View WatchList
      </Link> */}
    </div>
  );
};

export default WatchHistoryHeader;
