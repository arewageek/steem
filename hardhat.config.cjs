/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  paths: {
    sources: "src/solidity/contracts",
    artifacts: "src/solidity/artifacts",
    test: "src/solidity/test",
    cache: "src/solidity/cache",
  }
};
