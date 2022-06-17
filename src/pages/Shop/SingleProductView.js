import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import priceFormatter from '../../helpers/priceFormatter';
import NotFound from '../NotFound';

function SingleProductView(props) {
	let params = useParams();
	const product = props.products.find(
		(product) => String(product.id) === params.productId
	);

	const [quantity, setQuantity] = useState(1);

	return product ? (
		<div className='page-content single-product-view'>
			<h2>{product.title}</h2>
			<div className='single-product-view--details'>
				<div>
					<img src={product.image} alt={product.title} />
				</div>
				<div className='single-product-view--description'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quod, illo quis, explicabo consectetur, odio
						cumque optio at quisquam dignissimos incidunt vero. Iste
						excepturi, a facilis iusto quaerat cum doloremque fugit.
					</p>
				</div>
				<div className='single-product-view--controls'>
					<p>Quantity:</p>
					<input
						type='number'
						min='0'
						value={quantity}
						onChange={(e) => setQuantity(e.target.value || 0)}
					></input>
					<div>{priceFormatter(product.price * quantity)}</div>
					<button
						type='button'
						onClick={() =>
							props.addToCart(product, parseInt(quantity), false)
						}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	) : (
		<NotFound />
	);
}

export default SingleProductView;
