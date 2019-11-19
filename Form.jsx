import React from "react";
import styled from "styled-components";
import "../buttons.css";

const Container = styled.div`
  display: flex;
  text-align: center;
  font-family: Calibri;
  background-color: Linen;
`;

const StyledLabel = styled.div`
  font-size: 1rem;
  padding: 0px 16px 0px 10px;
  margin: 0px 16px 0px 10px;
`;
const StyledAmount = styled.div`
  font-size: 1rem;
  font-family: Calibri;
  color: ${({ isNegative }) => (isNegative ? "darkred" : "green")};
`;

/*const StyledButton = styled.button`
  background-color: white;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
`;*/

const Form = ({ label, amount, onDelete }) => {
  return (
    <div>
      <Container>
        <StyledLabel>{label}</StyledLabel>
        <StyledAmount isNegative={amount < 0}>{amount}</StyledAmount>

        <button className="DeleteButton" onClick={onDelete}>
          x
        </button>
      </Container>
    </div>
  );
};

export default Form;
