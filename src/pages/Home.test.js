import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Home from './Home';

const mockProducts = [
	{
		id: 1,
		title: 'Product 1',
		price: 2.99,
		image: jest.mock('../assets/images/product-images/1.png'),
	},
	{
		id: 2,
		title: 'Product 2',
		price: 10,
		image: jest.mock('../assets/images/product-images/2.png'),
	},
	{
		id: 3,
		title: 'Product 3',
		price: 5.99,
		image: jest.mock('../assets/images/product-images/3.png'),
	},
];

describe('Test Home component', () => {
	it('renders 3 popular products', () => {
		render(
			<Router>
				<Home title='Home' products={mockProducts} />
			</Router>
		);

		const popularProductsList = screen.getByTestId(
			'product-preview-container'
		);

		expect(popularProductsList.childNodes.length).toBe(3);
	});
});
