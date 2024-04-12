"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Img } from "@/components/ui/img";
import { DramaResultTypes } from "@/lib/types";

interface DramaResultProps {
  data: DramaResultTypes[] | undefined;
}

const DramaResult: React.FC<DramaResultProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-3 2xl:gap-5">
      {data?.map((drama: DramaResultTypes) => (
        <div
          key={drama.id}
          className="cursor-pointer xs:w-[190px] sm:w-[200px] md:w-full"
        >
          <Img
            className="rounded-sm w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[300px] 2xl:h-[390px]"
            src={drama.image}
            alt={drama.title}
            onClick={() =>
              router.push(`/drama/${encodeURIComponent(drama.id)}`)
            }
          />
          <div className="mt-2 flex justify-between items-center">
            <div className="flex space-x-1">
              <p className="text-sm text-muted-foreground">{drama.type}</p>
              <p className="text-sm text-muted-foreground">
                {drama.releaseDate}
              </p>
            </div>
          </div>
          <Link
            href={`/drama/${encodeURIComponent(drama.id)}`}
            className="mt-1 hover:text-orange-400"
          >
            {drama.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DramaResult;
