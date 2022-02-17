import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home';

afterEach(cleanup);
describe('TEst for Home component', () => {
  test('Test Rendering for Home Components', () => {
    render(<Home />);

    const homeElement = screen.getByTestId('main-container');

    expect(homeElement).toBeInTheDocument();
  });

  test('Home snapShot test', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
