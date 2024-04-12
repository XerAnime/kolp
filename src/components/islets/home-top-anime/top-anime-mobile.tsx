import { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ScrollerMobileView,
  ScrollerMobileContent,
  ScrollerMobileWrapper,
} from "@/components/layouts/scroller-mobile-view";
import { Img } from "@/components/ui/img";
import { TopAnimeTypes } from "@/lib/types";

type Props = {
  topAnime: TopAnimeTypes[];
};

export const TopAnimeMobileView: FC<Props> = ({ topAnime }) => {
  const router = useRouter();
  return (
    <ScrollerMobileView>
      <ScrollerMobileWrapper>
        {topAnime.slice(0, 12).map((anime: TopAnimeTypes) => (
          <ScrollerMobileContent key={anime.id}>
            <Img
              className="rounded-sm w-[190px] h-[270px]"
              src={anime.image}
              alt={anime.title}
              onClick={() => router.push(`/anime/${anime.id}`)}
            />
            <div className="mt-2 flex justify-between items-center">
              <div className="flex">
                {anime.genres.slice(0, 2).map((genre: string) => (
                  <p
                    key={genre}
                    className="text-xs xl:text-sm text-muted-foreground mr-1 xl:mr-2"
                  >
                    {genre}
                  </p>
                ))}
              </div>
            </div>
            <Link
              href={`/anime/${anime.id}`}
              className="mt-1 mb-2 line-clamp-1 text-wrap"
            >
              {anime.title}
            </Link>
          </ScrollerMobileContent>
        ))}
      </ScrollerMobileWrapper>
    </ScrollerMobileView>
  );
};
