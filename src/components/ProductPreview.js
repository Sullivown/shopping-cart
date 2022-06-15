import React from 'react';
import { useNavigate } from 'react-router-dom';
import priceFormatter from '../helpers/priceFormatter.js';

function ProductPreview(props) {
	let navigate = useNavigate();

	return (
		<section className='product-preview'>
			<img
				src={props.product.image}
				alt={props.product.title}
				onClick={() => navigate(`/shop/${props.product.id}`)}
			/>
			<h3 onClick={() => navigate(`/shop/${props.product.id}`)}>
				{props.product.title}
			</h3>
			<p>{priceFormatter(props.product.price)}</p>
			<button
				type='button'
				onClick={() => navigate(`/shop/${props.product.id}`)}
			>
				View Item
			</button>
			<button onClick={() => props.addToCart(props.product)}>
				Add to Cart
			</button>
		</section>
	);
}

export default ProductPreview;
