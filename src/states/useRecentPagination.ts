import axios from "axios";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

import { RecentAnimeRequestTypes } from "@/lib/types";
import { API_HOST_CLIENT, GOGOANIME_ENDPOINT, ANIME } from "@/config";

type State = {
  page: number;
};

type Action = {
  setPage: (page: number) => void;
  fetchRecentAnime: (page: number) => Promise<RecentAnimeRequestTypes>;
};

const initialState: State = {
  page: 1,
};

export const useRecentPagination = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setPage: (page: number) => set({ page }),
    fetchRecentAnime: async (page: number) => {
      const { data } = await axios.get(
        `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/recent-episodes`,
        { params: { page: page } }
      );

      return data;
    },
    shallow,
  })
);
