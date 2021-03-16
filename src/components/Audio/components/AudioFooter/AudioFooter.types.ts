import type { AudioCopy, ProgressColor } from '../../Audio.types';

type OnPlayPauseButtonClick = () => void;
type OnSeekBackwardButtonClick = () => void;
type OnSeekForwardButtonClick = () => void;

type AudioFooterProps = {
  audioUrl?: string;
  copy?: AudioCopy;
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
