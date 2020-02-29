import React, { Component } from "react";
import { choice } from "./Helpers";
import Coin from "./Coin";

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-png" },
    ],
  };
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
    //getting a random coin
    const randCoin = choice(this.props.coins);
    //console.log(randCoin);
    this.setState((st) => {
      return {
        coin: randCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (randCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (randCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  handleClick(e) {
    this.flip();
  }
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Coin Flip</h1>
        {/* check if the state.coin is not null then send props to Coin Component */}
        {this.state.coin && <Coin data={this.state.coin} />}
        <button onClick={this.handleClick}>Flip</button>
        <p>
          Out Of {this.state.nFlips} Flips, you got {this.state.nHeads} Heads &{" "}
          {this.state.nTails} Tails
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
