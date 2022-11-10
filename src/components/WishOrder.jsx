import React from "react";
import PropTypes from "prop-types";

function WishOrder({ onWishesOrder }) {
  return <input type="button" value="Order" onClick={onWishesOrder} />;
}

WishOrder.propTypes = {
  onWishesOrder: PropTypes.func,
};

WishOrder.defaultProps = {
  onWishesOrder: () => {},
};

export default WishOrder;
