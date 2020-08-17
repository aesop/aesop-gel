import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import styles from './LinkButtonGroup.module.css';

const isReactFragment = component => {
  if (component.type) return component.type === Fragment;
  return component === Fragment;
};

const LinkButtonGroup = ({
  children,
  className,
  hasFitContent,
  isFlush,
  textAlign,
  theme,
}) => {
  const currentTheme = useThemeContext(theme, 'dark');

  if (!children || typeof children === 'string' || children instanceof String) {
    return null;
  }

  const classSet = cx(
    styles.base,
    { [styles.fitContent]: hasFitContent },
    { [styles.flush]: isFlush },
    className,
  );

  const childrenClassSet = cx(
    styles.link,
    { [styles.flushLink]: isFlush },
    { [styles.fitContent]: hasFitContent },
    styles[textAlign],
  );

  const childComponents = isReactFragment(children)
    ? children.props.children
    : children;

  return (
    <div className={classSet}>
      <>
        {React.Children.map(childComponents, child => {
          if (child === null) return null;

          return React.cloneElement(child, {
            className: `${child.props?.className || ''} ${childrenClassSet}`,
            textAlign,
            theme: currentTheme,
          });
        })}
      </>
    </div>
  );
};

LinkButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  hasFitContent: PropTypes.bool,
  isFlush: PropTypes.bool,
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  theme: PropTypes.oneOf(['dark', 'light']),
};

LinkButtonGroup.defaultProps = {
  children: undefined,
  className: undefined,
  hasFitContent: false,
  isFlush: true,
  textAlign: 'center',
  theme: undefined,
};

export default LinkButtonGroup;
