import React from 'react';
import { Heading } from '~/components/Heading';
import type { AudioHeaderProps } from './AudioHeader.types';
import styles from './AudioHeader.module.css';

const AudioHeader = React.memo<AudioHeaderProps>(props => (
  <header className={styles.base}>
    <Heading
      className={styles.artistName}
      isFlush={true}
      level="3"
      size="xXSmall"
    >
      {props.artistName}
    </Heading>
    <Heading hasSerifFont={true} isFlush={true} level="4" size="medium">
      {props.trackTitle}
    </Heading>
  </header>
));

export { AudioHeader };
