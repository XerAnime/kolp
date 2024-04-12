"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Img } from "@/components/ui/img";
import { AnimeResultTypes } from "@/lib/types";

interface AnimeResultProps {
  data: AnimeResultTypes[] | undefined;
}

const AnimeResult: React.FC<AnimeResultProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-3 2xl:gap-5">
      {data?.map((anime: AnimeResultTypes) => (
        <div
          key={anime.id}
          className="cursor-pointer xs:w-[190px] sm:w-[200px] md:w-full"
        >
          <Img
            className="rounded-sm w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
            src={anime.image}
            alt={anime.title}
            onClick={() => router.push(`/anime/${anime.id}`)}
          />
          <div className="mt-2 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">{anime.subOrDub}</p>
          </div>
          <Link
            href={`/anime/${anime.id}`}
            className="mt-1 hover:text-orange-400"
          >
            {anime.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AnimeResult;
