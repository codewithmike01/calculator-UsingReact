/* eslint-disable operator-linebreak */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import Display from './display';
// import operate from '../logic/operate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.valHold = [];
  }

  test = (val) => {
    const result = calculate(this.state, val);
    if (result.next === null && result.total === null) {
      result.total = '0';
    }
    this.setState(result);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Display
            valueTotal={`  ${
              this.state.next ? this.state.next : this.state.total
            }`}
          />
          <div className="input">
            <div className="section-button">
              <Button
                perform={() => this.test('AC')}
                title="AC"
                className="operation"
              />
              <Button
                perform={() => this.test('+/-')}
                title="+/-"
                className="operation"
              />
              <Button
                perform={() => this.test('%')}
                title="%"
                className="operation"
              />
              <Button
                perform={() => this.test('÷')}
                title="÷"
                className="operation colored"
              />
            </div>

            <div className="section-button">
              <Button
                perform={() => this.test('7')}
                title="7"
                className="operation"
              />
              <Button
                perform={() => this.test('8')}
                title="8"
                className="operation"
              />
              <Button
                perform={() => this.test('9')}
                title="9"
                className="operation"
              />
              <Button
                perform={() => this.test('x')}
                title="x"
                className="operation colored"
              />
            </div>
            <div className="section-button">
              <Button
                perform={() => this.test('4')}
                title="4"
                className="operation"
              />
              <Button
                perform={() => this.test('5')}
                title="5"
                className="operation"
              />
              <Button
                perform={() => this.test('6')}
                title="6"
                className="operation"
              />
              <Button
                perform={() => this.test('-')}
                title="-"
                className="operation colored"
              />
            </div>

            <div className="section-button">
              <Button
                perform={() => this.test('1')}
                title="1"
                className="operation"
              />
              <Button
                perform={() => this.test('2')}
                title="2"
                className="operation"
              />
              <Button
                perform={() => this.test('3')}
                title="3"
                className="operation"
              />
              <Button
                perform={() => this.test('+')}
                title="+"
                className="operation colored"
              />
            </div>

            <div className="section-button">
              <Button
                perform={() => this.test('0')}
                title="0"
                className="operation zero"
              />
              <Button
                perform={() => this.test('.')}
                title="."
                className="operation"
              />
              <Button
                perform={() => this.test('=')}
                title="="
                className="operation colored"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
