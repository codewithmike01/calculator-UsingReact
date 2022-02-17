import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('TEst for Home component', () => {
  test('Home snapShot test', () => {
    const tree = renderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
