import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/customHooks/useOverflowHidden';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import { ascertainIsSmallOrMediumOnlyViewport } from '~/utils/viewports';
import Image from '~/components/Image';
import Controls from './components/Controls';
import Poster from './components/Poster';
import VideoPlayer from './components/VideoPlayer';
import styles from './Video.module.css';

export const Video = forwardRef(
  (
    {
      className,
      copy,
      fallbackImage,
      hasControls,
      hasAllowAudio,
      hasAutoplay,
      hasLoop,
      hasPlayInFullScreen,
      id,
      isFullWidth,
      large,
      medium,
      poster,
      small,
      title,
    },
    ref,
  ) => {
    const [isPlaying, setIsPlaying] = useState(hasAutoplay);
    const [hasActiveVideo, setHasActiveVideo] = useState(hasAutoplay);
    const [progress, setProgress] = useState(0);
    const isMobileOrTablet = ascertainIsSmallOrMediumOnlyViewport();

    const videoRef = useRef();

    useWindowHasResized();

    useOverflowHidden(
      hasActiveVideo && hasPlayInFullScreen && !isMobileOrTablet,
    );

    useEffect(() => {
      const videoRefCurrent = videoRef.current;

      const handleProgress = () => {
        const percent =
          videoRefCurrent.currentTime && videoRefCurrent.duration
            ? (videoRefCurrent.currentTime / videoRefCurrent.duration) * 100
            : 0;

        setProgress(percent);
      };

      if (videoRefCurrent) {
        videoRefCurrent.addEventListener('timeupdate', handleProgress);
      }

      return function cleanup() {
        if (videoRefCurrent) {
          videoRefCurrent.removeEventListener('timeupdate', handleProgress);
        }
      };
    });

    const pauseVideo = () => {
      videoRef.current.pause();
      setIsPlaying(false);
    };

    const stopVideo = () => {
      videoRef.current.pause();
      setIsPlaying(false);
      setHasActiveVideo(false);

      window.setTimeout(() => {
        videoRef.current.currentTime = 0;
        videoRef.current.load();
        setProgress(0);
      }, 500);
    };

    const playVideo = () => {
      videoRef.current.play();
      setIsPlaying(true);
      setHasActiveVideo(true);
    };

    useEscapeKeyListener(stopVideo);

    const hasVideo = large || medium || small;

    const hanldeOnPosterClick = () => playVideo();

    const handlePlayPauseButtonOnClick = isPlaying ? pauseVideo : playVideo;

    const classSet = cx(styles.base, className, {
      [styles.fullWidth]: isFullWidth,
    });

    if (!hasVideo && fallbackImage) {
      return (
        <figure className={classSet} id={id} ref={ref}>
          <Image
            altText={fallbackImage.copy.altText}
            className={cx(styles.fallbackImage, fallbackImage.className)}
            large={fallbackImage.large}
            medium={fallbackImage.medium}
            small={fallbackImage.small}
          />
        </figure>
      );
    }

    return (
      <figure className={classSet} id={id} ref={ref} role="group">
        <VideoPlayer
          hasActiveVideo={hasActiveVideo}
          hasAllowAudio={hasAllowAudio}
          hasAutoplay={hasAutoplay}
          hasLoop={hasLoop}
          hasPlayInFullScreen={hasPlayInFullScreen}
          isActive={!poster || hasActiveVideo}
          large={large}
          medium={medium}
          ref={videoRef}
          small={small}
        />

        <Poster
          copy={{
            playButtonTitle: copy.playButtonTitle,
            altText: poster.copy.altText,
          }}
          isActive={!hasActiveVideo}
          large={poster.large}
          medium={poster.medium}
          onClick={hanldeOnPosterClick}
          small={poster.small}
        />

        {hasControls && (
          <Controls
            copy={{
              closeButtonTitle: copy.closeButtonTitle,
              pauseButtonTitle: copy.pauseButtonTitle,
              playButtonTitle: copy.playButtonTitle,
            }}
            hasActiveVideo={hasActiveVideo}
            hasPlayInFullScreen={hasPlayInFullScreen}
            isMobileOrTablet={isMobileOrTablet}
            isPlaying={isPlaying}
            onCloseButtonClick={stopVideo}
            onPlayPauseButtonClick={handlePlayPauseButtonOnClick}
            progress={progress}
            videoTitle={title}
          />
        )}
      </figure>
    );
  },
);

Video.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    closeButtonTitle: PropTypes.string,
    playButtonTitle: PropTypes.string,
    pauseButtonTitle: PropTypes.string,
  }),
  fallbackImage: PropTypes.shape({
    className: PropTypes.string,
    copy: PropTypes.shape({
      altText: PropTypes.string,
    }),
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
  }),
  hasControls: PropTypes.bool,
  hasAllowAudio: PropTypes.bool,
  hasAutoplay: PropTypes.bool,
  hasLoop: PropTypes.bool,
  hasPlayInFullScreen: PropTypes.bool,
  id: PropTypes.string,
  isFullWidth: PropTypes.bool,
  large: PropTypes.string,
  medium: PropTypes.string,
  poster: PropTypes.shape({
    className: PropTypes.string,
    copy: PropTypes.shape({
      playButtonTitle: PropTypes.string,
      altText: PropTypes.string,
    }),
    isActive: PropTypes.string,
    large: PropTypes.string,
    medium: PropTypes.string,
    onClick: PropTypes.func,
    small: PropTypes.string,
  }),
  small: PropTypes.string,
  title: PropTypes.string,
};

Video.defaultProps = {
  className: undefined,
  copy: {
    closeButtonTitle: 'Close',
    playButtonTitle: 'View video',
    pauseButtonTitle: 'Pause video',
  },
  fallbackImage: {
    className: undefined,
    copy: {
      altText: undefined,
    },
    large: undefined,
    medium: undefined,
    small: undefined,
  },
  hasControls: true,
  hasAllowAudio: false,
  hasAutoplay: false,
  hasLoop: true,
  hasPlayInFullScreen: false,
  id: undefined,
  isFullWidth: true,
  large: undefined,
  medium: undefined,
  poster: {
    className: undefined,
    copy: {
      playButtonTitle: undefined,
      altText: undefined,
    },
    isActive: undefined,
    large: undefined,
    medium: undefined,
    onClick: undefined,
    small: undefined,
  },
  small: undefined,
  title: undefined,
};

export default Video;