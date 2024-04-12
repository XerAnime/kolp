import React from "react";
import { useQuery } from "@tanstack/react-query";
import AddToWatchList from "@/components/add-to-watchlist";
import EditWatchlist from "@/components/edit-watchlist";
import { getUserWatchListInfo } from "@/lib/watchList";

interface AddToWatchListProps {
  listId: string;
  title: string;
  image: string;
  episode: number;
  episodeId: string;
  iconOnly?: boolean;
  decode?: boolean;
}

const DramaWatchList: React.FC<AddToWatchListProps> = ({
  listId,
  title,
  image,
  episode,
  episodeId,
  iconOnly,
  decode = false,
}) => {
  const newId = decode ? decodeURIComponent(listId) : listId;

  const { data, status } = useQuery({
    queryKey: ["watchList", newId],
    queryFn: () => getUserWatchListInfo(newId),
  });

  if (data && status === "success") {
    return (
      <EditWatchlist
        listId={listId}
        title={title}
        selectedStatus={data.status}
        iconOnly={iconOnly}
      />
    );
  }

  return (
    !iconOnly && (
      <AddToWatchList
        listId={newId}
        title={title}
        image={image}
        type="drama"
        episode={episode}
        episodeId={episodeId}
      />
    )
  );
};

export default DramaWatchList;
