import products from '../assets/products.json';
import imageGallery from './imageGallery';

function initializeProducts() {
	let gallery = imageGallery();

	let productList = products.products.map((product, index) => ({
		...product,
		image: gallery[`${index + 1}.png`],
	}));

	return productList;
}

export default initializeProducts;
