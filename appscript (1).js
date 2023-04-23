//imported from https://www.dappuniversity.com/articles/web3-js-intro
//imported from https://www.newline.co/courses/intro-to-programming-ethereum-dapps/transferring-eth
App = {
  web3Provider: null,
  contracts: {},
  contractInstance: null,
  account: null,

  init: async function() {
    // initialize web3 provider
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
      web3 = new Web3(App.web3Provider);
    }

    // get current account
    App.account = web3.eth.accounts[0];
    App.contractstart
  },
  contractstart: function() {
      this.getJSON("SmartCode,sol"), function(SmartCode.sol) {
      Appstarter = App.contracts
      Appstarter.withdraw
      
      Appstarter.setProvider(App.web3Provider)   
      }
  }  
  signin: async function(){
      return web3.eth.accounts[0] // return the account 
  }  

  withdraw: async function() {
    var smartContract = await SmartContract.deployed();
    if (web3.eth.getBalance(web3.eth.accounts[0]) > 0) {
      const conversionRate = web3.utils.fromWei(web3.eth.getBalance(web3.eth.accounts[1]), 'ether');
      // send the converted values, transfer tokens 
    }
    return web3.eth.accounts[0];
  },

  getBalancePrinter: async function() {
    console.log(await web3.eth.getBalance(web3.eth.accounts[0])); // prints the current account balance 
  },

  getTokenOwner: async function() {
    return web3.eth.accounts[0]; // returns the owner of the owner
  },

  burnToken: async function() {
    if (web3.eth.accounts[0] !== web3.eth.accounts[1]) {
      console.log("ERC721: caller is not owner nor approved");
      // _burn()
    }
  }
}

