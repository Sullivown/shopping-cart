import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductPreview from '../components/ProductPreview';
import updateDocumentTitle from '../helpers/updateDocumentTitle';
import Intro from '../components/Intro';

function Home(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	function getPopularItems(arr, num) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());

		return shuffled.slice(0, num);
	}

	const popularItems = getPopularItems(props.products, 5);

	const productElements = popularItems.map((product) => (
		<ProductPreview
			key={product.id}
			product={product}
			addToCart={props.addToCart}
		/>
	));

	return (
		<div className='home'>
			<div className='hero'>
				<div className='hero-text'>
					<h2>AdventureMart</h2>
					<p>for all your adventuring needs</p>
				</div>
			</div>
			<Intro />
			<div>
				<div className='home-section dark-bg about'>
					<h2>About us</h2>
					<p>
						Here at AdventureMart we sell the highest quality of
						adventuring goods for you to complete your next quest,
						defeat your arch-nemesis or just display at home to make
						you feel like an adventurer. All our adventuring items
						are hand tested, cleaned and often refurbished to make
						sure items reach you in the best possible condition.
						Shop AdventureMart today!
					</p>
					<Link to='about'>
						<button type='button'>Find Out More</button>
					</Link>
				</div>
				<div className='home-section light-bg popular-items'>
					<h2>Popular Items</h2>
					<div
						className='product-preview-container'
						data-testid='product-preview-container'
					>
						{productElements}
					</div>
				</div>
				<div className='home-section dark-bg contact'>
					<h2>Contact Us</h2>
					<p>email@email.com</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
