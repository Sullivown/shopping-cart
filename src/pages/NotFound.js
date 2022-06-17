import React, { useEffect } from 'react';
import updateDocumentTitle from '../helpers/updateDocumentTitle';
import SadCloud from '../assets/images/sad-cloud.png';

function NotFound(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	return (
		<div className='page-content not-found'>
			<img src={SadCloud} alt='Sad cloud' />
			<h2>404 - page not found!</h2>
		</div>
	);
}

export default NotFound;
