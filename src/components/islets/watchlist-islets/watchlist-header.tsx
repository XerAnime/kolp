import React from "react";
import StatusFilter from "./status-filter";
import TypeFilter from "./type-filter";

const WatchListHeader = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <h2 className="font-semibold text-xl md:text-2xl text-orange-400">
        WatchList
      </h2>

      <div className="flex items-center space-x-2 cursor-pointer">
        <TypeFilter />
        <StatusFilter />
      </div>
    </div>
  );
};

export default WatchListHeader;
