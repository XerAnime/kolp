import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ScrollerMobileView,
  ScrollerMobileContent,
  ScrollerMobileWrapper,
} from "@/components/layouts/scroller-mobile-view";
import { Img } from "@/components/ui/img";
import { RecentAnimeTypes } from "@/lib/types";

interface Props {
  recentAnime: RecentAnimeTypes[];
}

export function RecentAnimeMobileView({ recentAnime }: Props) {
  const router = useRouter();

  return (
    <ScrollerMobileView>
      <ScrollerMobileWrapper>
        {recentAnime.slice(0, 12).map((anime: RecentAnimeTypes) => (
          <ScrollerMobileContent key={anime.id}>
            <Img
              className="rounded-sm w-[190px] h-[270px]"
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
              className="mt-1 mb-2 line-clamp-1 text-wrap"
            >
              {anime.title}
            </Link>
          </ScrollerMobileContent>
        ))}
      </ScrollerMobileWrapper>
    </ScrollerMobileView>
  );
}
