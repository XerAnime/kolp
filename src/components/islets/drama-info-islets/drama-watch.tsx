"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getUserWatchListInfo } from "@/lib/watchList";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface AnimeWatchProps {
  listId: string;
}

const DramaWatch: React.FC<AnimeWatchProps> = ({ listId }) => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["watchList", listId],
    queryFn: () => getUserWatchListInfo(encodeURIComponent(listId)),
  });

  if (data) {
    return (
      <Button
        variant="orange"
        onClick={() =>
          router.push(
            `/drama/watch/${encodeURIComponent(listId)}?dEp=${data.episodeId}`
          )
        }
      >
        <Play className="mr-2 h-4 w-4" strokeWidth="3px" />
        EP {data.episode}
      </Button>
    );
  }

  return (
    <Button
      variant="orange"
      onClick={() => router.push(`/drama/watch/${encodeURIComponent(listId)}`)}
    >
      <Play className="mr-2 h-4 w-4" strokeWidth="3px" />
      Watch Now
    </Button>
  );
};

export default DramaWatch;
