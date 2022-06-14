import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop/Shop';
import Storefront from './pages/Shop/Storefront';
import Basket from './pages/Shop/Basket';
import Checkout from './pages/Shop/Checkout';

import products from './assets/products.json';

import './styles.css';

function App() {
	const [basket, setBasket] = useState([]);
	const productList = products.products;

	return (
		<BrowserRouter>
			<Header totalItems={basket.length} />
			<Routes>
				<Route path='/' element={<Home title='Home' />} />
				<Route path='about' element={<About title='About' />} />
				<Route path='shop' element={<Shop title='Shop' />}>
					<Route
						index
						element={
							<Storefront products={productList} title='Shop' />
						}
					/>
					<Route path='basket' element={<Basket title='Basket' />} />
					<Route
						path='checkout'
						element={<Checkout title='Checkout' />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
