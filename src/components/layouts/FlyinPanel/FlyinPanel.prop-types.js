import PropTypes from 'prop-types';

export const PROP_TYPES = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  handleClose: PropTypes.string.isRequired,
  heading: PropTypes.string,
  isVisible: PropTypes.bool,
};

export default PROP_TYPES;
