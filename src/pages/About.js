import React, { useEffect } from 'react';
import updateDocumentTitle from '../helpers/updateDocumentTitle';

function About(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	return (
		<div className='page-content about'>
			<h2>About Us</h2>
			<p>
				Our Story started in 1789 when our founder, Sir Brantham Dante,
				started selling his wares on the corner of Moth Lane and Cricks
				Street. Over the years his shop evolved into a adventuring
				equipment specialist and was sold to its current owner in 1851.
				All our adventuring items are hand tested, cleaned and often
				refurbished to make sure items reach you in the best possible
				condition. We sell a wide range of goods including: Weapons,
				armour, potions, adventuring equipment and many more.
			</p>
		</div>
	);
}

export default About;
