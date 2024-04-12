import { useEffect } from "react";
import { useDramaEpisodeChange } from "@/states/useDramaEpisodeChange";

function useResetPlayerDramaState() {
  const setCurrentIndexDrama = useDramaEpisodeChange(
    (state) => state.setCurrentIndexDrama
  );

  const reset = () => {
    setCurrentIndexDrama(1);
  };

  useEffect(() => {
    reset();
  }, []);

  return reset;
}

export default useResetPlayerDramaState;
