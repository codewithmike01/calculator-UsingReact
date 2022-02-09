import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { valueTotal } = props;

  return (
    <div className="output">
      <p>{valueTotal}</p>
    </div>
  );
}

Display.propTypes = {
  valueTotal: PropTypes.string.isRequired,
};
export default Display;
