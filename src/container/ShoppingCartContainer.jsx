import React from "react";
import ShoppingCartTable from "../components/shopping-cart-table";
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from "../actions";

import { connect } from "react-redux";

function ShoppingCartContainer(props) {
  return <ShoppingCartTable {...props} />;
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartContainer);
