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
import { useRecentPagination } from "@/states/useRecentPagination";

interface Props {
  className?: string;
  hasNextPage: boolean | undefined;
}

const RecentUpdatesPagination: React.FC<Props> = ({
  className,
  hasNextPage,
}) => {
  const router = useRouter();
  const [page, setPage] = useRecentPagination((state) => [
    state.page,
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
        {page !== 1 ? (
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
            onClick={() => handlePageClick(page === 1 ? page : page - 1)}
          >
            <ChevronLeft size={18} />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {page === 1 ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink
              className="cursor-pointer"
              onClick={() => handlePageClick(page - 1)}
            >
              {page - 1}
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="cursor-pointer" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {hasNextPage ? (
            <PaginationLink
              className="cursor-pointer"
              onClick={() => handlePageClick(page + 1)}
            >
              {page + 1}
            </PaginationLink>
          ) : null}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="cursor-pointer"
            onClick={() => handlePageClick(hasNextPage ? page + 1 : page)}
          >
            <ChevronRight size={18} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default RecentUpdatesPagination;
