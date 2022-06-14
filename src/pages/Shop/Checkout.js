import React, { useEffect } from 'react';
import updateDocumentTitle from '../../helpers/updateDocumentTitle';

function Checkout(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});
	return (
		<div>
			<h2>Checkout</h2>
		</div>
	);
}

export default Checkout;
