import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import ProductPreview from './ProductPreview';

const testProduct = {
	id: 1,
	title: '3D Glasses',
	price: 2.99,
	image: jest.mock('../assets/images/product-images/1.png'),
};

describe('Test ProductPreview Component', () => {
	const addToCartMock = jest.fn();
	it('renders correctly', () => {
		const productPreviewTestRenderer = TestRenderer.create(
			<Router>
				<ProductPreview
					key={testProduct.id}
					product={testProduct}
					addToCart={addToCartMock}
				/>
			</Router>
		).toJSON();

		expect(productPreviewTestRenderer).toMatchSnapshot();
	});

	it('Add to cart clicked once', () => {
		render(
			<Router>
				<ProductPreview
					key={testProduct.id}
					product={testProduct}
					addToCart={addToCartMock}
				/>
			</Router>
		);

		const addToCartButton = screen.getByRole('button', {
			name: 'Add to Cart',
		});

		userEvent.click(addToCartButton);

		expect(addToCartMock).toHaveBeenCalled();
	});

	it('Add to cart clicked multiple times', () => {
		render(
			<Router>
				<ProductPreview
					key={testProduct.id}
					product={testProduct}
					addToCart={addToCartMock}
				/>
			</Router>
		);

		const addToCartButton = screen.getByRole('button', {
			name: 'Add to Cart',
		});

		userEvent.click(addToCartButton);
		userEvent.click(addToCartButton);
		userEvent.click(addToCartButton);

		expect(addToCartMock).toHaveBeenCalledTimes(3);
	});
});
