import React, { useEffect } from 'react';
import updateDocumentTitle from '../helpers/updateDocumentTitle';

function About(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	return (
		<div>
			<h2>About Us</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at
				error corporis maxime quasi, earum id, quae modi ducimus odio a
				alias dignissimos libero eveniet assumenda nam tempore. Tempora,
				dicta.
			</p>
		</div>
	);
}

export default About;
