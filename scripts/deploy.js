async function main() {
  // Import the ethers library provided by Hardhat
  const { ethers } = require("hardhat");

  // Import the contract artifact
  const Storage = await ethers.getContractFactory("Storage");

  // Deploy the contract
  const storage = await Storage.deploy();

  // Wait for the deployment to be mined
  await storage.deployed();

  console.log("Storage contract deployed to:", storage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
