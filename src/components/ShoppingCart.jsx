import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Product Image</th>
            <th className="px-4 py-2 text-left">Product Name</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-8 py-2 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id} className="border-2">
              <td className="px-4 py-2">
                <img src={item.image} alt={item.name} className="w-24 h-20" />
              </td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">₹{item.price.toFixed(2)}</td>
              <td className="px-4 py-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className='border-2 border-black pl-2 pr-2 m-1 rounded-full transition transform duration-200 hover:scale-90'>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className='border-2 border-black pl-2 pr-2 m-1 rounded-full transition transform duration-200 hover:scale-90'>+</button>
              </td>
              <td className="px-4 py-2">₹{(item.price * item.quantity).toFixed(2)}</td>
              <td className="px-4 py-2 text-right">
                <button onClick={() => removeFromCart(item.id)} className='bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition transform hover:scale-95 duration-200'>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <div className='mr-4 flex flex-col items-end'>
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition transform hover:scale-95 duration-200" onClick={() => cartItems.forEach(item => removeFromCart(item.id))}>
          Clear Cart
        </button>
        </div>
        <div className="flex flex-row items-end justify-end mr-4 mt-6">
            <div className='border-2 p-2 border-black rounded-xl text-white bg-green-500 transition transform duration-200 hover:bg-green-600 hover:scale-95'>
          <span className=''>Subtotal: </span>
          <span className="ml-2">₹{subtotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-row items-end justify-end mr-4">
          <button className="mr-2 border-2 p-2 border-black rounded-xl text-white bg-green-500 transition transform duration-200 hover:bg-green-600 hover:scale-95">Checkout</button>
          </div>
          <div className='flex flex-row items-start justify-start mr-4'>
          <button className="ml-4 border-2 p-2 border-black rounded-xl text-white bg-blue-500 transition transform duration-200 hover:bg-blue-600 hover:scale-95">
            <Link to="/">Continue Shopping ⬅️</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
