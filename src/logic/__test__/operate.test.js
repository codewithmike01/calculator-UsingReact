import operate from '../operate';
/* OPERATE.JS  */
describe('Test for Operate.js file', () => {
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

  test('operation for Multiplication', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = 'x';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('18');
  });

  test('operation for Division', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = '÷';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('2');
  });

  test('operation for Modulus', () => {
    const numOne = 6;
    const numTwo = 3;
    const operation = '%';

    const response = operate(numOne, numTwo, operation);

    expect(response).toBe('0');
  });
});
