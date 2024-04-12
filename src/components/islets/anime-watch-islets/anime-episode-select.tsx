import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAnimeEpisodeChange } from "@/states/useAnimeEpisodeChange";

interface EpisodeGroup {
  label: string;
  value: number;
}

interface Props {
  totalEpisodes: number;
}

const EpisodeSelect: React.FC<Props> = ({ totalEpisodes }) => {
  const [startIndex, setCurrentIndex] = useAnimeEpisodeChange((state) => [
    state.startIndex,
    state.setCurrentIndex,
  ]);
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
    setCurrentIndex(parseInt(value as string));
  };

  return (
    <Select onValueChange={handleEpisodeChange} value={`${startIndex}`}>
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

export default EpisodeSelect;
