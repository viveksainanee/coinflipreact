import React, { Component } from 'react';
import Coin from './Coin.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: 'heads',
      headCount: 0,
      tailCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickHeadsOrTails() {
    let arr = ['heads', 'tails'];
    this.setState(st => {
      st.face = arr[Math.floor(Math.random() * 2)];
      if (st.face === 'heads') {
        st.headCount++;
      } else {
        st.tailCount++;
      }
      debugger;
      return st;
    });
  }

  handleClick(evt) {
    this.pickHeadsOrTails();
  }

  render() {
    return (
      <div className="App">
        Let's flip a coin
        <Coin face={this.state.face} />
        Out of {this.state.headCount + this.state.tailCount} flips, there have
        been {this.state.headCount} heads and {this.state.tailCount} tails.
        <button onClick={this.handleClick}>Flip me</button>
      </div>
    );
  }
}

export default App;
