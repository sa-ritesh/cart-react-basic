import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products } = props;
  const { amount } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            increase={props.increase}
            decrease={props.decrease}
            deletee={props.deletee}
            src={product.src}
          />
        );
      })}
      <h3>TOTAL: {amount}</h3>
    </div>
  );
};

export default Cart;
