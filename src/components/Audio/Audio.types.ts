type ProgressColor = 'orange' | 'green' | 'blue';

type AudioProps = {
  audioUrl?: string;
  artistName?: string;
  className?: string;
  copy?: {
    downloadLabel?: string;
    downloadTitle?: string;
    loading?: string;
    pause?: string;
    play?: string;
    seekBackward?: string;
    seekForward?: string;
  };
  hasAutoPlay?: boolean;
  id?: string;
  progressColor?: ProgressColor;
  trackTitle?: string;
};

export type { AudioProps, ProgressColor };
