// import { render, screen } from '@testing-library/react';
import { cleanup } from '@testing-library/react';
import calculator from '../calculate';

afterEach(cleanup);
/* CALCULATE.JS  */
describe('est for button name as AC', () => {
  test('TShould return Obj with Null values', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '+',
    };
    const buttonName = 'AC';

    const response = calculator(obj, buttonName);

    expect(response.total).toBe(null);
    expect(response.next).toBe(null);
    expect(response.operation).toBe(null);
  });
});

describe('For Button is Number', () => {
  test('When number is 0 Should return an Empty Obj', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };

    const buttonName = '0';

    const response = calculator(obj, buttonName);

    expect(response).toEqual({});
  });

  describe('If operation is present update next', () => {
    test('Should return  return { ...obj, next: obj.next + buttonName };', () => {
      const obj = {
        total: '8',
        next: '5',
        operation: '-',
      };

      const buttonName = '3';

      const response = calculator(obj, buttonName);

      expect(response.next).toEqual('53');
    });

    test('Should return return { ...obj, next: buttonName };', () => {
      const obj = {
        total: '8',
        next: null,
        operation: '-',
      };

      const buttonName = '3';

      const response = calculator(obj, buttonName);

      expect(response.next).toEqual(buttonName);
    });
  });

  test('If no operetion should  update next and clear the value', () => {
    const obj = {
      total: null,
      next: '4',
      operation: null,
    };

    const buttonName = '3';

    const response = calculator(obj, buttonName);

    expect(response.next).toEqual('43');
  });

  test('If no operetion and no Next should  return next as button Name and total as null', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '3';

    const response = calculator(obj, buttonName);

    expect(response.next).toEqual(buttonName);
  });
});

describe('if button Nmae is a . ', () => {
  describe('If there is Next value', () => {
    test('Should return a copy of the obj passed', () => {
      const obj = {
        total: null,
        next: '2.5',
        operation: null,
      };

      const buttonName = '.';

      const response = calculator(obj, buttonName);

      expect(response).toEqual(obj);
    });

    test(' if next is whole number Should make obj.next a decimal ', () => {
      const obj = {
        total: null,
        next: '5',
        operation: null,
      };

      const buttonName = '.';

      const response = calculator(obj, buttonName);

      expect(response.next).toEqual('5.');
    });
  });

  test(' if operation make obj.next 0. ', () => {
    const obj = {
      total: '2',
      next: null,
      operation: '-',
    };

    const buttonName = '.';

    const response = calculator(obj, buttonName);

    expect(response.next).toEqual('0.');
  });

  describe('If they is a total ', () => {
    test('If total is decimal return empty', () => {
      const obj = {
        total: '2.5',
        next: null,
        operation: null,
      };

      const buttonName = '.';

      const response = calculator(obj, buttonName);

      expect(response).toEqual({});
    });

    test('If total is whole make it a decimal', () => {
      const obj = {
        total: '2',
        next: null,
        operation: null,
      };

      const buttonName = '.';

      const response = calculator(obj, buttonName);

      expect(response.total).toEqual('2.');
    });
  });

  test('If all obj  properties values are  null make total 0.', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '.';

    const response = calculator(obj, buttonName);

    expect(response.total).toEqual('0.');
  });
});

describe('Test for button name as =', () => {
  test('Should return Total and others as null', () => {
    const obj = {
      total: 5,
      next: 2,
      operation: '+',
    };

    const buttonName = '=';

    const response = calculator(obj, buttonName);

    expect(response.total).toBe('7');
    expect(response.next).toBe(null);
    expect(response.operation).toBe(null);
  });

  test('If no operation  should return empty obj', () => {
    const obj = {
      total: null,
      next: 2,
      operation: null,
    };

    const buttonName = '=';

    const response = calculator(obj, buttonName);

    expect(response).toEqual({});
  });
});

describe('Test for button name as -/+', () => {
  test('Should return - next value ', () => {
    const obj = {
      total: null,
      next: '2',
      operation: null,
    };

    const buttonName = '+/-';

    const response = calculator(obj, buttonName);

    expect(response.next).toEqual('-2');
  });

  test('Should return negation of Total ', () => {
    const obj = {
      total: '2',
      next: null,
      operation: null,
    };

    const buttonName = '+/-';

    const response = calculator(obj, buttonName);

    expect(response.total).toEqual('-2');
  });

  test('Should return empty obj', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '+/-';

    const response = calculator(obj, buttonName);

    expect(response).toEqual({});
  });
});

describe('Test for User pressing an operation after pressing =', () => {
  test('operation is Addition', () => {
    const obj = {
      total: '3',
      next: null,
      operation: null,
    };

    const buttonName = '+';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('operation is Subtraction', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '-';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('operation is Multiplication', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = 'x';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('operation is Division', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '÷';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('operation is Modulus', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = '%';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });
});

describe('User pressed an operation button and there is an existing operation', () => {
  test('Should Replace operation ', () => {
    const obj = {
      total: '10',
      next: null,
      operation: '+',
    };

    const buttonName = 'x';

    const response = calculator(obj, buttonName);

    expect(response.operation).toEqual(buttonName);
  });

  test('Should Replace operation after getting total value', () => {
    const obj = {
      total: '10',
      next: '3',
      operation: '+',
    };

    const buttonName = 'x';

    const response = calculator(obj, buttonName);

    expect(response.total).toEqual('13');
    expect(response.operation).toEqual(buttonName);
  });
});

describe('no operation yet, but the user typed one', () => {
  test('Should  save the operation', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = 'x';

    const response = calculator(obj, buttonName);
    expect(response.operation).toEqual(buttonName);
  });

  test('Should shift next into total', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };

    const buttonName = '%';

    const response = calculator(obj, buttonName);

    expect(response.total).toEqual(obj.next);
    expect(response.operation).toEqual(buttonName);
  });
});
