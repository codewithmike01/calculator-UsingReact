import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { title } = props;
  const { className } = props;
  const { perform } = props;

  return (
    <button
      onClick={perform}
      className={className}
      data-testid={title}
      type="button"
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  perform: PropTypes.func.isRequired,
};
export default Button;
