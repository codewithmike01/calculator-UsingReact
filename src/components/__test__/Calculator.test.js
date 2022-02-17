import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

afterEach(cleanup);
describe('Test for Calculate component', () => {
  test('Test for Rendering Calculator Components', () => {
    render(<Calculator />);
    const calculatorElement = screen.getByTestId('calculate-data');

    expect(calculatorElement).toBeInTheDocument();
  });

  test('Home snapShot test', () => {
    const tree = renderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
