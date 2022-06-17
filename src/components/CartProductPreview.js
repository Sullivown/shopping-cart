import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import priceFormatter from '../helpers/priceFormatter';

function CartProductPreview(props) {
	let navigate = useNavigate();
	const [quantity, setQuantity] = useState(props.quantity);

	function handleSubmit(e) {
		if (e.keyCode === 13) {
			e.target.blur();
		}
	}
	return (
		<section className='cart-product-preview'>
			<img
				src={props.product.image}
				alt={props.product.title}
				onClick={() => navigate(`/shop/${props.product.id}`)}
			/>
			<h3 onClick={() => navigate(`/shop/${props.product.id}`)}>
				{props.product.title}
			</h3>
			<input
				type='number'
				min='0'
				value={quantity}
				onChange={(e) => setQuantity(e.target.value || 0)}
				onBlur={() =>
					props.addToCart(props.product, parseInt(quantity), true)
				}
				onKeyUp={(e) => handleSubmit(e)}
			></input>
			<div>{priceFormatter(props.product.price * props.quantity)}</div>
		</section>
	);
}

export default CartProductPreview;
