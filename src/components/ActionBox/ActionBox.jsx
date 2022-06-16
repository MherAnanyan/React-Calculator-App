import React, { useState, useEffect } from 'react';
import Tips from '../Tips/Tips';
import { Input } from '../input/Input';
import PersonIcon from '../../assets/icons/icon-person.svg';
import DollarIcon from '../../assets/icons/icon-dollar.svg';

import './style.scss';

const initialData = {
  bill: '',
  tipValue: 15,
  peopleCount: 1,
};

const initialNewData = {
  tipPerson: 0,
  total: 0,
};

const ActionBox = ({ setDb, reset, setDisabled }) => {
  const [data, setData] = useState(initialData);
  const [newData, setNewData] = useState(initialNewData);
  let { bill, tipValue, peopleCount } = data;

  useEffect(() => {
    setDb(newData);
  }, [newData]);

  useEffect(() => {
    setData(initialData);
  }, [reset]);

  useEffect(() => {
    let tip = (bill * tipValue) / 100,
      totalAmount = bill + tip;
    let newData = {};

    if (peopleCount > 0) {
      newData = {
        tipPerPerson: (tip / peopleCount).toFixed(2),
        totalPerPerson: (totalAmount / peopleCount).toFixed(2),
      };
    } else {
      newData = {
        tipPerPerson: 0,
        totalPerPerson: 0,
      };
    }
    setNewData(newData);
  }, [bill, tipValue, peopleCount]);

  const updateBill = (e) => {
    let bill = Number(e.target.value);
    setData({
      ...data,
      bill,
    });
    setDisabled(false);
  };

  const updateTip = (tipValue) => {
    console.log('typeof', typeof tipValue);
    setData({
      ...data,
      tipValue,
    });
    setDisabled(false);
  };

  const updatePeople = (e) => {
    let peopleCount = Number(e.target.value);
    setData({
      ...data,
      peopleCount,
    });
    setDisabled(false);
  };

  return (
    <div className="panel">
      <div>
        <h3>Bill</h3>
        <Input
          icon={DollarIcon}
          placeholder="0"
          onChange={updateBill}
          value={data.bill ? data.bill : ''}
        />
      </div>
      <Tips updateTip={updateTip} reset={reset} />
      <div>
        <h3>Number of People</h3>
        {data.peopleCount === 0 && (
          <span className="error-msg">Can't be zero</span>
        )}
        <Input
          icon={PersonIcon}
          err={data.peopleCount === 0}
          onChange={updatePeople}
          placeholder="0"
          value={data.peopleCount ? data.peopleCount : ''}
        />
      </div>
    </div>
  );
};

export default ActionBox;
