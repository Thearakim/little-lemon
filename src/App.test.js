import { render, screen } from '@testing-library/react';
import Home from '../src/components/Home';
import BookingForm from '../src/components/BookingForm';
import {expect, jest, test} from '@jest/globals';
import ConfirmedBooking from './components/ConfirmedBooking';

test('renders Home component', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/Specials/i);
  const linkElement2 = screen.getByText(/Testimonials/i);
  const linkElement3 = screen.getByText(/Reserve a Table/i);
  const linkElement4 = screen.getByText(/Online Menu/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
});


test('renders Home component', () => {
  render(<Home/>);
  const linkElement = screen.getAllByText(/Little Lemon/i);
  const linkElement2 = screen.getAllByText(/Chicago/i);
  const linkElement3 = screen.getByText(/Bruschetta/i);
  const linkElement4 = screen.getByText(/Amanda/i);
  expect(linkElement).toHaveLength(2);
  expect(linkElement2).toHaveLength(1);
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
});

test.skip('renders BookingForm component', () => {
  const dispatch = jest.fn();
  const submitForm = jest.fn();
  render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={dispatch} submitForm={submitForm}/>);
  const linkElement = screen.getByText(/Choose Date/i);
  const linkElement2 = screen.getByText(/Number of Guests/i);
  const linkElement3 = screen.getByText(/Occasion/i);
  const input = screen.findAllByRole('input')
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test('renders ConfirmedBooking component', () => {
  render(<ConfirmedBooking/>);
  const linkElement = screen.getAllByText(/Booking Confirmed!!/i);
  const linkElement2 = screen.getAllByText(/Date:/i);
  const linkElement3 = screen.getByText(/Time:/i);
  const linkElement4 = screen.getByText(/Guests:/i);
  const linkElement5 = screen.getByText(/Occasion:/i);
  expect(linkElement).toHaveLength(1);
  expect(linkElement2).toHaveLength(1);
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
  expect(linkElement5).toBeInTheDocument();
});