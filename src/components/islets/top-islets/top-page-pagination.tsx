"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronsLeft, ChevronRight, ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTopAiringPagination } from "@/states/useTopAiringPagination";

const TopPagePagination: React.FC<{
  className?: string;
  hasNextPage: boolean | undefined;
}> = ({ className, hasNextPage }) => {
  const router = useRouter();
  const [topPage, setPage] = useTopAiringPagination((state) => [
    state.topPage,
    state.setPage,
  ]);

  const handlePageClick = (page: number) => {
    setPage(page);
    if (!!page) {
      router.push(`?p=${page}`);
    }
  };
  return (
    <Pagination className={cn(className)}>
      <PaginationContent className="gap-2">
        {topPage !== 1 ? (
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => handlePageClick(1)}
            >
              <ChevronsLeft size={18} />
            </PaginationLink>
          </PaginationItem>
        ) : null}
        <PaginationItem>
          <PaginationLink
            className="cursor-pointer"
            onClick={() =>
              handlePageClick(topPage === 1 ? topPage : topPage - 1)
            }
          >
            <ChevronLeft size={18} />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {topPage === 1 ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink
              className="cursor-pointer"
              onClick={() => handlePageClick(topPage - 1)}
            >
              {topPage - 1}
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="cursor-pointer" isActive>
            {topPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {hasNextPage ? (
            <PaginationLink
              className="cursor-pointer"
              onClick={() => handlePageClick(topPage + 1)}
            >
              {topPage + 1}
            </PaginationLink>
          ) : null}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="cursor-pointer"
            onClick={() => handlePageClick(hasNextPage ? topPage + 1 : topPage)}
          >
            <ChevronRight size={18} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TopPagePagination;
