import React, { useContext } from "react";
import { IoCartSharp, IoLogoSteam, IoShirtOutline } from "react-icons/io5";
import styled from "styled-components";
import CardContext from "../CardContext";

function Checkout() {
  const { items } = useContext(CardContext);

  return (
    <div>
      <h2>Checkout</h2>
      <div className="shopping-bag">
        {items.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checkout;
