import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Jumbotron from "./components/Jumbotron.js";
// import Gameboard from "./components/Gameboard.js";
import ClickableCard from "./components/ClickableCard.js";
import cards from "./cards.json";
// import { throwError } from 'rxjs';

class App extends React.Component {
  state = {
    cards: cards,
    score: 0,
    highScore: 0,
    message: "Click a character!!",
    clickedCharacters: []
  };

  clickedCharacters = (id) => {
    // console.log(id);
    if (this.state.clickedCharacters.includes(id)) {
      // console.log(`You have clicked this already!`);
      this.setState({ message: "Game Over!" });
      this.setState({
        clickedCharacters: [],
        score: 0
      });
    } else {
      this.setState({ clickedCharacters: [...this.state.clickedCharacters, id] });
      this.setState({ score: this.state.score + 1 });
      // Check against the high score and update as necessary
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.highScore + 1 });
      }
      
      // End game if the score is equal to the number of cards
      // At this point, score is one less, so I am going
      // to adjust accordingly
      if (this.state.score + 1 === cards.length) {
        this.setState({message:`You Win!!`});
        this.setState({
          score: 0,
          clickedCharacters: []
        });
      } else {
        this.setState({ message: "Good Guess!!" })
      }

    }
  }

  // Found this algorithm online...
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
          reArrangeCards={() => { this.reArrangeCards(this.state.cards) }}
          clickedCharacters={() => { this.clickedCharacters(card.id) }}
        />
      </section>
    ))
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          message={this.state.message}
        />
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
