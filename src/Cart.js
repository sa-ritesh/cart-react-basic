import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products } = props;
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
          />
        );
      })}
    </div>
  );
};

export default Cart;
