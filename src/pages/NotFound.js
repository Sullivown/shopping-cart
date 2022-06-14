import React, { useEffect } from 'react';
import updateDocumentTitle from '../helpers/updateDocumentTitle';

function NotFound(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	return (
		<div className='not-found'>
			<h2>404 - page not found!</h2>
		</div>
	);
}

export default NotFound;
