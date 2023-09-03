import React from "react";
import "./App.css";
import Newcomp from "./Components/Newcomp"
class App extends React.Component {
  styles={
    fontstyle: "bold",
    color:"teal"
  }
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <Newcomp />
      </div>
    )
  }
}

export default App
