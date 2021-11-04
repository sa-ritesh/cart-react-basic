import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Jai",
          price: 99,
          qty: 1,
        },
        {
          title: "Shree",
          price: 99,
          qty: 1,
        },
        {
          title: "Ram",
          price: 99,
          qty: 1,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((item) => {
          return <CartItem product={item} />;
        })}
      </div>
    );
  }
}
export default Cart;
