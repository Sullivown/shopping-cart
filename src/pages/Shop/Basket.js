import React, { useEffect } from 'react';
import updateDocumentTitle from '../../helpers/updateDocumentTitle';

function Basket(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	return (
		<div>
			<h2>Basket</h2>
		</div>
	);
}

export default Basket;
