import React from 'react';
import { useParams } from 'react-router-dom';

function SingleProductView(props) {
	let params = useParams();
	const product = props.products.find(
		(product) => product.id === parseInt(params.productId)
	);

	return (
		<div>
			<h2>{product.id}</h2>
			<img src='#' alt={product.id} />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
				illo quis, explicabo consectetur, odio cumque optio at quisquam
				dignissimos incidunt vero. Iste excepturi, a facilis iusto
				quaerat cum doloremque fugit.
			</p>
			<button type='button'>Add to Cart</button>
		</div>
	);
}

export default SingleProductView;
