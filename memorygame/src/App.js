import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Jumbotron from "./components/Jumbotron.js";
import Gameboard from "./components/Gameboard.js";
import ClickableCard from "./components/ClickableCard.js";
import cards from "./cards.json";

class App extends React.Component {
  state = {
    cards: cards,
    score: 0,
    highScore: 0,
    clickedCharacters: []
  };

  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ cards: cards });
  }

  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className="col s3" key={card.id} id={card.id}>
        <ClickableCard
          name={card.name}
          image={card.image}
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
        // clickedCharacters={() => {this.clickedCharacters(card.id)}}
        />
      </section>
    ))
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {this.renderCards(this.state.cards)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
