import React, { useEffect } from 'react';
import updateDocumentTitle from '../../helpers/updateDocumentTitle';
import CartProductPreview from '../../components/CartProductPreview';

function Cart(props) {
	console.log(props.cart);
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	const cartProductElements = props.cart.map((item, index) => (
		<CartProductPreview
			key={index}
			product={item.item}
			quantity={item.quantity}
		/>
	));

	return (
		<div className='cart'>
			<h2>Cart</h2>
			<div className='cart-details'>
				<div className='cart-products-list'>{cartProductElements}</div>
				<div className='cart-summary'>
					<h3>Cart Total</h3>
					<p>£££</p>
					<button>Checkout</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
