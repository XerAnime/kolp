"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchFilter } from "@/states/useSearchFilter";
import { useSearch } from "@/states/useSearch";

interface Props {
  filterParams: string;
}

const SearchFilter: React.FC<Props> = ({ filterParams }) => {
  const router = useRouter();

  const [filter, setFilter, isActiveAnime, isActiveDrama] = useSearchFilter(
    (state) => [
      state.filter,
      state.setFilter,
      state.isActiveAnime,
      state.isActiveDrama,
    ]
  );

  const searchQuery = useSearch((state) => state.searchQuery);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    if (!!filter) {
      router.push(`/search?q=${searchQuery}&filter=${filter}`, {
        scroll: false,
      });
    }
  };

  useEffect(() => {
    if (!!filterParams) {
      setFilter(filterParams);
    } else {
      setFilter("anime");
    }
  }, [filterParams]);

  return (
    <>
      {filter !== "" ? (
        <div className="flex justify-center mt-6 space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="anime"
              checked={isActiveAnime()}
              onCheckedChange={() => handleFilterChange("anime")}
            />
            <label
              htmlFor="anime"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Anime
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="drama"
              checked={isActiveDrama()}
              onCheckedChange={() => handleFilterChange("drama")}
            />
            <label
              htmlFor="drama"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Drama
            </label>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchFilter;
