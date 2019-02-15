import Web3 from "web3";
//this line here takes the provider from the metamask injected web3 instance and applies it to our instance of Web3
const web3 = new Web3(window.web3.currentProvider);

export default web3;
