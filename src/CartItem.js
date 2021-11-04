import React from "react";

const CartItem = (props) => {
  console.log(props);
  const { product } = props;
  const { price, title, qty } = product;
  const { increase } = props;
  const { decrease } = props;
  const { deletee } = props;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price} </div>
        <div style={{ color: "#777" }}>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1635999619~hmac=9ff6b260ef5fc5774cd842630b785968"
            onClick={() => increase(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={() => decrease(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            onClick={() => deletee(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
