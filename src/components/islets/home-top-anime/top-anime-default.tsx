import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Img } from "@/components/ui/img";
import { TopAnimeTypes } from "@/lib/types";

type Props = {
  topAnime: TopAnimeTypes[];
};

export const TopAnimeDefaultView: FC<Props> = ({ topAnime }) => {
  const router = useRouter();
  return (
    <div className="hidden md:block">
      <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-3 2xl:gap-5">
        {topAnime.slice(0, 6).map((anime: TopAnimeTypes) => (
          <div key={anime.id} className="cursor-pointer">
            <Img
              className="rounded-sm md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
              src={anime.image}
              alt={anime.title}
              onClick={() => router.push(`/anime/${anime.id}`)}
            />
            <div className="mt-2 flex justify-between items-center">
              <div className="flex">
                {anime.genres.slice(0, 2).map((genre: string) => (
                  <p key={genre} className="text-sm text-muted-foreground mr-2">
                    {genre}
                  </p>
                ))}
              </div>
            </div>
            <Link
              href={`/anime/${anime.id}`}
              className="mt-1 hover:text-orange-400 line-clamp-2"
            >
              {anime.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
