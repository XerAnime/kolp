import axios from "axios";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import {
  API_HOST_CLIENT,
  ANIME,
  GOGOANIME_ENDPOINT,
  MOVIE,
  DRAMA_COOL,
} from "@/config";
import { AnimeResultRequestTypes, DramaResultRequestTypes } from "@/lib/types";

type State = {
  searchQuery: string;
};

type Action = {
  setSearchQuery: (query: string) => void;
  searchAnime: (query: string) => Promise<AnimeResultRequestTypes>;
  searchDrama: (query: string) => Promise<DramaResultRequestTypes>;
};

const initialState: State = {
  searchQuery: "",
};

export const useSearch = createWithEqualityFn<State & Action>()((set, get) => ({
  ...initialState,
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  searchAnime: async (query: string) => {
    const { data } = await axios.get(
      `${API_HOST_CLIENT + ANIME + GOGOANIME_ENDPOINT}/${query}`
    );

    return data;
  },
  searchDrama: async (query: string) => {
    const { data } = await axios.get(
      `${API_HOST_CLIENT + MOVIE + DRAMA_COOL}/${query}`
    );

    return data;
  },
  shallow,
}));
