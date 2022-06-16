import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductPreview from '../components/ProductPreview';
import updateDocumentTitle from '../helpers/updateDocumentTitle';

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
			<div className='page-content'>
				<div className='home-section'>
					<h2>About us</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Obcaecati culpa, enim tenetur est quasi unde itaque
						iusto sed voluptatibus sapiente libero quod! Nobis
						maiores accusamus natus sed laudantium totam fuga.
					</p>
					<Link to='about'>
						<button type='button'>Find Out More</button>
					</Link>
				</div>
				<div className='popular-items'>
					<h2>Popular Items</h2>
					<div className='product-preview-container'>
						{productElements}
					</div>
				</div>
				<div className='home-section'>
					<h2>Contact Us</h2>
					<p>email@email.com</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
