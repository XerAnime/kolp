import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Img } from "@/components/ui/img";
import {
  GridLayoutPage,
  GridLayoutWrapper,
} from "@/components/layouts/grid-layout-page";
import { RecentAnimeTypes } from "@/lib/types";

interface RecentAnimeTrackProps {
  data: RecentAnimeTypes[] | undefined;
}

const RecentUpdatesTrack: React.FC<RecentAnimeTrackProps> = ({ data }) => {
  const router = useRouter();

  if (data?.length === 0) {
    return (
      <div className="flex justify-center mt-52">
        <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
          There is no data.
        </h2>
      </div>
    );
  }

  return (
    <GridLayoutPage>
      {data?.map((anime: RecentAnimeTypes) => (
        <GridLayoutWrapper key={anime.id}>
          <Img
            className="rounded-sm w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
            src={anime.image}
            alt={anime.title}
            onClick={() => router.push(`/anime/${anime.id}`)}
          />

          <div className="mt-2 flex justify-between items-center">
            <Link
              href={`/anime/watch/${anime.id}?ep=${anime.episodeId}`}
              className="text-sm text-muted-foreground"
            >
              Episode {anime.episodeNumber}
            </Link>
          </div>
          <Link
            href={`/anime/${anime.id}`}
            className="mt-1 hover:text-orange-400 line-clamp-2"
          >
            {anime.title}
          </Link>
        </GridLayoutWrapper>
      ))}
    </GridLayoutPage>
  );
};

export default RecentUpdatesTrack;
