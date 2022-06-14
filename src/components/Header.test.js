import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header component', () => {
	it('renders header', () => {
		render(<Header />, { wrapper: MemoryRouter });

		expect(screen.getByRole('banner')).toBeInTheDocument();
	});

	it('renders 5 nav links', () => {
		render(<Header />, { wrapper: MemoryRouter });

		expect(screen.getAllByRole('link').length).toBe(5);
	});

	it('renders zero basket items', () => {
		render(<Header totalItems={0} />, { wrapper: MemoryRouter });

		expect(screen.getByTestId('total-basket-items').textContent).toBe('0');
	});

	it('renders one basket item', () => {
		render(<Header totalItems={1} />, { wrapper: MemoryRouter });

		expect(screen.getByTestId('total-basket-items').textContent).toBe('1');
	});
});
