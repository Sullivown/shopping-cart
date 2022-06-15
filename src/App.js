import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop/Shop';
import Storefront from './pages/Shop/Storefront';
import Cart from './pages/Shop/Cart';
import Checkout from './pages/Shop/Checkout';
import SingleProductView from './pages/Shop/SingleProductView';
import NotFound from './pages/NotFound';

import initializeProducts from './helpers/initializeProducts';

import './styles.css';

function App() {
	const [cart, setCart] = useState([]);
	const productList = initializeProducts();

	function addToCart(item, quantity = 1) {
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(cartItem) => cartItem.item.id === item.id
			);

			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.item.id === item.id
						? {
								...cartItem,
								quantity: cartItem.quantity + quantity,
						  }
						: cartItem
				);
			} else {
				return [...prevCart, { item: item, quantity: quantity }];
			}
		});
	}

	return (
		<BrowserRouter>
			<Header totalItems={cart.length} />
			<main>
				<Routes>
					<Route path='/' element={<Home title='Home' />} />
					<Route path='about' element={<About title='About' />} />
					<Route path='shop' element={<Shop title='Shop' />}>
						<Route
							index
							element={
								<Storefront
									products={productList}
									title='Shop'
									addToCart={addToCart}
								/>
							}
						/>
						<Route
							path='cart'
							element={<Cart title='Cart' cart={cart} />}
						/>
						<Route
							path='checkout'
							element={<Checkout title='Checkout' />}
						/>
						<Route
							path='checkout'
							element={<Checkout title='Checkout' />}
						/>
						<Route
							path=':productId'
							element={
								<SingleProductView products={productList} />
							}
						/>
					</Route>
					<Route
						path='*'
						element={<NotFound title='404 - Not Found' />}
					/>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
