import React, { Component } from "react";
import FriendCard from "./components/Rules";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import Rules from "./components/Rules";
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
  }
  this.clickCheck = this.clickCheck.bind(this);
}


  clickCheck = id=>{
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    let cardSwitch = this.state.cards.slice().sort(function(a, b){return 0.5 - Math.random()});
    

    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      cardSwitch[cardSwitch.findIndex((card) => card.id === id)] = clickedCard;

    

  // set the state and increment the counter
  this.setState({
    cards: cardSwitch,
    currentScore: this.state.currentScore + 1,
    topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
  });
    
    }else {
      
      let reset = cardSwitch.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      this.setState({
        cards: reset,
        currentScore: 0,
      });
    } 
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Rules></Rules> */}
        Current Score:<Score score={this.state.score}></Score>
        Top Score:<Score score={this.state.topScore}></Score>

        <Title>Motorcycle Mis-Match</Title>
        {this.state.cards.map(card => (
           <Card
           checkIfClicked={this.clickCheck}
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
