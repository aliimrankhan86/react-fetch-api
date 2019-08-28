import React from "react";
import ReactDOM from "react-dom";
import Names from "./Names";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fetch("https://randomuser.me/api/?results=10"),
      names: []
    };
  }
  render() {
    const datalist = this.state.data;
    datalist
      .then(res => res.clone().json())
      .then(data => {
        const dataItem = data.results;
        const names = dataItem.map(item => {
          const person = {
            name: item.name.first
          };
          return person;
        });

        this.setState({
          names: names
        });
      });

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Names names={this.state.names} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
