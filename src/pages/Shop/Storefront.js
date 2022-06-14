import React, { useEffect } from 'react';
import updateDocumentTitle from '../../helpers/updateDocumentTitle';
import ProductPreview from '../../components/ProductPreview';

function Storefront(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	const productElements = props.products.map((product) => (
		<ProductPreview product={product} />
	));

	return (
		<div>
			<h2>Storefront</h2>
			<div>{productElements}</div>
		</div>
	);
}

export default Storefront;
