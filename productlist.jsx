import React, { useState } from 'react';
import Product from './Product';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Fiddle Leaf Fig', price: 1200, image: 'fiddle-leaf.jpg' },
    { id: 2, name: 'Snake Plant', price: 800, image: 'snake-plant.jpg' },
    { id: 3, name: 'Monstera', price: 1500, image: 'monstera.jpg' },
    { id: 4, name: 'Peace Lily', price: 900, image: 'peace-lily.jpg' },
    { id: 5, name: 'Pothos', price: 700, image: 'pothos.jpg' },
    { id: 6, name: 'ZZ Plant', price: 1100, image: 'zz-plant.jpg' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <header>
        <h1>Paradise Nursery</h1>
        <div className="cart-icon">
          Cart ({cart.length})
        </div>
      </header>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
