import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('TEst for Home component', () => {
  test('Home snapShot test', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
