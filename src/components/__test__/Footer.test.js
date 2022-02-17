import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

afterEach(cleanup);
describe('TEst for Footer component', () => {
  test('Test Render Components for Footer', () => {
    render(<Footer />);

    const footerElement = screen.getByTestId('footer-data');
    const footerContent = footerElement.textContent;

    expect(footerContent).toBe('footer');
  });

  test('Footer snapShot test', () => {
    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
