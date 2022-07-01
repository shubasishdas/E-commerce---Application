import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    console.log(1);
  }

  componentDidMount() {
    console.log(3);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    console.log(2);
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
