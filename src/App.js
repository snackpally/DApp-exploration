import React, { Component } from "react";
import web3 from "./web3";
import lottery from "./lottery";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manager: ""
    };
  }

  async componentDidMount() {
    const account = await web3.eth.getAccounts();
    console.log(account);

    const here = await lottery.options;
    console.log("contract address", here);

    const total = await lottery.methods.lotteryTotal().call();
    console.log("total", total);

    const manager = await lottery.methods.manager().call({ from: account[0] });
    console.log(manager);
  }
  render() {
    console.log(web3.version);
    console.log(this.state);
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager || "Not returning"}
        </p>
      </div>
    );
  }
}

export default App;
