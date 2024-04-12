import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  startIndexDrama: number;
  endIndexDrama: number;
};

type Action = {
  setCurrentIndexDrama: (episode: number) => void;
};

const initialState: State = {
  startIndexDrama: 1,
  endIndexDrama: 20,
};

export const useDramaEpisodeChange = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setCurrentIndexDrama: (episode: number) => {
      set({ startIndexDrama: episode });
      set({ endIndexDrama: episode + 19 });
    },
    shallow,
  })
);
