/* eslint-disable comma-dangle */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import renderer from 'react-test-renderer';
import NavBar from '../Nav';

describe('Test Nav Bar Component', () => {
  test('Testing Nav Bar ', () => {
    const tree = renderer
      .create(
        <Router>
          <NavBar />
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
