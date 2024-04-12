"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { SearchIcon } from "lucide-react";

const HeaderSearch = () => {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("anime");

  const handleSearchClick = () => {
    if (!!search) {
      router.push(`/search?q=${search}&filter=${filter}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleFilterChange = () => {
    if (filter === "anime") {
      setFilter("drama");
    } else {
      setFilter("anime");
    }
  };
  return (
    <div className="w-full lg:w-[900px] m-auto mt-4">
      <div className="flex space-x-2">
        <SearchInput
          icon={<SearchIcon className="h-[16px] w-[16px]" />}
          type="text"
          className="h-12 md:h-14 text-md w-full"
          placeholder="Search anime or drama"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          filter={
            <Button
              className="h-6 px-2 rounded-sm text-xs"
              size="sm"
              onClick={handleFilterChange}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          }
        />
        <Button
          className="h-12 md:h-14"
          variant="orange"
          onClick={handleSearchClick}
        >
          <SearchIcon size={27} />
        </Button>
      </div>
    </div>
  );
};

export default HeaderSearch;
