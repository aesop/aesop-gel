import React from 'react';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import find from 'lodash/find';
import Props from './Icon.types';
import svgs from './Icon.data';
import { generateSvgBlueprint } from './Icon.utils';
import styles from './Icon.module.css';

const Icon: React.FunctionComponent<Props> = ({
  className,
  dataRef,
  height,
  isActive,
  name = '',
  tabIndex,
  title,
  width,
}) => {
  const svg = find(svgs, { name });

  if (svg === undefined) {
    console.error('<Icon />: svg does no exist'); // eslint-disable-line no-console

    return null;
  }

  const uuidKey = uuidv4();
  const uuidariaLabellBy = `${name}-${uuidKey}`;
  const svgBlueprint = generateSvgBlueprint(svg, uuidKey);
  const classSet = cx(styles.base, styles[name], className, {
    [styles.isActive]: isActive,
  });

  return (
    <svg
      aria-labelledby={title ? uuidariaLabellBy : undefined}
      className={classSet}
      data-ref={dataRef}
      focusable="false"
      height={height}
      role="img"
      tabIndex={tabIndex}
      viewBox={svg.viewBox}
      width={width}
    >
      {title && <title id={uuidariaLabellBy}>{title}</title>}
      <g>{svgBlueprint}</g>
    </svg>
  );
};

Icon.defaultProps = {
  height: 12,
  isActive: false,
  width: 12,
  tabIndex: -1,
};

export default Icon;
