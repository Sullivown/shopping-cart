import React from 'react';
import priceFormatter from '../helpers/priceFormatter';

function CartProductPreview(props) {
	return (
		<section className='cart-product-preview'>
			<img src={props.product.image} alt={props.product.title} />
			<h3>{props.product.title}</h3>
			<input type='number' value={props.quantity}></input>
			<div>{priceFormatter(props.product.price * props.quantity)}</div>
		</section>
	);
}

export default CartProductPreview;
