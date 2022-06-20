import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import NotFound from './NotFound';

describe('Test NotFound component', () => {
	it('renders', () => {
		const notFoundTestRenderer = TestRenderer.create(<NotFound />).toJSON();
		expect(notFoundTestRenderer).toMatchSnapshot();
	});
});
