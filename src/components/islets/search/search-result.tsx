"use client";
import React from "react";
import SearchLoadingSkeleton from "@/components/ui/search-loading-skeleton";
import AnimeResult from "./anime-result";
import DramaResult from "./drama-result";

import { AnimeResultTypes, DramaResultTypes } from "@/lib/types";

interface SearchResultProps {
  filter: "anime" | "drama" | string;
  isFetchingAnime: boolean;
  isFetchingDrama: boolean;
  dataAnime: AnimeResultTypes[] | undefined;
  dataDrama: DramaResultTypes[] | undefined;
}

const SearchResult: React.FC<SearchResultProps> = ({
  filter,
  isFetchingAnime,
  isFetchingDrama,
  dataAnime,
  dataDrama,
}) => {
  const noResultAnime = dataAnime?.length === 0;
  const noResultDrama = dataDrama?.length === 0;

  if (filter === "drama") {
    return (
      <div className="mt-10">
        {isFetchingDrama ? (
          <SearchLoadingSkeleton />
        ) : (
          <>
            <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
              Search Result:
            </h2>
            {!noResultDrama ? (
              <DramaResult data={dataDrama} />
            ) : (
              <h1 className="flex justify-center mt-20">No drama found.</h1>
            )}
          </>
        )}
      </div>
    );
  }

  if (filter === "anime") {
    return (
      <div className="mt-10">
        {isFetchingAnime ? (
          <SearchLoadingSkeleton />
        ) : (
          <>
            <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
              Search Result:
            </h2>
            {!noResultAnime ? (
              <AnimeResult data={dataAnime} />
            ) : (
              <h1 className="flex justify-center mt-20">No anime found.</h1>
            )}
          </>
        )}
      </div>
    );
  }

  if (filter !== "anime" && filter !== "drama" && filter !== null) {
    return (
      <div className="mt-36 flex justify-center">
        <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
          Filter not defined.
        </h2>
      </div>
    );
  }

  return null;
};

export default SearchResult;
