import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DefaultLayoutIcons } from "@vidstack/react/player/layouts/default";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Volume1,
  VolumeX,
  PictureInPicture2,
  PictureInPicture,
  Maximize,
  Minimize,
  ArrowLeft,
  AudioLines,
  ListVideo,
  Gauge,
  Type,
  ChevronRight,
} from "lucide-react";
import { IconBadgeCc, IconSettings, IconBadge4k } from "@tabler/icons-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function encodeUrlPart(url: string) {
  const prefixIndex = url.indexOf("/", url.indexOf("/") + 1) + 1; // Find second '/'
  const partToEncode = url.substring(prefixIndex);
  return url.substring(0, prefixIndex) + encodeURIComponent(partToEncode);
}

export function isEncoded(uri: string) {
  uri = uri || ""; // Handle empty input
  return uri !== decodeURIComponent(uri);
}

export const customPlayerIcons: Partial<DefaultLayoutIcons> = {
  PlayButton: {
    Play: Play,
    Pause: Pause,
    Replay: RotateCcw,
  },
  MuteButton: {
    Mute: VolumeX,
    VolumeLow: Volume1,
    VolumeHigh: Volume2,
  },
  PIPButton: {
    Enter: PictureInPicture,
    Exit: PictureInPicture2,
  },
  FullscreenButton: {
    Enter: Maximize,
    Exit: Minimize,
  },
  Menu: {
    ArrowLeft: ArrowLeft,
    ArrowRight: ChevronRight,
    Audio: AudioLines,
    Chapters: ListVideo,
    Quality: IconBadge4k,
    Captions: IconBadgeCc,
    Settings: IconSettings,
    Speed: Gauge,
    Font: Type,
  },
};