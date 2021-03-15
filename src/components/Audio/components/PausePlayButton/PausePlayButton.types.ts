import type { ProgressColor } from '../../Audio.types';
import type { OnPlayPauseButtonClick } from '../AudioFooter/AudioFooter.types';

type PausePlayButtonProps = {
  copy?: {
    loading?: string;
    pause?: string;
    play?: string;
  };
  isLoading?: boolean;
  isPlaying?: boolean;
  onClick?: OnPlayPauseButtonClick;
  progressColor?: ProgressColor;
};

export type { PausePlayButtonProps };
