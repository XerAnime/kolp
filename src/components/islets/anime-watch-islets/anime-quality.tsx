"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAnimeEpisode } from "@/states/useAnimeEpisode";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

const AnimeQuality: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  const [episode, quality, setQuality] = useAnimeEpisode((state) => [
    state.episode,
    state.quality,
    state.setQuality,
  ]);

  const {
    status,
    data: animeQuality,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["animequality", id],
    queryFn: () => fetchAnimeStreamingLinks(id),
    refetchOnWindowFocus: false,
  });

  const fetchAnimeStreamingLinks = async (id: string) => {
    const { data } = await axios.get(
      `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/watch/${id}`
    );

    return data.sources;
  };

  const handleQualityClick = (quality: string | undefined) => {
    router.push(`?ep=${id}&q=${quality}`, { scroll: false });
    setQuality(quality);
  };

  if (isFetching) {
    return <Skeleton className="h-10 w-[140px] md:w-[230px]" />;
  }

  if (status === "error") {
    return <div className="flex items-center">No quality found.</div>;
  }

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="quality">Quality: </Label>
      <Select onValueChange={handleQualityClick} value={quality}>
        <SelectTrigger className="w-[100px] md:w-[180px]">
          <SelectValue placeholder="Select a quality" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {animeQuality?.map((sources: any) => (
              <SelectItem key={sources.url} value={sources.quality}>
                {sources.quality}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AnimeQuality;
