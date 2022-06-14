import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import updateDocumentTitle from '../helpers/updateDocumentTitle';

function Home(props) {
	useEffect(() => {
		updateDocumentTitle(props.title);
	});

	return (
		<div className='home'>
			<div>
				<h2>Hero Div</h2>
			</div>
			<div>
				<h2>About us</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Obcaecati culpa, enim tenetur est quasi unde itaque iusto
					sed voluptatibus sapiente libero quod! Nobis maiores
					accusamus natus sed laudantium totam fuga.
				</p>
				<Link to='about'>
					<button type='button'>Find Out More</button>
				</Link>
			</div>
			<div>
				<h2>Popular Items</h2>
				<div>items!</div>
			</div>
			<div>
				<h2>Contact Us</h2>
				<p>email@email.com</p>
			</div>
		</div>
	);
}

export default Home;
