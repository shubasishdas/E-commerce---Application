import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render cardlist");
    const { monsters } = this.props;
    console.log({ monsters });
    return (
      <div>
        {monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
