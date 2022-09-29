import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { IoCartSharp } from "react-icons/io5";
import styled from "styled-components";
import CardContext from "../CardContext";

function Nav() {
  const {items} = useContext(CardContext);

  return (
    <NavItem>
      <Link to={"/"}>
        <h3>Wear</h3>
      </Link>
      <Link to={"/checkout"}>
        <div className="card">
          <IoCartSharp />
          <span>{items.length}</span>
        </div>
      </Link>
    </NavItem>
  );
}



const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  min-height: 15vh;
  width: 100%;
  background-color: #df7ecf;
  color: #303030;
  a {
    font-size: 1.5rem;
  }

  div {
    margin-left: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  h3 {
    font-size: 1.5rem;
    padding: 0.25rem;
  }

  span {
    background: #c03c3c;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    position: absolute;
    right: -10%;
    top: -20%;
    font-weight: 700;
    pointer-events: none;
  }
`;

export default Nav;

