import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('TEst for Home component', () => {
  test('Home snapShot test', () => {
    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
