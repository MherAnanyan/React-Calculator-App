import React, { useState } from 'react';
import ActionBox from '../ActionBox/ActionBox';

import './style.scss';

const initialDb = {
  tipPerPerson: 0,
  totalPerPerson: 0,
};

const Calculator = () => {
  const [db, setDb] = useState(initialDb);
  const [reset, setReset] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleReset = () => {
    setReset(Date.now());
    setDisabled(true);
  };

  console.log('db', db);

  return (
    <div className="calculator">
      <ActionBox
        setDb={setDb}
        reset={reset}
        setDisabled={setDisabled}
      />
      <div className="results-cont">
        <div className="results">
          <div className="total">
            <div className="text">
              <h2>Tip Amount</h2>
              <span>/ person</span>
            </div>
            <p>${db.tipPerPerson}</p>
          </div>
          <div className="total">
            <div className="text">
              <h2>Total</h2>
              <span>/ person</span>
            </div>
            <p>${db.totalPerPerson}</p>
          </div>
        </div>

        <button
          className="reset"
          onClick={handleReset}
          disabled={disabled ? true : false}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Calculator;
