require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.0",
  networks: {
   rinkeby: {
     url: "65caea8be0ee438bb2548267d7450519", //Infura url with projectId
     accounts: ["ac84e56132f85206faaf656ce5416b00f62f1b8f1be9f2e3ad57cf196b1ba618"] // add the account that will deploy the contract (private key)
    },
  }
};