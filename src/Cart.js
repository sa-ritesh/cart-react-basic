import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Watch",
          price: 99,
          qty: 10,
        },
        {
          title: "Laptop",
          price: 99,
          qty: 4,
        },
        {
          title: "Mobile Phone",
          price: 99,
          qty: 1,
        },
      ],
    };
  }
  increaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem product={product} increase={this.increaseQuantity} />
          );
        })}
      </div>
    );
  }
}
export default Cart;
