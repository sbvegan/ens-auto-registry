import { ethers } from "hardhat";

const main = async () => {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    console.log("Deploying BaseRegistrar...")
    const BaseRegistrar = await ethers.getContractFactory("BaseRegistrar");
    const baseRegistrar = await BaseRegistrar.deploy();
    console.log("deployed.")
    console.log("BaseRegistrar address:", baseRegistrar.address);

    console.log("Deploying ENSRenewal...")
    const ENSRenewal = await ethers.getContractFactory("ENSRenewal");
    const eNSRenewal = await ENSRenewal.deploy();
    console.log("deployed.")
    console.log("ENSRenewal address:", eNSRenewal.address);



}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
  