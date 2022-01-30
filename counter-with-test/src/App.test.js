import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  // 스크린 오브젝트를 이용하여 원하는 엘리멘트에 접근
  const $counter = screen.getByTestId('counter');
  expect($counter).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  const $minusBtn = screen.getByTestId('minus-button');
  expect($minusBtn).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);
  const $plusBtn = screen.getByTestId('plus-button');
  expect($plusBtn).toHaveTextContent('+');
});

test('When the + button prerssed, the counter changes to 1', () => {
  render(<App />);
  const $button = screen.getByTestId('plus-button');
  fireEvent.click($button);
  const $counter = screen.getByTestId('counter');
  expect($counter).toHaveTextContent(1);
});

test('When the - button prerssed, the counter changes to -1', () => {
  render(<App />);
  const $button = screen.getByTestId('minus-button');
  fireEvent.click($button);
  const $counter = screen.getByTestId('counter');
  expect($counter).toHaveTextContent(-1);
});

test('on/off button has bllue color', () => {
  render(<App />);
  const $button = screen.getByTestId('on/off-button');
  expect($button).toHaveStyle({ backgroundColor: 'blue' });
});

test('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const $onoffBtn = screen.getByTestId('on/off-button');
  const $plusBtn = screen.getByTestId('plus-button');
  const $minusBtn = screen.getByTestId('minus-button');
  fireEvent.click($onoffBtn);
  expect($plusBtn).toBeDisabled();
  expect($minusBtn).toBeDisabled();
});
