import React, { useEffect, useState } from 'react';
import priceFormatter from '../helpers/priceFormatter';

function CartProductPreview(props) {
	const [quantity, setQuantity] = useState(props.quantity);

	function handleSubmit(e) {
		if (e.keyCode === 13) {
			e.target.blur();
		}
	}
	return (
		<section className='cart-product-preview'>
			<img src={props.product.image} alt={props.product.title} />
			<h3>{props.product.title}</h3>
			<input
				type='number'
				min='0'
				value={quantity}
				onChange={(e) => setQuantity(e.target.value)}
				onBlur={(e) =>
					props.addToCart(props.product, parseInt(quantity))
				}
				onKeyUp={(e) => handleSubmit(e)}
			></input>
			<div>{priceFormatter(props.product.price * props.quantity)}</div>
		</section>
	);
}

export default CartProductPreview;
