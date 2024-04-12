"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";

export default function CardSkeleton() {
  const { width } = useWindowSize();

  //   Needed to fix the skeleton width on bigger screens >= 1700px.
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton
        className={cn(
          width && width >= 1700 ? "w-[280px]" : "",
          "w-[160px] sm:w-[200px] md:w-[160px] lg:w-[170px] xl:w-[190px] 2xl:w-[230px] 3xl:w-[270px] h-[260px] sm:h-[260px] md:h-[240px] lg:h-[270px] xl:h-[330px] 2xl:h-[390px] rounded-sm"
        )}
      />
      <div className="space-y-2">
        <Skeleton
          className={cn("h-3 w-[80px] xl:w-[160px] 2xl:w-[190px] rounded-sm")}
        />
        <Skeleton
          className={cn("h-4 w-[100px] xl:w-[170px] 2xl:w-[210px] rounded-sm")}
        />
      </div>
    </div>
  );
}
