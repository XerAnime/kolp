import React from "react";

const RecentSearches = () => {
  return (
    <div className="w-full lg:w-[1000px] m-auto mt-10">
      <div className="flex  justify-between items-center">
        <h2>Recent Search</h2>
        <h2 className="text-muted-foreground cursor-pointer">Clear Recent</h2>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <div className="bg-orange-400 text-primary-foreground p-1 px-3">
          Classroom of the Elite
        </div>
      </div>
    </div>
  );
};

export default RecentSearches;
