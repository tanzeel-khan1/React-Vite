// src/apna/Cart.jsx

import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border rounded p-4 w-[200px] flex flex-col items-center shadow"
            >
              <img src={item.img} alt={item.des} className="h-[150px] object-cover mb-2" />
              <h2 className="font-semibold">{item.des}</h2>
              <p className="text-yellow-600 font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
