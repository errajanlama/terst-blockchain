import { network } from "hardhat";

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 31337,
      // accounts: {
      //   count: 10,
      //   initialIndex: 0,
      //   mnemonic: "test test test test test test test test test test test junk",  // 12-word mnemonic for local testing
      // }
    }
  }
};
