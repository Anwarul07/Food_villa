import React from "react";
import { useSelector } from "react-redux";
import { store } from "./utilty/store";

export const Cart = () => {
  const cartitem = useSelector((store) => store.cart.items);
  console.log(cartitem);

  return (
    <div className="min-80 min-h-80 m-10">
      <h3>Cart</h3>
      <p>{cartitem.length} items </p>
    </div>
  );
};
