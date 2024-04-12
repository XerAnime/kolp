"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SearchInput } from "@/components/ui/search-input";
import { SearchIcon } from "lucide-react";

import { useSearch } from "@/states/useSearch";
import { useSearchFilter } from "@/states/useSearchFilter";

interface Props {
  searchParams?: string;
  isFetchingAnime?: boolean;
  isFetchingDrama?: boolean;
}

const SearchField: React.FC<Props> = ({
  searchParams,
  isFetchingAnime,
  isFetchingDrama,
}) => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useSearch((state) => [
    state.searchQuery,
    state.setSearchQuery,
  ]);

  const filter = useSearchFilter((state) => state.filter);

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    if (!!value) {
      router.push(`/search?q=${value}&filter=${filter}`, { scroll: false });
    }
  };

  useEffect(() => {
    if (!!searchParams) {
      setSearchQuery(searchParams);
    } else {
      setSearchQuery("");
    }
  }, [searchParams]);

  return (
    <div className="w-full lg:w-[900px] m-auto mt-4">
      <SearchInput
        icon={<SearchIcon className="h-[16px] w-[16px]" />}
        type="text"
        className="h-12 md:h-14 text-md"
        placeholder="Search anime or drama"
        value={searchQuery}
        onChange={(e) => handleSearchInputChange(e.target.value)}
        loading={isFetchingAnime || isFetchingDrama}
      />
    </div>
  );
};

export default SearchField;
