import type { ProgressColor } from '../../Audio.types';

type OnPlayPauseButtonClick = () => void;
type OnSeekBackwardButtonClick = () => void;
type OnSeekForwardButtonClick = () => void;

type AudioFooterProps = {
  audioUrl?: string;
  copy?: {
    downloadTitle?: string;
    downloadLabel?: string;
    loading?: string;
    pause?: string;
    play?: string;
    seekBackwardTitle?: string;
    seekForwardTitle?: string;
  };
  duration?: number;
  isLoading?: boolean;
  isPlaying?: boolean;
  onSeekBackwardButtonClick?: OnSeekBackwardButtonClick;
  onSeekForwardButtonClick?: OnSeekForwardButtonClick;
  onPlayPauseButtonClick?: OnPlayPauseButtonClick;
  progress?: number;
  progressColor?: ProgressColor;
};

export type {
  AudioFooterProps,
  OnPlayPauseButtonClick,
  OnSeekBackwardButtonClick,
  OnSeekForwardButtonClick,
};
