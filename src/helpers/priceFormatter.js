function priceFormatter(price) {
	const priceFormatter = Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
	});

	return priceFormatter.format(price);
}

export default priceFormatter;
