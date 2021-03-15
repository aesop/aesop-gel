import React from 'react';
import cx from 'classnames';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { SeekButtonProps } from './SeekButton.types';
import styles from './SeekButton.module.css';

const SeekButton = React.memo<SeekButtonProps>(
  ({
    copy = {},
    direction = 'forward',
    isLoading = false,
    onClick,
    progressColor = 'orange',
  }) => {
    const classSet = cx(styles.base, styles[progressColor], {
      [styles.forward]: direction === 'forward',
    });

    return (
      <Button
        className={classSet}
        isEnabled={!isLoading}
        isInline={true}
        onClick={onClick}
        title={copy.title}
      >
        <Icon
          className={cx(styles.icon, { [styles.disabled]: isLoading })}
          height={20}
          name="seek"
          width={20}
        />
      </Button>
    );
  },
);

export { SeekButton };
