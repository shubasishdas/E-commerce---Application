import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Mrs", lastName: "minju" },
      age: 2,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}{" "}
          </p>
          <button
            onClick={() => {
              this.setState(() => ({
                name: { firstName: "Mrs", lastName: "yoongi" },
              }));
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
