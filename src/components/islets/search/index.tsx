"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import SearchField from "./search-field";
import SearchFilter from "./search-filter";
import SearchResult from "./search-result";

import { useSearch } from "@/states/useSearch";
import { useSearchFilter } from "@/states/useSearchFilter";

const SearchSomething = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") as string;
  const filter = searchParams.get("filter") as string;

  // Search filter state
  const setFilter = useSearchFilter((state) => state.setFilter);

  // Search query state.
  const [setSearchQuery, searchAnime, searchDrama] = useSearch((state) => [
    state.setSearchQuery,
    state.searchAnime,
    state.searchDrama,
  ]);

  //   Client search for anime.
  const { data: dataAnimeResult, isFetching: isFetchingAnime } = useQuery({
    queryKey: ["animeResult", query],
    queryFn: () => searchAnime(query),
    refetchOnWindowFocus: false,
    enabled: !!query,
  });

  //   Client search for drama.
  const { data: dataDramaResult, isFetching: isFetchingDrama } = useQuery({
    queryKey: ["animeDrama", query],
    queryFn: () => searchDrama(query),
    refetchOnWindowFocus: false,
    enabled: !!query,
  });

  useEffect(() => {
    if (!!query) {
      setSearchQuery(query);
    }

    if (!!filter) {
      setFilter(filter);
    }
  }, [query, filter]);

  return (
    <div className="mt-10">
      <SearchField
        searchParams={query}
        isFetchingAnime={isFetchingAnime}
        isFetchingDrama={isFetchingDrama}
      />
      <SearchFilter filterParams={filter} />
      <SearchResult
        filter={filter}
        isFetchingAnime={isFetchingAnime}
        isFetchingDrama={isFetchingDrama}
        dataAnime={dataAnimeResult?.results}
        dataDrama={dataDramaResult?.results}
      />
    </div>
  );
};

export default SearchSomething;
