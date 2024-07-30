import React from 'react';
import { useCart } from '../CartContext';
import iphoneImage from '../assets/images/iphoneImage.jpg';
import laptopImage from '../assets/images/laptopImage.jpg';

const products = [
  { id: 1, name: 'Apple iPhone', price: 69999.00, image: iphoneImage },
  { id: 2, name: 'ASUS ROG Laptop', price: 90000.00, image: laptopImage },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-row justify-start gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border-2 border-black rounded-3xl border-dashed p-4 flex flex-col items-center w-64 transition transform duration-300 hover:scale-105">
          <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4 border-2 p-1 border-black rounded-2xl transition transform duration-300 hover:scale-110" />
          <div className="text-center">
            <h3 className="font-bold">{product.name}</h3>
            <p>₹{product.price.toFixed(2)}</p>
            <button 
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition transform hover:scale-95 duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
