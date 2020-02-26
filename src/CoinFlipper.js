import React, { Component } from "react";

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
  }
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Coin Flip</h1>
        <button>Flip</button>
        <p>
          you did {this.state.nFlips} Flips, you got {this.state.nHeads} Heads &{" "}
          {this.state.nTails} Tails
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
