import React from "react";
import styled from "styled-components";
import "../buttons.css";

const StPage = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 16px 0px 10px;
  margin: 7px 16px 7px 10px;
`;

const Pagination = ({ setPaged }) => {
  return (
    <div>
      <StPage>
        <button
          className="pagebut"
          onClick={() => {
            setPaged("firstOne");
          }}
        >
          1
        </button>
        <button
          className="pagebut"
          onClick={() => {
            setPaged("secondOne");
          }}
        >
          2
        </button>
        <button
          className="pagebut"
          onClick={() => {
            setPaged("thirdOne");
          }}
        >
          3
        </button>
        <button
          className="pagebut"
          onClick={() => {
            setPaged("rest");
          }}
        >
          ...
        </button>
      </StPage>
    </div>
  );
};

export default Pagination;
