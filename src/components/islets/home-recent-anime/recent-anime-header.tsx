"use client";
import React from "react";
import Link from "next/link";

const RecentAnimeHeader = () => {
  return (
    <div className="mt-10 flex justify-between items-center">
      <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
        Recently Updated
      </h2>
      <Link
        href="/recent-updates"
        className="cursor-pointer text-sm md:text-lg"
      >
        View More
      </Link>
    </div>
  );
};

export default RecentAnimeHeader;
