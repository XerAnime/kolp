import { FC } from "react";
import Link from "next/link";
import { WatchListType } from "@/lib/types";
import { Img } from "@/components/ui/img";

export const WatchHistoryDefaultView: FC<{
  userWatchList: WatchListType[] | undefined;
}> = ({ userWatchList }) => {
  return (
    <div className="hidden md:block">
      <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5">
        {userWatchList?.slice(0, 6).map((watchList: WatchListType) => (
          <div key={watchList._id} className="cursor-pointer">
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
              className="mt-3 hover:text-orange-400"
            >
              <Img
                className="w-[280px] h-[200px] object-cover"
                src={watchList.image}
                alt={watchList.title}
              />
            </Link>
            <h3 className="text-xs text-muted-foreground">
              Episode {watchList.episode ?? 0}
            </h3>
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
              className="mt-3 hover:text-orange-400 line-clamp-2"
            >
              {watchList.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
