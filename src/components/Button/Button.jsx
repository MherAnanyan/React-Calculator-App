import React from 'react';
import './style.scss';

export const Button = ({
  title,
  handleChange,
  currentTip,
  itemKey,
}) => {
  return (
    <div
      key={itemKey}
      className={`btn-area ${currentTip ? 'active' : ''}`}
    >
      <button
        className="initial-btn"
        onClick={() => handleChange(title)}
      >
        {title}%
      </button>
    </div>
  );
};
