import React from "react";
import styled from "styled-components";
import "../buttons.css";

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 16px 0px 10px;
  margin: 7px 16px 7px 10px;
`;

const ButtonGroup = ({ setFilter }) => {
  return (
    <div>
      <StyledButtonGroup>
        <div>
          <button
            className="ButtonGroupStyle"
            onClick={() => {
              setFilter("output");
            }}
          >
            Output
          </button>
        </div>
        <div>
          <button
            className="ButtonGroupStyle"
            onClick={() => {
              setFilter("input");
            }}
          >
            Input
          </button>
        </div>
        <div>
          <button
            className="ButtonGroupStyle"
            onClick={() => {
              setFilter("allofthem");
            }}
          >
            All transactions
          </button>
        </div>
      </StyledButtonGroup>
    </div>
  );
};

export default ButtonGroup;
