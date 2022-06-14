import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import cartImg from '../assets/images/cart.png';

function Header(props) {
	return (
		<header>
			<div className='site-title-div'>
				<Link to='/'>
					<img src={logo} alt='Logo' />
				</Link>
				<Link to='/'>
					<h1>AdventureMart</h1>
				</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link to='about'>About</Link>
					</li>
					<li>
						<Link to='shop'>Shop</Link>
					</li>

					<li className='cart-container'>
						<Link to='shop/basket'>
							<img
								className='cart-img'
								src={cartImg}
								alt='Shopping cart'
							/>
							<span data-testid='total-basket-items'>
								{props.totalItems && props.totalItems}
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
