import React from 'react';
import { observer } from 'mobx-react-lite';
import uuid from 'react-uuid';

const BarComponent = observer(({ arr }) => (
  <div className="bar-section">
    <ul>
      {arr.length !== 0 && arr.map((el) => <li key={uuid()} style={{ height: `${el * 10}px` }} className="bar" />)}
      ;
    </ul>
  </div>
));

export default BarComponent;
