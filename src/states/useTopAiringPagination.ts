import axios from "axios";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

import { TopAiringAnimeRequestType } from "@/lib/types";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";

type State = {
  topPage: number;
};

type Action = {
  setPage: (page: number) => void;
  fetchTopAnime: (page: number) => Promise<TopAiringAnimeRequestType>;
};

const initialState: State = {
  topPage: 1,
};

export const useTopAiringPagination = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setPage: (page: number) => set({ topPage: page }),
    fetchTopAnime: async (page: number) => {
      const { data } = await axios.get(
        `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/top-airing`,
        { params: { page: page } }
      );

      return data;
    },
    shallow,
  })
);
