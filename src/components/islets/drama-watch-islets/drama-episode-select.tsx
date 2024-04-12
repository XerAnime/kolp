import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDramaEpisodeChange } from "@/states/useDramaEpisodeChange";

interface EpisodeGroup {
  label: string;
  value: number;
}

interface Props {
  totalEpisodes: number;
}

const DramaEpisodeChange: React.FC<Props> = ({ totalEpisodes }) => {
  const [startIndexDrama, setCurrentIndexDrama] = useDramaEpisodeChange(
    (state) => [state.startIndexDrama, state.setCurrentIndexDrama]
  );
  const episodeGroups: EpisodeGroup[] = [];

  for (let i = 1; i <= totalEpisodes; i += 20) {
    const start = i;
    const end = Math.min(i + 19, totalEpisodes);
    episodeGroups.push({
      label: `E${start} - E${end}`,
      value: start,
    });
  }

  const handleEpisodeChange = (value: string | undefined) => {
    setCurrentIndexDrama(parseInt(value as string));
  };

  return (
    <Select onValueChange={handleEpisodeChange} value={`${startIndexDrama}`}>
      <SelectTrigger className="w-[100px] md:w-[150px]">
        <SelectValue placeholder="Episode" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {episodeGroups.map((group) => (
            <SelectItem key={group.value} value={`${group.value}`}>
              {group.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DramaEpisodeChange;
