import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { AnimeWatchList } from "../anime-info-islets";
import { Description } from "@/components/ui/description";

interface AnimeDetailsProps {
  id: string;
  title: string;
  subOrDub: string;
  status: string;
  description: string | null;
  image: string;
  episode: number;
  episodeId: string;
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({
  id,
  title,
  subOrDub,
  status,
  description,
  image,
  episode,
  episodeId,
}) => {
  return (
    <div className="mt-10 lg:mt-0 lg:col-span-2">
      <Link href={`/anime/${id}`} className="text-lg text-orange-400">
        {title}
      </Link>
      <p className="text-muted-foreground text-md">{subOrDub}</p>
      <p className="mb-3">{status}</p>
      {/* <Button
        className="mt-3 border-2 rounded-none font-semibold uppercase"
        variant="outline_orange"
      >
        <Bookmark className="mr-2 h-4 w-4" strokeWidth="3px" />
        Add To Library
      </Button> */}
      <AnimeWatchList
        listId={id}
        title={title}
        image={image}
        episode={episode}
        episodeId={episodeId}
      />
      <Description className="mt-3" message={description} />
    </div>
  );
};

export default AnimeDetails;
