import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  type: "Anime" | "Drama" | string;
};

type Action = {
  setType: (type: string) => void;
};

const initialState: State = {
  type: "",
};

export const useWatchListType = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setType: (type: string) => set({ type }),
    shallow,
  })
);
