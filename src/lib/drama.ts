import axios from "axios";
import { API_HOST_CLIENT, DRAMA_COOL, MOVIE } from "@/config";

export const fetchDramaStreamingLinks = async (
  episode: string,
  mediaId: string
): Promise<any> => {
  const { data } = await axios.get(
    `${API_HOST_CLIENT + MOVIE + DRAMA_COOL}/watch`,
    { params: { episodeId: episode, mediaId: mediaId } }
  );

  return data;
};
