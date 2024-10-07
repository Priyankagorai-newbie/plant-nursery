import React, { useState } from 'react';
import Product from './product';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Fiddle Leaf Fig', price: 1200, image: 'https://www.plantz.com/wp-content/uploads/2016/06/Keith-Lyrata-Stan.-12.jpg' },
    { id: 2, name: 'Snake Plant', price: 800, image: 'https://gardeningtips.in/wp-content/uploads/2020/07/Comp2-10.jpg' },
    { id: 3, name: 'Monstera', price: 1500, image: 'https://th.bing.com/th/id/OIP.a0iCJ4RE7dfmEQuHJWj1ogHaJ1?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Peace Lily', price: 900, image: 'https://th.bing.com/th/id/OIP.iHI04jh4Es7fikhtSBUTVQHaLI?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Pothos', price: 700, image: 'https://fthmb.tqn.com/LaUiXL8DkbroBoEbfutFIm6QpRw=/2400x1600/filters:fill(auto,1)/Pothos-3301016015_ae70c2d76b_o-588cc26a5f9b5874eeb19399.jpg' },
    { id: 6, name: 'ZZ Plant', price: 1100, image: 'https://www.plantandpot.nz/wp-content/uploads/2020/12/ZZ-Plants-Larger-Grade-1536x1536.jpg' },
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
