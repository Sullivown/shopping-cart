import products from '../assets/products.json';
import imageGallery from './imageGallery';

function initializeProducts() {
	let gallery = imageGallery();

	let productList = products.products.map((product) => ({
		...product,
		image: gallery[0],
	}));

	return productList;
}

export default initializeProducts;
