import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  text-align: center;
  color: yellow;
`;

const StyledLabel = styled.div`
  font-size: 1.5rem;
  background-color: white;
`;
const StyledAmount = styled.div`
  font-size: 2rem;
  color: ${({ isNegative }) => (isNegative ? "purple" : "green")};
`;

const Transaction = ({ label, amount }) => {
  return (
    <div>
      <Container>
        <StyledLabel>{label}</StyledLabel>
        <StyledAmount isNegative={amount < 0}>{amount}</StyledAmount>
      </Container>
    </div>
  );
};

export default Transaction;
