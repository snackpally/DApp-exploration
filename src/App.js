import React, { Component } from "react";
import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: "",
    sendAmt: "",
    transMsg: ""
  };

  async componentDidMount() {
    const account = await web3.eth.getAccounts();
    console.log("accounts", account);

    const here = await lottery.options;
    console.log("contract address", here);

    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    console.log("balance", balance);
    console.log("manager", manager);
    console.log("players", players);

    this.setState({ manager, players, balance });
    console.log(web3.version);
  }

  onSend = async e => {
    e.preventDefault();

    const accounts = await web3.eth.getAccounts();
    this.setState({ transMsg: "Waiting on transaction success..." });

    await web3.eth.sendTransaction({
      from: accounts[0],
      to: "0xEF4a23Eae7F2320082E5bc3b22995e9752e257BC",
      value: web3.utils.toWei(this.state.sendAmt, "ether")
    });

    this.setState({ transMsg: "Your Ether has been sent" });
  };

  onSubmit = async e => {
    e.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });

    this.setState({ message: "You have entered the lottery" });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager} There are currently{" "}
          {this.state.players.length} people entered in this Lottery trying for{" "}
          {web3.utils.fromWei(this.state.balance, "ether")} ether!
        </p>
        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Enter to try your luck</h4>
          <label>Enter</label>

          <input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
          <button>Enter</button>
        </form>

        <hr />
        <h2>Status: </h2>
        <h3>{this.state.message}</h3>
        <hr />
        <div>
          <h2>Send Your Ether</h2>
          <form onSubmit={this.onSend}>
            <label>How Much</label>
            <input
              value={this.state.sendAmt}
              onChange={event => this.setState({ sendAmt: event.target.value })}
            />
            <button>Send</button>
          </form>
          <h2>Status: </h2>
          <h3>{this.state.transMsg}</h3>
        </div>
      </div>
    );
  }
}

export default App;
