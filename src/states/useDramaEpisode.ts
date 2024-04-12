import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  dramaEpisode: string;
};

type Action = {
  setDramaEpisode: (episode: string) => void;
};

const initialState: State = {
  dramaEpisode: "",
};

export const useDramaEpisode = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setDramaEpisode: (episode: string) => set({ dramaEpisode: episode }),
    shallow,
  })
);
