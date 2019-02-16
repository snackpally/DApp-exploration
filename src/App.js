import React, { Component } from "react";
import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {
  state = { manager: "", players: [] };

  async componentDidMount() {
    const account = await web3.eth.getAccounts();
    console.log(account);

    const here = await lottery.options;
    console.log("contract address", here);

    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    console.log("manager", manager);
    console.log("players", players);

    this.setState({ manager: manager, players: players });
    console.log(web3.version);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
