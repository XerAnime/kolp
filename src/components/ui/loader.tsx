import React from "react";
import { Spinner } from "./spinner";

const Loader = () => {
  return (
    <div className="flex h-[calc(100vh-56px)] items-center justify-center">
      <Spinner className="text-orange-400" size={45} />
    </div>
  );
};

export default Loader;
