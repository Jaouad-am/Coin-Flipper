import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  static defaultProps = [
    { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
    { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
  ];
  constructor(props) {
    super(props);
    this.state = {
      coin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flip() {
    console.log("clicked");
  }
  handleClick() {
    this.flip();
  }
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Coin Flip</h1>
        <Coin />
        <button onClick={this.handleClick}>Flip</button>
        <p>
          you did {this.state.nFlips} Flips, you got {this.state.nHeads} Heads &{" "}
          {this.state.nTails} Tails
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
