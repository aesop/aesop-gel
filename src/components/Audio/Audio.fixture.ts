import { AudioProps } from './Audio.types';

const AudioFixture: AudioProps = {
  audioUrl: './assets/audio/Istros_Imagined.mp3',
  artistName: 'Jesse Paris Smith',
  className: undefined,
  copy: {
    loading: 'Loading audio file',
    play: 'Play',
    pause: 'Pause',
    downloadLabel: 'Download Music',
    downloadTitle: 'Download Music',
    seekForward: 'Seek Forward',
    seekBackward: 'Seek Backward',
  },
  hasAutoPlay: false,
  id: 'Istros Imagined',
  progressColor: 'orange',
  trackTitle: 'Istros Imagined',
};

export { AudioFixture };
