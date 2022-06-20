import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Storefront from './Storefront';

const mockProducts = [
	{
		id: 1,
		title: 'Product 1',
		price: 2.99,
		image: jest.mock('../../assets/images/product-images/1.png'),
	},
	{
		id: 2,
		title: 'Product 2',
		price: 10,
		image: jest.mock('../../assets/images/product-images/2.png'),
	},
	{
		id: 3,
		title: 'Product 3',
		price: 5.99,
		image: jest.mock('../../assets/images/product-images/3.png'),
	},
];

describe('Storefront component testing', () => {
	const addToCartMock = jest.fn();
	it('renders', () => {
		const { container } = render(
			<Router>
				<Storefront
					products={mockProducts}
					title='Shop'
					addToCart={addToCartMock}
				/>
			</Router>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders 3 products', () => {
		render(
			<Router>
				<Storefront
					products={mockProducts}
					title='Shop'
					addToCart={addToCartMock}
				/>
			</Router>
		);

		const productList = screen.getByTestId('product-preview-container');
		expect(productList.childNodes.length).toBe(3);
	});

	it('renders correct number of products (3)', () => {
		render(
			<Router>
				<Storefront
					products={mockProducts}
					title='Shop'
					addToCart={addToCartMock}
				/>
			</Router>
		);

		const totalItems = screen.getByTestId('total-items');
		expect(totalItems.textContent).toBe('Displaying 3 items');
	});
});
