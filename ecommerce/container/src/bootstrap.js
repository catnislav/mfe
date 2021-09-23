// import 'products/ProductsIndex';
// import 'cart/CartIndex';
import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

// console.log('Container');

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
