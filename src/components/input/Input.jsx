import React from 'react';

import './style.scss';

export const Input = ({
  onChange,
  icon,
  value,
  err,
  placeholder,
  className,
}) => {
  return (
    <div className="input-area">
      {icon && <img alt={placeholder} src={icon} />}
      <input
        className={`${className} ${err ? 'error' : ''} pp-svg`}
        type="number"
        placeholder={placeholder}
        min={0}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
