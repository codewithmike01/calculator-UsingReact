/* eslint-disable comma-dangle */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavBar from '../Nav';

afterEach(cleanup);
describe('Test Nav Bar Component', () => {
  test('Test for rendering Nav Component', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const navElement = screen.getByTestId('nav-data');

    expect(navElement).toBeInTheDocument();
  });

  test('Testing Nav Bar SnapSjot ', () => {
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
