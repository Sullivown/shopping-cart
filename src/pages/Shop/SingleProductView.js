import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';

function SingleProductView(props) {
	let params = useParams();
	const product = props.products.find(
		(product) => String(product.id) === params.productId
	);

	return product ? (
		<div className='page-content single-product-view'>
			<h2>{product.title}</h2>
			<img src={product.image} alt={product.title} />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
				illo quis, explicabo consectetur, odio cumque optio at quisquam
				dignissimos incidunt vero. Iste excepturi, a facilis iusto
				quaerat cum doloremque fugit.
			</p>
			<button type='button'>Add to Cart</button>
		</div>
	) : (
		<NotFound />
	);
}

export default SingleProductView;
