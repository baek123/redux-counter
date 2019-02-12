import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({
  number,
  color,
  index,
  onIncrement,
  onDecrement,
  onSetColor,
}) => {
  return (
    <div
      className="Counter"
      onClick={() => onIncrement(index)}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={() => onSetColor(index)}
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

Counter.propTypes = {
  color: PropTypes.string,
  index: PropTypes.number,
  number: PropTypes.number,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  onSetColor: PropTypes.func,
};

Counter.defaultProps = {
  color: 'black',
  index: 0,
  number: 0,
  onDecrement: () => console.warn('onDecrement not defined'),
  onIncrement: () => console.warn('onIncrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined'),
};

export default Counter;
