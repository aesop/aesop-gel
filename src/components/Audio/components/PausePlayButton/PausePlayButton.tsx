import React from 'react';
import cx from 'classnames';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import type { PausePlayButtonProps } from './PausePlayButton.types';
import styles from './PausePlayButton.module.css';

const PausePlayButton = React.memo<PausePlayButtonProps>(
  ({
    copy = {},
    isLoading = false,
    isPlaying = false,
    onClick,
    progressColor = 'orange',
  }) => (
    <Button
      className={cx(styles.base, styles[progressColor], {
        [styles.disabled]: isLoading,
      })}
      isEnabled={!isLoading}
      isInline={true}
      onClick={onClick}
      title={isLoading ? copy.loading : !isPlaying ? copy.play : copy.pause}
    >
      <Icon
        className={cx(
          styles.iconPlay,
          { [styles.hidden]: isPlaying },
          { [styles.disabled]: isLoading },
        )}
        height={15}
        name="play"
        theme="dark"
        width={15}
      />
      <Icon
        className={cx(
          styles.iconPause,
          { [styles.hidden]: !isPlaying },
          { [styles.disabled]: isLoading },
        )}
        height={15}
        name="pause"
        theme="dark"
        width={15}
      />
    </Button>
  ),
);

export { PausePlayButton };
