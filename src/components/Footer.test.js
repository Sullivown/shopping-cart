import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import Footer from './Footer';

describe('Test Footer component', () => {
	it('renders', () => {
		const footerTestRenderer = TestRenderer.create(<Footer />).toJSON();
		expect(footerTestRenderer).toMatchSnapshot();
	});
});
