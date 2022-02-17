// import { render, screen } from '@testing-library/react';
import calculator from '../calculate';
import operate from '../operate';

/* CALCULATE.JS  */
describe('Calculator.js Testing ', () => {
  test('Test for button name as AC', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '',
    };
    const buttonName = 'AC';

    const response = calculator(obj, buttonName);

    expect(response.total).toBe(null);
  });

  test('Test for button name as = ', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '+',
    };
    const buttonName = '=';

    const response = calculator(obj, buttonName);

    expect(response.total).toBe('7');
    expect(response.next).toBe(null);
  });
});

/* OPERATE.JS  */
describe('Test for Operate.js', () => {
  test('operation for Addition', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = '+';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('9');
  });

  test('operation for Subtraction', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = '-';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('3');
  });
});
