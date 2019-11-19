import React from "react";
import { useHistory } from "react-router-dom";
import "../buttons.css";

const Graph = () => {
  const history = useHistory();

  return (
    <div>
      <div>
        There will be a graph.
        <button className="GraphButton" onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Graph;
