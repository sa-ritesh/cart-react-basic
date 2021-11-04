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
          id: 1,
        },
        {
          title: "Laptop",
          price: 99,
          qty: 4,
          id: 2,
        },
        {
          title: "Mobile Phone",
          price: 99,
          qty: 1,
          id: 3,
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
  decreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 1) {
      products[index].qty -= 1;
    }
    this.setState({
      products,
    });
  };
  deleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              increase={this.increaseQuantity}
              decrease={this.decreaseQuantity}
              deletee={this.deleteProduct}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
