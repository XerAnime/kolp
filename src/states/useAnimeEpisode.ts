import axios from "axios";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type State = {
  episode: string;
  quality: string | undefined;
  server: string;
  source: string;
};

type Action = {
  setEpisode: (episode: string) => void;
  setQuality: (quality: string | undefined) => void;
  setServer: (server: string) => void;
  setSource: (source: string) => void;
};

const initialState: State = {
  episode: "",
  quality: "default",
  server: "",
  source: "",
};

export const useAnimeEpisode = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initialState,
    setEpisode: (episode: string) => set({ episode }),
    setQuality: (quality: string | undefined) => set({ quality }),
    setServer: (server: string) => set({ server }),
    setSource: (source: string) => set({ source }),
    shallow,
  })
);
