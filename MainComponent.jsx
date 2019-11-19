import React, { useState, useEffect } from "react";
import Form from "./Form";
import ButtonGroup from "./ButtonGroup";
import Pagination from "./Pagination";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "../buttons.css";

const StyledForm = styled.div`
  font-size: 14px;
  color: DarkMagenta;
  padding: 0px 16px 0px 10px;
  margin: 7px 16px 7px 10px;
`;

const transactionData = [
  { label: "transakce", amount: 1000 },
  { label: "transakce", amount: -1000 },
  { label: "transakce", amount: 1000 },
  { label: "transakce", amount: 1000 },
  { label: "transakce", amount: -1000 },
  { label: "transakce", amount: 1000 },
  { label: "transakce", amount: -1000 }
];

const MainComponent = () => {
  const [isClicked, setIsClicked] = useState(transactionData);
  const [filter, setFilter] = useState("allofthem");
  const [paged, setPaged] = useState(isClicked);

  const ClickMe = e => {
    e.preventDefault();
    setIsClicked([
      ...isClicked,
      {
        label: e.target.trname.value,
        amount: e.target.tramount.value
      }
    ]);
  };

  useEffect(() => {
    switch (filter) {
      case "allofthem":
        setIsClicked(transactionData);
        break;

      case "input":
        setIsClicked(isClicked.filter(({ amount }) => amount > 0));
        break;

      case "output":
        setIsClicked(isClicked.filter(({ amount }) => amount < 0));
        break;

      default:
        setIsClicked(transactionData);
        break;
    }
  }, [filter]);

  const { push } = useHistory();

  const onDelete = index => {
    console.log(index);
    setIsClicked(
      isClicked.filter((_, transactionIndex) => transactionIndex !== index)
    );
  };

  useEffect(() => {
    setPagination(0);
  }, []);

  const setPagination = pageNumber => {
    setPaged(paged.slice(pageNumber * 4, pageNumber * 4 + 4));
  };
  const getButtons = () => {
    return Array(Math.round(paged.length / 4)).fill();
  };

  return (
    <div>
      <button className="GraphButton" onClick={() => push("/graph")}>
        Graph
      </button>
      <ButtonGroup setFilter={setFilter} />
      {isClicked.map(({ label, amount }, index) => (
        <Form
          key={index}
          label={label}
          amount={amount}
          onDelete={() => onDelete(index)}
        />
      ))}

      <form onSubmit={ClickMe}>
        <StyledForm>
          New transaction:
          <input type="text" name="trname" />
          <br />
          Amount:
          <input type="number" name="tramount" />
          <br />
        </StyledForm>
        <button className="addNewTrans">Add new transaction</button>
      </form>

      <p>{paged.map(transaction => `${transaction},`)}</p>

      {getButtons().map((_, index) => (
        <button onClick={() => setPagination(index)} key={index}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default MainComponent;
