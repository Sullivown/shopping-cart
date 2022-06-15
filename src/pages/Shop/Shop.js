import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import updateDocumentTitle from '../../helpers/updateDocumentTitle';

function Shop(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	return (
		<>
			<Outlet />
		</>
	);
}

export default Shop;
