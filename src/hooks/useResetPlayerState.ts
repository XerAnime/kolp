import { useEffect } from "react";
import { useAnimeEpisodeChange } from "@/states/useAnimeEpisodeChange";

function useResetPlayerState() {
  const setCurrentIndex = useAnimeEpisodeChange(
    (state) => state.setCurrentIndex
  );

  const reset = () => {
    setCurrentIndex(1);
  };

  useEffect(() => {
    reset();
  }, []);

  return reset;
}

export default useResetPlayerState;
