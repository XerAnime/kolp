"use client";
import React, { useRef } from "react";
import VPlayer from "vnetwork-player";
import Hls from "hls.js";
import "vnetwork-player/dist/vnetwork-player.min.css";

interface Props {
  data: Array<{ label: string; url: string }>;
  subtitles?: Array<{ lang: string; url: string }>;
  image: string;
  autoPlay?: boolean;
}

const PlayerWrapper: React.FC<Props> = ({
  data,
  subtitles,
  image,
  autoPlay = false,
}) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  return (
    <VPlayer
      Hls={Hls}
      source={data}
      subtitle={subtitles}
      color="#db8b3c"
      poster={image}
      playerRef={playerRef}
      autoPlay={autoPlay}
    />
  );
};

export default PlayerWrapper;
