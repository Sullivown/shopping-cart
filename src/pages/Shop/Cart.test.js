import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

import Cart from './Cart';
import userEvent from '@testing-library/user-event';

const mockCart = [
	{
		item: {
			id: 1,
			title: 'Product 1',
			price: 2.99,
			image: jest.mock('../../assets/images/product-images/1.png'),
		},
		quantity: 1,
	},
	{
		item: {
			id: 2,
			title: 'Product 2',
			price: 10,
			image: jest.mock('../../assets/images/product-images/2.png'),
		},
		quantity: 2,
	},
	{
		item: {
			id: 3,
			title: 'Product 3',
			price: 5.99,
			image: jest.mock('../../assets/images/product-images/3.png'),
		},
		quantity: 3,
	},
];

describe('Cart component tests', () => {
	const addToCartMock = jest.fn();

	it('renders', () => {
		const cartRenderer = TestRenderer.create(
			<Router>
				<Cart title='Cart' cart={mockCart} addToCart={addToCartMock} />
			</Router>
		).toJSON();

		expect(cartRenderer).toMatchSnapshot();
	});

	it('renders empty cart (0 items) correctly', () => {
		render(
			<Router>
				<Cart title='Cart' cart={[]} addToCart={addToCartMock} />
			</Router>
		);

		const cartItems = screen.getByTestId('cart-products-list');

		expect(cartItems.childNodes.length).toBe(1);
		expect(cartItems.childNodes[0].textContent).toBe('Your cart is empty!');
	});

	it('renders 3 cart items', () => {
		render(
			<Router>
				<Cart title='Cart' cart={mockCart} addToCart={addToCartMock} />
			</Router>
		);

		const cartItems = screen.getByTestId('cart-products-list');

		expect(cartItems.childNodes.length).toBe(3);
	});

	it('calls addToCart correctly when qty edited and submitted', () => {
		render(
			<Router>
				<Cart title='Cart' cart={mockCart} addToCart={addToCartMock} />
			</Router>
		);

		const qtyInput = screen.getAllByRole('spinbutton', {
			type: 'number',
		})[0];

		userEvent.clear(qtyInput);
		userEvent.type(qtyInput, '0{Enter}');

		expect(qtyInput.value).toBe('0');
		expect(addToCartMock).toBeCalledWith(mockCart[0].item, 0, true);
	});
});
