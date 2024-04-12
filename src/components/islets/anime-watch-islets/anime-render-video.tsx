import React from "react";
import Player from "@/components/ui/player";
import Ripple from "@/components/ui/ripple";
import { Img } from "@/components/ui/img";

interface RenderVideoProps {
  data: any;
  cover: string;
  isFetching: boolean;
  status: string;
  error: any;
}

const RenderVideoAnime: React.FC<RenderVideoProps> = ({
  data,
  cover,
  isFetching,
  error,
  status,
}) => {
  if (status === "error") {
    console.log(error);
    return (
      <div className="flex justify-center items-center h-[250px] sm:h-[330px] md:h-[450px] lg:h-[570px] xl:h-[660px]">
        <div className="flex flex-col items-center space-y-2">
          <Img src="/images/error.png" alt="Error" className="w-24 h-24" />
          <h1>There&apos;s an error playing video.</h1>
        </div>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[260px] sm:h-[340px] md:h-[460px] lg:h-[580px] xl:h-[670px]">
        <Ripple />
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="w-full 2xl:w-3/4 m-auto mt-0">
        <Player
          src={
            data?.sources?.filter((item: any) => item.quality === "default")[0]
              .url
          }
        />
      </div>
    );
  }

  return null;
};

export default RenderVideoAnime;
