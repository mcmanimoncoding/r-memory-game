import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
// import friends from "./characters.json";
import cards from "./cards.json";

class App extends Component {
  constructor(props){
    super(props);
  // Setting this.state.friends to the friends json array
  this.state = {
    cards: cards,
    score: 0,
    topScore: 11,
  }}

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        Current Score:<Score score={this.state.score}></Score>
        Top Score:<Score score={this.state.topScore}></Score>
        
        <Title>Card Game</Title>
        {this.state.cards.map(card => (
           <Card
           checkIfClicked={this.checkIfClicked}
           id={card.id}
           key={card.id}
           image={card.image}
           />
        ))}
      </Wrapper>
    );
  }
}

export default App;
