import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore:0,
    score:0
  };

  removeFriend = id => {
    friends.forEach(friendObject =>{ 
      if (id === friendObject.id){
        if (friendObject.clicked === false){
         
          friendObject.clicked = true;
          this.setState( {friends, score: this.state.score +1, topscore: this.state.topscore +1 });
        }
      else if (id === friendObject.id && friendObject.clicked === true){
        
          this.setState( {score: 0 });
          friends.clicked = false;
        }
      }

    });
   
    friends.sort(() => Math.random() - 0.5);
  };

  
  render() {
    return (

   
      <Wrapper>

        <Title>Crazy colors!! Click on a color and get a point. But don't click on the same color twice! <br></br>Score: { this.state.score} Top score: {this.state.topscore} </Title>
       

        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
