"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAnimeStreamingLinks } from "@/lib/anime";
import RenderVideoAnime from "./anime-render-video";

interface AnimePlayerProps {
  episodeId: string;
  cover: string;
}

const AnimePlayer: React.FC<AnimePlayerProps> = ({ episodeId, cover }) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const episodeParams = searchParams.get("ep") || "";

  const selectedEpisode = episodeParams || episodeId;

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["streamingLinks", selectedEpisode],
    queryFn: () => fetchAnimeStreamingLinks(selectedEpisode),
    refetchOnWindowFocus: false,
    enabled: !!selectedEpisode, // Only fetch data if selectedEpisode is provided
  });

  useEffect(() => {
    // Invalidate the query when the selected episode changes
    queryClient.invalidateQueries({
      queryKey: ["streamingLinks", selectedEpisode],
    });
  }, [queryClient, selectedEpisode]);

  return (
    <div className="relative backdrop-blur-xl bg-background">
      <img
        src={cover}
        alt="Background"
        className="absolute h-full w-full object-cover blur-lg opacity-20"
      />
      <div className="relative px-0 md:px-10 lg:px-16">
        <RenderVideoAnime
          data={data}
          cover={cover}
          isFetching={isFetching}
          status={status}
          error={error}
        />
      </div>
    </div>
  );
};

export default AnimePlayer;
