import React, { Component } from "react";
import "./App.css";

import Search from "./components/Search";
import CurrentTemp from "./components/currentTemp";
import HourlyTemp from "./components/hourlyTemp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search />
        <CurrentTemp />
        <HourlyTemp />
      </div>

    );
  }
}

export default App;
