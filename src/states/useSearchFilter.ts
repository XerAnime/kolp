import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  filter: string;
};

type Action = {
  setFilter: (filter: string) => void;
  isActiveAnime: () => boolean;
  isActiveDrama: () => boolean;
};

const initialState: State = {
  filter: "",
};

export const useSearchFilter = createWithEqualityFn<State & Action>()(
  (set, get) => ({
    ...initialState,
    setFilter: (filter: string) => set({ filter }),
    isActiveAnime: () => {
      return get().filter === "anime";
    },
    isActiveDrama: () => {
      return get().filter === "drama";
    },
    shallow,
  })
);
