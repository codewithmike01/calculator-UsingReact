/* eslint-disable comma-dangle */
import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Display from '../display';

afterEach(cleanup);
describe('Test Display Component', () => {
  test('Test Component  Rendering for Display', () => {
    render(<Display valueTotal="78" />);

    const displayElement = screen.getByTestId('display-data');
    const displayContent = displayElement.textContent;

    expect(displayContent).toBe('78');
  });

  test('Testing Diplay snapShot ', () => {
    const tree = renderer.create(<display valueTotal={6} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
