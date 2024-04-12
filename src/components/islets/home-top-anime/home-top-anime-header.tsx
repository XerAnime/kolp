"use client";
import React from "react";
import Link from "next/link";

const TopAnimeHeader = () => {
  return (
    <div className="mt-10 flex justify-between items-center">
      <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
        Top Anime
      </h2>
      <Link href="/top-airing" className="cursor-pointer text-sm md:text-lg">
        View More
      </Link>
    </div>
  );
};

export default TopAnimeHeader;
