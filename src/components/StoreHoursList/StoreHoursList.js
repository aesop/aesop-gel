import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import find from 'lodash/find';
import { HEADING } from '~/constants';
import Heading from '~/components/Heading';
import styles from './StoreHoursList.module.css';

const StoreHoursList = ({
  className,
  heading,
  hoursList,
  alternateHoursNote,
}) => {
  if (hoursList.length === 0) return null;

  const classSet = cx(styles.base, className);
  const hasAlternateHours = !!find(hoursList, 'isAlternate');

  return (
    <div className={classSet}>
      {heading && (
        <Heading
          className={styles.heading}
          hasTopMargin={false}
          level={HEADING.LEVEL.FOUR}
          size={HEADING.SIZE.X_X_SMALL}
        >
          {heading}
        </Heading>
      )}

      <ul className={styles.list}>
        {hoursList.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.dayName}>{item.dayName}</span>
            <span
              className={cx(styles.hours, {
                [styles.alternateHours]: item.isAlternate,
              })}
            >
              {item.hours}
            </span>
          </li>
        ))}
      </ul>
      {alternateHoursNote && hasAlternateHours && (
        <div className={styles.alternateHoursNote}>{alternateHoursNote}</div>
      )}
    </div>
  );
};

StoreHoursList.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  hoursList: PropTypes.arrayOf(
    PropTypes.shape({
      dayName: PropTypes.string,
      hours: PropTypes.string,
      id: PropTypes.string,
      isAlternate: PropTypes.bool,
    }),
  ),
  alternateHoursNote: PropTypes.string,
};

StoreHoursList.defaultProps = {
  className: undefined,
  heading: undefined,
  hoursList: [],
  alternateHoursNote: undefined,
};

export default StoreHoursList;