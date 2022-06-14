import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductPreview(props) {
	let navigate = useNavigate();
	return (
		<section className='product-preview'>
			<img src={props.product.image} alt={props.product.title} />
			<h3>{props.product.title}</h3>
			<button
				type='button'
				onClick={() => navigate(`/shop/${props.product.id}`)}
			>
				View Item
			</button>
			<button>Add to Cart</button>
		</section>
	);
}

export default ProductPreview;
