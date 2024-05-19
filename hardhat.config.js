require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  defaultNetwork: "running",

  networks: {
    hardhat: {
      chainId: 1337,
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
    },

    running: {
      url: "http://localhost:8545",
      chainId: 1337,
    },
  },
};
