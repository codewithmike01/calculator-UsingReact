import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('TEst for Home component', () => {
  test('Home snapShot test', () => {
    const tree = renderer
      .create(
        <Button perform={() => test('AC')} title="AC" className="operation" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
