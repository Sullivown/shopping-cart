import React, { useEffect } from 'react';
import updateDocumentTitle from '../../helpers/updateDocumentTitle';
import CartProductPreview from '../../components/CartProductPreview';
import priceFormatter from '../../helpers/priceFormatter';

function Cart(props) {
	const cartTotal = priceFormatter(
		props.cart.reduce((total, item) => {
			return (total += item.item.price * item.quantity);
		}, 0)
	);

	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	const cartProductElements = props.cart.map((item) => (
		<CartProductPreview
			key={item.item.id}
			product={item.item}
			quantity={item.quantity}
			addToCart={props.addToCart}
		/>
	));

	return (
		<div className='page-content cart'>
			<h2>Cart</h2>
			<div className='cart-details'>
				<div className='cart-products-list'>
					{props.cart.length > 0 ? (
						cartProductElements
					) : (
						<section className='cart-product-preview--empty'>
							Your cart is empty!
						</section>
					)}
				</div>
				<div className='cart-summary'>
					<h3>Cart Total</h3>
					<p>{cartTotal}</p>
					<button>Checkout</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
