require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const {API_URL, PRIVATE_KEY} = process.env;
 
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
