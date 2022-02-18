import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { prevOperand, operation, curOperand } = props;

  return (
    <div className="output">
      <p className="top-display">
        {prevOperand}
        {operation}
      </p>
      <p data-testid="display-data" className="down-display ">
        {curOperand}
      </p>
    </div>
  );
}

Display.propTypes = {
  prevOperand: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  curOperand: PropTypes.string.isRequired,
};
export default Display;
