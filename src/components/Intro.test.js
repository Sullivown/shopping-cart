import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

import Intro from './Intro';

describe('Test Intro component', () => {
	it('renders', () => {
		const introTestRenderer = TestRenderer.create(<Intro />).toJSON();
		expect(introTestRenderer).toMatchSnapshot();
	});
});
