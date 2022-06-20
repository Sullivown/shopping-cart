import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop/Shop';
import Storefront from './pages/Shop/Storefront';
import Cart from './pages/Shop/Cart';
import SingleProductView from './pages/Shop/SingleProductView';
import NotFound from './pages/NotFound';

import initializeProducts from './helpers/initializeProducts';

import './styles.css';

function App() {
	const [cart, setCart] = useState([]);
	const [totalItems, setTotalItems] = useState(0);

	const productList = initializeProducts();

	useEffect(() => {
		function getTotalItems() {
			const total = cart.reduce((total, current) => {
				total += current.quantity;
				return total;
			}, 0);
			return total;
		}

		setTotalItems(getTotalItems());
	}, [cart]);

	function addToCart(item, quantity, edit) {
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(cartItem) => cartItem.item.id === item.id
			);

			if (quantity === 0) {
				return prevCart.filter(
					(prevItem) => prevItem.item.id !== item.id
				);
			}

			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.item.id === item.id
						? {
								...cartItem,
								quantity: edit
									? quantity
									: cartItem.quantity + (quantity || 1),
						  }
						: cartItem
				);
			} else {
				console.log('got to the else');
				return [...prevCart, { item: item, quantity: 1 }];
			}
		});
	}

	return (
		<BrowserRouter basename='/shopping-cart'>
			<Header totalItems={totalItems} />
			<main>
				<Routes>
					<Route
						path='/'
						element={<Home title='Home' products={productList} />}
					/>
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
							element={
								<Cart
									title='Cart'
									cart={cart}
									addToCart={addToCart}
								/>
							}
						/>
						<Route
							path=':productId'
							element={
								<SingleProductView
									products={productList}
									addToCart={addToCart}
								/>
							}
						/>
					</Route>
					<Route
						path='*'
						element={<NotFound title='404 - Not Found' />}
					/>
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
