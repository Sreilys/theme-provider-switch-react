import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const textEl = screen.getByText(/theme!/i);
  expect(textEl).toBeInTheDocument();
});
