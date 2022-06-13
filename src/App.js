import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';

function App() {
	const [testNumber, setTestNumber] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home testNumber={testNumber} />} />
				<Route path='about' element={<About />} />
				<Route path='shop' element={<Shop />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
