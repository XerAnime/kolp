import { FC } from "react";
import Link from "next/link";
import { WatchListType } from "@/lib/types";
import {
  ScrollerMobileContent,
  ScrollerMobileView,
  ScrollerMobileWrapper,
} from "@/components/layouts/scroller-mobile-view";
import { Img } from "@/components/ui/img";

export const WatchHistoryMobileView: FC<{
  userWatchList: WatchListType[] | undefined;
}> = ({ userWatchList }) => {
  return (
    <ScrollerMobileView>
      <ScrollerMobileWrapper>
        {userWatchList?.slice(0, 12).map((watchList: WatchListType) => (
          <ScrollerMobileContent key={watchList._id}>
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
            >
              <Img
                className="w-[200px] h-[190px] object-cover"
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
              className="mt-2 hover:text-orange-400 line-clamp-1 text-wrap"
            >
              {watchList.title}
            </Link>
          </ScrollerMobileContent>
        ))}
      </ScrollerMobileWrapper>
    </ScrollerMobileView>
  );
};
