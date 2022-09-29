import React, { useContext } from "react";
import { IoCartSharp, IoShirtOutline } from "react-icons/io5";
import styled from "styled-components";
import CardContext from "../CardContext";

function Card({ name, price }) {
  const { addToCard } = useContext(CardContext);

  return (
    <div onClick={() => addToCard(name, price)}>
      <CartWrapper>
        <CartStyle>
            <IoShirtOutline />
        </CartStyle>
        <CardInfo>
          <div>
            <h3>{name}</h3>
            <IoCartSharp />
          </div>
          <h4>{price}$</h4>
        </CardInfo>
      </CartWrapper>
    </div>
  );
}



export const CartWrapper = styled.div`
  display: block;
  width: 200px;
  margin: 20px;

  padding: 20px;
  box-sizing: border-box;
  background: #e1d2df;
  border: 1px solid none;
  border-radius: 5px;
`;

export const CartStyle = styled.div`
  width: 100%;
  height: 0;
  padding-top: 85%;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;


const CardInfo = styled.div`
margin-top: 40px;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const EmptyStyle = styled.div`
  /* For the empty cart */
  position: absolute;
  top: 0;
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`;

const Checkout = styled.div`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
  }
`;

export default Card;
