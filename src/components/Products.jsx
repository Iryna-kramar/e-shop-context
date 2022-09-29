import React from "react";
import Card from "./Card";
import styled from "styled-components";

function Products() {
  const products = [
    { name: "vest", price: 50 },
    { name: "jacket", price: 70 },
    { name: "sweater", price: 20 },
    { name: "t-shirt", price: 40 },
    { name: "neckleace", price: 70 },
    { name: "jumper", price: 40 },
  ];

  return (
      <ProductsWrapper>
        {products.map((product) => (
          <Card name={product.name} price={product.price} />
        ))}
      </ProductsWrapper>
  );
}

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;
export default Products;
