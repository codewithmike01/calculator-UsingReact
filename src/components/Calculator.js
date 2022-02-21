import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import Display from './display';

export default function Calculator() {
  const [state, setState] = useState({
    total: '0',
    operation: null,
    next: null,
  });

  const test = (val) => {
    const result = calculate(state, val);
    if (result.next === null && result.total === null) {
      result.total = '0';
    }
    setState(result);
  };

  const { total, operation, next } = state;

  return (
    <div className="App" data-testid="calculate-data">
      <div>
        <h2>Lets do some math!</h2>
      </div>
      <div className="container">
        <Display
          prevOperand={total}
          operation={operation || ''}
          curOperand={next || ''}
        />
        <div className="input">
          <div className="section-button">
            <Button
              perform={() => test('AC')}
              title="AC"
              className="operation"
            />
            <Button
              perform={() => test('+/-')}
              title="+/-"
              className="operation"
            />
            <Button perform={() => test('%')} title="%" className="operation" />
            <Button
              perform={() => test('÷')}
              title="÷"
              className="operation colored"
            />
          </div>

          <div className="section-button">
            <Button perform={() => test('7')} title="7" className="operation" />
            <Button perform={() => test('8')} title="8" className="operation" />
            <Button perform={() => test('9')} title="9" className="operation" />
            <Button
              perform={() => test('x')}
              title="x"
              className="operation colored"
            />
          </div>
          <div className="section-button">
            <Button perform={() => test('4')} title="4" className="operation" />
            <Button perform={() => test('5')} title="5" className="operation" />
            <Button perform={() => test('6')} title="6" className="operation" />
            <Button
              perform={() => test('-')}
              title="-"
              className="operation colored"
            />
          </div>

          <div className="section-button">
            <Button perform={() => test('1')} title="1" className="operation" />
            <Button perform={() => test('2')} title="2" className="operation" />
            <Button perform={() => test('3')} title="3" className="operation" />
            <Button
              perform={() => test('+')}
              title="+"
              className="operation colored"
            />
          </div>

          <div className="section-button">
            <Button
              perform={() => test('0')}
              title="0"
              className="operation zero"
            />
            <Button perform={() => test('.')} title="." className="operation" />
            <Button
              perform={() => test('=')}
              title="="
              className="operation colored"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
