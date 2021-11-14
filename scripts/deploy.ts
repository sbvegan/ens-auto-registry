import { ethers } from "hardhat";

const main = async () => {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    // TODO: figure out why I can't deploy this
    // console.log("Deploying MockBaseRegistrar...")
    // const MockBaseRegistrar = await ethers.getContractFactory("MockBaseRegistrar");
    // const mockBaseRegistrar = await MockBaseRegistrar.deploy();
    // console.log("deployed.")
    // console.log("MockBaseRegistrar address:", mockBaseRegistrar.address);

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
  