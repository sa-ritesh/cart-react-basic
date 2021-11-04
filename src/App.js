import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
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
  getCount = () => {
    const { products } = this.state;
    var count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  deleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar count={this.getCount()} />
        <Cart
          increase={this.increaseQuantity}
          decrease={this.decreaseQuantity}
          deletee={this.deleteProduct}
          products={this.state.products}
        />
      </React.Fragment>
    );
  }
}

export default App;
