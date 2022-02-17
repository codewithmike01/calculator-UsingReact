/* eslint-disable comma-dangle */
import React from 'react';

import renderer from 'react-test-renderer';

describe('Test Nav Bar Component', () => {
  test('Testing Nav Bar ', () => {
    const tree = renderer.create(<display valueTotal={6} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
