//React
import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";
//Redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
//Styles
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchtoProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchtoProps)(CartIcon);
