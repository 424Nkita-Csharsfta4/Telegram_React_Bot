import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "Товар не выбран!" : ""}
      <br /> <span className="">Общяя цена: {totalPrice.toFixed(2)}₽</span>
      <a href="https://t.me/SoftUpXi">
      <Button
        title={`${cartItems.length === 0 ? "Выбери !" : "Купить"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout} 
        
      />
      </a>
    </div>
  );
}

export default Cart;
