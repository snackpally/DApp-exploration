//This file is only to create an abstracted object of our contract in the browser that we can interact with via web3
//in react

import web3 from "./web3";

const address = "0xa07BF245523Ce311DfC058F3FE8366E6CBa65Bd6";

const abi = [
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x481c6a75"
  },
  {
    constant: false,
    inputs: [],
    name: "pickWinner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x5d495aea"
  },
  {
    constant: true,
    inputs: [],
    name: "getPlayers",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8b5b9ccc"
  },
  {
    constant: false,
    inputs: [],
    name: "enter",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
    signature: "0xe97dcb62"
  },
  {
    constant: true,
    inputs: [[Object]],
    name: "players",
    outputs: [[Object]],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xf71d96cb"
  },
  {
    constant: true,
    inputs: [],
    name: "lotteryTotal",
    outputs: [[Object]],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xf94a28ff"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    constant: undefined,
    signature: "constructor"
  }
];

//exports a complete copy of our contract that we can interact with via web3 on the react side of our codebase
//this is our portal to the contract on the blockchain
export default new web3.eth.Contract(abi, address);
