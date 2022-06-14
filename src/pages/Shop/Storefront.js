import React, { useEffect } from 'react';
import updateDocumentTitle from '../../helpers/updateDocumentTitle';

function Storefront(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	const productElements = props.products.map((product) => (
		<div>{product.title}</div>
	));

	return (
		<div>
			<h2>Storefront</h2>
			<div>{productElements}</div>
		</div>
	);
}

export default Storefront;
