import type { ProgressColor } from '../../Audio.types';
import type {
  OnSeekBackwardButtonClick,
  OnSeekForwardButtonClick,
} from '../AudioFooter/AudioFooter.types';

type SeekButtonProps = {
  copy: {
    title: string;
  };
  direction: 'forward' | 'backward';
  isLoading: boolean;
  onClick: OnSeekBackwardButtonClick | OnSeekForwardButtonClick;
  progressColor: ProgressColor;
};

export type { SeekButtonProps };
