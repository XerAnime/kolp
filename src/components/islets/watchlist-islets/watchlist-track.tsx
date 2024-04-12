"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { WatchListType } from "@/lib/types";
import { fetchUserWatchList } from "@/lib/watchList";
import { Img } from "@/components/ui/img";
import { GridLayoutPage } from "@/components/layouts/grid-layout-page";

import WatchListEdit from "./watchlist-edit";
import { useWatchListStatus } from "@/states/useWatchListStatus";
import { useWatchListType } from "@/states/useWatchListType";
import { Spinner } from "@/components/ui/spinner";

const WatchListTrack = () => {
  const router = useRouter();

  const status = useWatchListStatus((state) => state.status);
  const type = useWatchListType((state) => state.type);

  const { data, isFetching } = useQuery({
    queryKey: ["userWatchList", status, type],
    queryFn: () => fetchUserWatchList(status, type),
    refetchOnWindowFocus: false,
  });

  if (data?.length === 0) {
    return (
      <div className="flex h-[calc(100vh-280px)] items-center justify-center">
        <h1>No data found.</h1>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="flex h-[calc(100vh-250px)] items-center justify-center">
        <Spinner className="text-orange-400" size={40} />
      </div>
    );
  }

  return (
    <GridLayoutPage className="mb-10">
      {data?.map((watchList: WatchListType) => (
        <div key={watchList._id} className="cursor-pointer">
          <Img
            className="w-[280px] h-[200px] object-cover"
            src={watchList.image}
            alt={watchList.title}
            onClick={() =>
              router.push(
                `${
                  watchList.type === "anime"
                    ? "anime/watch/" +
                      watchList.listId +
                      "?ep=" +
                      watchList.episodeId
                    : "drama/watch/" +
                      encodeURIComponent(watchList.listId) +
                      "?dEp=" +
                      watchList.episodeId
                }`
              )
            }
          />
          <div className="flex justify-between items-center h-6">
            <h3 className="text-xs text-muted-foreground">
              Episode {watchList.episode ?? 0}
            </h3>
            <WatchListEdit
              listId={watchList.listId}
              title={watchList.title}
              selectedStatus={watchList.status}
              type={watchList.type}
              iconOnly
            />
          </div>
          <Link
            href={`${
              watchList.type === "anime"
                ? "anime/watch/" +
                  watchList.listId +
                  "?ep=" +
                  watchList.episodeId
                : "drama/watch/" +
                  encodeURIComponent(watchList.listId) +
                  "?dEp=" +
                  watchList.episodeId
            }`}
            className="hover:text-orange-400"
          >
            {watchList.title.substring(0, 27)}
          </Link>
        </div>
      ))}
    </GridLayoutPage>
  );
};

export default WatchListTrack;
