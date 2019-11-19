import React from "react";
import "./App.css";
import Graph from "./components/Graph";
import MainComponent from "./components/MainComponent";
import Transaction from "./components/Transaction";
import Form from "./components/Form";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GetData from "./components/GetData";

class App extends React.Component {
  render() {
    return (
      <div>
        <Transaction />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainComponent} exact />
            <Route path="/graph" component={Graph} />
          </Switch>
        </BrowserRouter>
        <GetData />
      </div>
    );
  }
}

export default App;
