import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

afterEach(cleanup);
describe('Test for Home component', () => {
  test('Test rendering for Quote Components', () => {
    render(<Quote />);

    const quoteElement = screen.getByTestId('quote-data');

    expect(quoteElement).toBeInTheDocument();
  });

  test('Quote snapShot test', () => {
    const tree = renderer.create(<Quote />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
