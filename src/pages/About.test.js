import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import About from './About';

describe('Test About component', () => {
	it('renders', () => {
		const AboutTestRenderer = TestRenderer.create(<About />).toJSON();
		expect(AboutTestRenderer).toMatchSnapshot();
	});
});
