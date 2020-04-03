import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isObjectPopulatedArray } from '~/utils/objects';
import styles from './DefinitionList.module.css';

const DefinitionList = forwardRef(
  ({ className, isVisible, items, theme }, ref) => {
    const classSet = cx(styles.base, styles[theme], className);
    const termClassSet = cx(styles.term, { [styles.slideIn]: isVisible });
    const descriptionClassSet = cx(styles.description, {
      [styles.slideIn]: isVisible,
    });

    if (!isObjectPopulatedArray(items)) {
      return null;
    }

    return (
      <dl className={classSet} ref={ref}>
        {items
          .filter(({ description, term }) => description && term)
          .map(({ description, id, term }) => (
            <Fragment key={id}>
              <dt className={termClassSet}>{term}</dt>
              <dd className={descriptionClassSet}>{description}</dd>
            </Fragment>
          ))}
      </dl>
    );
  },
);

DefinitionList.propTypes = {
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.any.isRequired,
      id: PropTypes.string.isRequired,
      term: PropTypes.string.isRequired,
    }),
  ),
  theme: PropTypes.oneOf(['dark', 'light']),
};

DefinitionList.defaultProps = {
  className: undefined,
  isVisible: true,
  items: undefined,
  theme: 'dark',
};

export default DefinitionList;