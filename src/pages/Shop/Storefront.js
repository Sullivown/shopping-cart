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
		<div className='storefront'>
			<div className='page-title-div'>
				<h2>Shop</h2>
				<span>Displaying {props.products.length} items</span>
			</div>

			<div className='product-preview-container'>{productElements}</div>
		</div>
	);
}

export default Storefront;
