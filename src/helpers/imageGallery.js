function importAll(r) {
	let images = {};
	r.keys().map((item) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

function imageGallery() {
	const images = importAll(
		require.context('../assets/images/product-images', false, /.png/)
	);
	return images;
}

export default imageGallery;
