async function main() {
  const { ethers } = require("hardhat");
  const [deployer] = await ethers.getSigners();
  const Storage = await ethers.getContractFactory("Storage");

  // Replace with your deployed contract address
  const storage = Storage.attach("0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1");

  // Set data
  let tx = await storage.setData("asdfasdfasdfasdf");
  await tx.wait();
  console.log("Data has been set to 69");

  // Get data
  const data = await storage.getData();
  console.log("Data retrieved:", data);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
