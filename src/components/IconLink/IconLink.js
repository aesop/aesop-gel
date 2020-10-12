import React from 'react';
import PropTypes from 'prop-types';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';

const IconLink = ({
  altText,
  className,
  hasTargetInNewWindow,
  height,
  icon,
  iconImageClassName,
  id,
  target,
  width,
}) => {
  return (
    <Hyperlink
      className={className}
      dataTestRef={`DATA_TEST_REF_ICON_LINK_${id}`}
      hasTargetInNewWindow={hasTargetInNewWindow}
      title={altText}
      url={target}
    >
      <Image
        altText={altText}
        className={iconImageClassName}
        large={icon.large}
        medium={icon.medium}
        small={icon.small}
        style={{ height: `${height}px`, width: `${width}px` }}
      />
    </Hyperlink>
  );
};

IconLink.propTypes = {
  altText: PropTypes.string,
  className: PropTypes.string,
  hasTargetInNewWindow: PropTypes.bool,
  height: PropTypes.number,
  icon: PropTypes.object,
  iconImageClassName: PropTypes.string,
  id: PropTypes.string,
  target: PropTypes.string,
  width: PropTypes.number,
};

IconLink.defaultProps = {
  altText: undefined,
  className: undefined,
  hasTargetInNewWindow: true,
  height: 21,
  icon: undefined,
  iconImageClassName: undefined,
  id: undefined,
  target: undefined,
  width: 21,
};

export default IconLink;
