import { useEffect, useRef, useState } from 'react';
import throttle from 'lodash/throttle';
import { COLORS } from '~/constants';
import { getProgressColorHex } from './Audio.utils';
import type { ProgressColor } from './Audio.types';

const useWaveSurfer = (progressColor: ProgressColor, hasAutoPlay: boolean) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    import('wavesurfer.js').then(module => {
      const WaveSurfer = module.default || module;

      if (waveformRef.current) {
        wavesurfer.current = WaveSurfer.create({
          backend: 'MediaElement',
          barGap: 2,
          barWidth: 1,
          container: waveformRef.current,
          cursorColor: 'transparent',
          cursorWidth: 1,
          height: 80,
          progressColor: getProgressColorHex(progressColor, COLORS),
          responsive: true,
          skipLength: 30,
          waveColor: COLORS.GREY_60,
        });

        wavesurfer.current.load(trackRef.current);

        const updateProgress = throttle(currentProgress => {
          setProgress(currentProgress);
        }, 1000);

        const setCurrentDuration = () => {
          setDuration(wavesurfer.current.getDuration());
        };

        const onReady = () => {
          setIsLoading(false);
          setCurrentDuration();

          if (hasAutoPlay) {
            togglePlaying();
          }
        };

        wavesurfer.current.on('audioprocess', updateProgress);
        wavesurfer.current.on('waveform-ready', onReady);

        return function cleanup() {
          wavesurfer.current.unAll();
          wavesurfer.current.destroy();
        };
      }
    });
  }, [progressColor, hasAutoPlay]); // eslint-disable-line

  function togglePlaying() {
    setIsPlaying(state => !state);
    wavesurfer.current.playPause();
  }

  return {
    duration,
    isLoading,
    isPlaying,
    progress,
    togglePlaying,
    trackRef,
    waveformRef,
    wavesurfer,
  };
};

export { useWaveSurfer };
