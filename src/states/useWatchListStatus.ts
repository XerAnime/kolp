import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  status:
    | "Watching"
    | "Completed"
    | "Dropped"
    | "On-Hold"
    | "Plan to watch"
    | string;
};

type Action = {
  setStatus: (status: string) => void;
};

const initialState: State = {
  status: "",
};

export const useWatchListStatus = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setStatus: (status: string) => set({ status }),
    shallow,
  })
);
