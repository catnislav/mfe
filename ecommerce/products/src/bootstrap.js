import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  // console.log(products);

  // document.querySelector('#dev-products').innerHTML = products;

  el.innerHTML = products;
};

// Context / Situataion #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which definitely has an element with an id of 'dev-producsts'
// We want go immediately render our app into that element

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element with id 'dev-products'
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context / Situation #2
// We are running this file in development or production through the container app
// No guarantee that an element with an id fo 'dev-products' exists
// We do not want to try to immediately render the app

export { mount };
