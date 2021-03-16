type ProgressColor = 'orange' | 'green' | 'blue';

type AudioCopy = {
  downloadLabel?: string;
  downloadTitle?: string;
  loading?: string;
  pause?: string;
  play?: string;
  seekBackward?: string;
  seekForward?: string;
};

type AudioProps = {
  audioUrl?: string;
  artistName?: string;
  className?: string;
  copy?: AudioCopy;
  hasAutoPlay?: boolean;
  id?: string;
  progressColor?: ProgressColor;
  trackTitle?: string;
};

export type { AudioProps, ProgressColor, AudioCopy };
