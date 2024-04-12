import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { RecentAnimeTypes } from "@/lib/types";

type State = {
  startIndex: number;
  endIndex: number;
};

type Action = {
  setCurrentIndex: (episode: number) => void;
};

const initialState: State = {
  startIndex: 1,
  endIndex: 20,
};

export const useAnimeEpisodeChange = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setCurrentIndex: (episode: number) => {
      set({ startIndex: episode });
      set({ endIndex: episode + 19 });
    },
    shallow,
  })
);
