import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { Hyperlink } from '~/components/Hyperlink';
import { Icon } from '~/components/Icon';
import { PausePlayButton } from '~/components/Audio/components/PausePlayButton';
import { SeekButton } from '~/components/Audio/components/SeekButton';
import type { AudioFooterProps } from './AudioFooter.types';
import styles from './AudioFooter.module.css';

const AudioFooter = React.memo<AudioFooterProps>(
  ({
    audioUrl,
    copy = {},
    duration,
    isLoading,
    isPlaying,
    onSeekBackwardButtonClick,
    onSeekForwardButtonClick,
    onPlayPauseButtonClick,
    progress,
    progressColor = 'orange',
  }) => {
    return (
      <footer className={cx(styles.base, styles[progressColor])}>
        <time className={cx(styles.time, { [styles.disabled]: isLoading })}>
          {moment.utc(progress * 1000).format('mm:ss')} /{' '}
          {moment.utc(duration * 1000).format('mm:ss')}
        </time>
        <div className={styles.controls}>
          <SeekButton
            copy={{
              title: copy.seekForward,
            }}
            direction="forward"
            isLoading={isLoading}
            onClick={onSeekForwardButtonClick}
            progressColor={progressColor}
          />
          <PausePlayButton
            copy={{
              loading: copy.loading,
              pause: copy.pause,
              play: copy.play,
            }}
            isLoading={isLoading}
            isPlaying={isPlaying}
            onClick={onPlayPauseButtonClick}
            progressColor={progressColor}
          />
          <SeekButton
            copy={{
              title: copy.seekBackward,
            }}
            direction="backward"
            isLoading={isLoading}
            onClick={onSeekBackwardButtonClick}
            progressColor={progressColor}
          />
        </div>
        <div className={styles.download}>
          <Hyperlink
            className={styles.downloadButton}
            hasTargetInNewWindow={true}
            isDownload={true}
            style={HYPERLINK_STYLE_TYPES.EXTERNAL_NO_ICON_TEXT_LINK}
            title={copy.downloadTitle}
            url={audioUrl}
          >
            {`${copy.downloadLabel} `}
            <Icon
              className={styles.downloadButtonIcon}
              height={13}
              name="download"
              width={13}
            />
          </Hyperlink>
        </div>
      </footer>
    );
  },
);

export { AudioFooter };
