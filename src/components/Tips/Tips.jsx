import React, { useState, useEffect } from 'react';
import { Input } from '../input/Input';
import { Button } from '../Button/Button';

import './style.scss';

const initialValuesArr = [5, 10, 15, 25, 50];

const Tips = ({ updateTip, reset }) => {
  const [currentTip, setCurrentTip] = useState();
  const [tipCustom, setTipCustom] = useState('');

  useEffect(() => {
    setTipCustom('');
  }, [reset]);

  const handleChange = (e) => {
    let value = parseFloat(e.target.value);
    if (!value) {
      handleRadio(0);
      return;
    }
    setCurrentTip(value);
    setTipCustom(value);
    updateTip(value);
  };

  const handleRadio = (value) => {
    setCurrentTip(value);
    setTipCustom('');
    updateTip(value);
  };

  const uniceId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  return (
    <div className="tip-area">
      <h3 className="tip-title">Select Tip %</h3>
      <div className="btn-grid">
        {initialValuesArr.map((item) => (
          <Button
            key={uniceId()}
            itemKey={item}
            currentTip={currentTip === item}
            title={item}
            handleChange={handleRadio}
          />
        ))}
        <Input
          onChange={handleChange}
          value={tipCustom ? tipCustom : ''}
          placeholder="Custom"
          className={'custom'}
        />
      </div>
    </div>
  );
};

export default Tips;
