import { render, screen } from '@testing-library/react';
import App from './App';

test('renders to-do list app', () => {
  render(<App />);
  const linkElement = screen.getByText(/To-Do List/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders task list', () => {
  render(<App />);
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
});
