/* eslint-disable comma-dangle */
import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Display from '../display';

afterEach(cleanup);
describe('Test Display Component', () => {
  test('Test Components  Rendering for Display', () => {
    render(<Display curOperand="78" prevOperand="5" operation="+" />);

    const displayElement = screen.getByTestId('display-data');
    const displayContent = displayElement.textContent;

    expect(displayContent).toBe('78');
  });

  test('Testing Diplay snapShot ', () => {
    const tree = renderer
      .create(<Display prevOperand="3" operation="+" curOperand="78" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
