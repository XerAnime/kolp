"use client";
import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import { useDramaEpisode } from "@/states/useDramaEpisode";
import { useDramaEpisodeChange } from "@/states/useDramaEpisodeChange";
import { Button } from "@/components/ui/button";
import { DramaEpisodeType } from "@/lib/types";
import DramaEpisodeChange from "./drama-episode-select";
import { updateUserWatchList } from "@/lib/watchList";

interface DramaEpisodesProps {
  dramaEpisodes: DramaEpisodeType[] | undefined;
  id: string;
  isWatchList: boolean;
}

const DramaEpisodes: React.FC<DramaEpisodesProps> = ({
  dramaEpisodes,
  id,
  isWatchList,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dramaEpisodeParams = searchParams.get("dEp") || "";

  const [setDramaEpisode, selectedDramaEpisode] = useDramaEpisode((state) => [
    state.setDramaEpisode,
    state.dramaEpisode,
  ]);
  const [startIndexDrama, endIndexDrama] = useDramaEpisodeChange((state) => [
    state.startIndexDrama,
    state.endIndexDrama,
  ]);

  const dramaEpisodesList = dramaEpisodes?.slice(
    startIndexDrama - 1,
    endIndexDrama
  );

  const updateMutation = useMutation({
    mutationFn: updateUserWatchList,
  });

  const handleEpisodeClick = (episode: string, epNumber: number) => {
    if (episode) {
      setDramaEpisode(episode);
    }
    if (isWatchList && episode) {
      updateMutation.mutate({
        episode: epNumber,
        episodeId: episode,
        listId: id,
      });
    }
    if (episode) {
      router.push(`?dEp=${episode}`);
    }
  };

  useEffect(() => {
    const selectedDramaEpisodeId = dramaEpisodeParams || dramaEpisodes?.[0]?.id;
    if (selectedDramaEpisodeId) {
      setDramaEpisode(selectedDramaEpisodeId);
    }

    if (dramaEpisodeParams && isWatchList) {
      const parts = dramaEpisodeParams.split("-");
      const episodeNumber = parseInt(parts[parts.length - 1]);
      updateMutation.mutate({
        episode: episodeNumber,
        episodeId: dramaEpisodeParams,
        listId: id,
      });
    }
  }, [dramaEpisodeParams, dramaEpisodes, isWatchList, id]);

  if (!dramaEpisodes?.length) {
    return <div className="mt-10 w-full">No episodes found.</div>;
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="mb-1">Episodes:</h1>
        <DramaEpisodeChange totalEpisodes={dramaEpisodes?.length || 0} />
      </div>
      <div className="flex flex-wrap">
        {dramaEpisodesList?.map((episode) => (
          <Button
            key={episode.id}
            className="mr-2 mt-2"
            variant={
              selectedDramaEpisode === episode.id ? "orange" : "secondary"
            }
            onClick={() => handleEpisodeClick(episode.id, episode.episode)}
          >
            {episode.episode}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DramaEpisodes;
