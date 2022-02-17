/* eslint-disable comma-dangle */
import React from 'react';
import {
  cleanup, render, screen, fireEvent
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../Button';

afterEach(cleanup);
describe('React Test for Buttons', () => {
  test('Button Test', () => {
    const test = () => 3 + 2;
    render(
      <Button
        perform={() => test('7')}
        title="7"
        className="operation"
        id="7"
      />
    );
    const buttonElement = screen.getByTestId('7');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('7');
  });
});

describe('Test for Button component SnapShot', () => {
  test('Home snapShot test', () => {
    const tree = renderer
      .create(
        <Button perform={() => test('AC')} title="AC" className="operation" />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Test if click events', () => {
  test('is event captured', (done) => {
    const perfom = (evt) => {
      expect(evt.target.value).toBe('AC');
      done();
    };
    const { getByText } = render(
      <Button perform={perfom} title="AC" className="operation" />
    );
    const node = getByText('AC');
    fireEvent.click(node, { target: { value: 'AC' } });
  });
});
