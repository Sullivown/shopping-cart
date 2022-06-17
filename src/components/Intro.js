import React from 'react';
import WeBuyImg from '../assets/images/we-buy.png';
import WeSellImg from '../assets/images/we-sell.png';
import WeTradeImg from '../assets/images/we-trade.png';

function Intro() {
	return (
		<div className='home-section light-bg intro'>
			<section className='intro-section'>
				<img src={WeBuyImg} alt='We buy' />
				<h3>We Buy</h3>
				<p>
					We buy your old unwanted adventuring items. Get in touch for
					a valuation!
				</p>
			</section>
			<section className='intro-section'>
				<img src={WeSellImg} alt='We sell' />
				<h3>We Sell</h3>
				<p>
					We sell a wide range of adventuring items in our store.
					Please visit us to view our full range.
				</p>
			</section>
			<section className='intro-section'>
				<img src={WeTradeImg} alt='We trade' />
				<h3>We Trade</h3>
				<p>
					We also trade in unwanted items and treasures for store
					credit. Typically you will receive 20-30% more than cash
					value.
				</p>
			</section>
		</div>
	);
}

export default Intro;
