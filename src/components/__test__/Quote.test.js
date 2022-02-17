import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Test for Home component', () => {
  test('Home snapShot test', () => {
    const tree = renderer.create(<Quote />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
