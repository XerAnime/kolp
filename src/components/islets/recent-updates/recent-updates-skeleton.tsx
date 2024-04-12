import React from "react";
import CardSkeleton from "@/components/ui/card-skeleton";

const dummyData = Array.from({ length: 12 }, (_, index) => index + 1);

const RecentUpdatesSkeleton = () => {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-5 2xl:gap-4">
      {dummyData.map((index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

export default RecentUpdatesSkeleton;
