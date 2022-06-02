import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Pagination from './components/Pagination';

test('renders recipes overview text', () => {
  render(<Header />);
  const linkElement = screen.getByText(/recipes overview/i);
  expect(linkElement).toBeInTheDocument();
});

test('filter input should be rendered', () => {
  render(<Header />)
  const filterInput = screen.getByPlaceholderText(/filter/i)
  expect(filterInput).toBeInTheDocument()
})

test('filter input should be empty', () => {
  render(<Header />)
  const filterInput = screen.getByPlaceholderText(/filter/i)
  expect(filterInput.value).toBe("")
})


test('pagination should render at least one button', () => {
  render(<Pagination />)
  const firstPageButton = screen.getAllByRole("button")
  expect(firstPageButton.length).toBeGreaterThan(0)
})

