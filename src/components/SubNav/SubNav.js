import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useThemeContext } from '~/contexts';
import useWindowHasResized from '~/customHooks/useWindowHasResized';
import { ascertainIsSmallOrMediumOnlyViewport } from '~/utils/viewports';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Select from '~/components/Select';
import List from '~/components/List';
import styles from './SubNav.module.css';

const SubNav = ({
  className,
  heading,
  headingClassName,
  id,
  isSelect,
  links,
  theme,
}) => {
  useWindowHasResized();

  const currentTheme = useThemeContext(theme, 'dark');
  const classSet = cx(
    styles.base,
    styles[currentTheme],
    { [styles.select]: isSelect },
    className,
  );
  const isSmallOrMediumViewport = ascertainIsSmallOrMediumOnlyViewport();
  const onChange = event => {
    window.location.href = event.target.value;
  };

  return (
    <nav className={classSet}>
      {heading && (
        <Heading
          className={cx(styles.heading, headingClassName)}
          level="3"
          noMargin={true}
          size="small"
          theme={currentTheme}
        >
          {heading}
        </Heading>
      )}
      {isSelect && isSmallOrMediumViewport ? (
        <Select
          isBlock={isSelect}
          name={id}
          onChange={onChange}
          options={links.map(({ children, id, url }) => ({
            id,
            label: children,
            value: url,
          }))}
          theme={currentTheme}
        />
      ) : (
        <List
          items={getLinkItems(links, currentTheme)}
          listItemClassName={styles.item}
          theme={currentTheme}
        />
      )}
    </nav>
  );
};

export function getLinkItems(links, theme) {
  return links.map(({ children, id, hasTargetInNewWindow, style, url }) => ({
    content: (
      <Hyperlink
        className={styles.link}
        hasTargetInNewWindow={hasTargetInNewWindow}
        style={style}
        theme={theme}
        url={url}
      >
        {children}
      </Hyperlink>
    ),
    id,
  }));
}

SubNav.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isSelect: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object)
    .isRequired /** @TODO hyperlink type */,
  heading: PropTypes.string,
  headingClassName: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

SubNav.defaultProps = {
  className: undefined,
  id: undefined,
  isSelect: false,
  links: undefined,
  heading: undefined,
  headingClassName: undefined,
  theme: undefined,
};

export default SubNav;
