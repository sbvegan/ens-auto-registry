import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractFactory, Contract } from "ethers";

describe("ENSRenewal Unit Tests", () => {

    let ENSRenewal: ContractFactory;
    let eNSRenewal: Contract;

    let MockBaseRegistrar: ContractFactory;
    let mockBaseRegistrar: Contract;

    before(async () => {
        console.log("-----------------------------------------------");
        console.log("before all tests")
        console.log("deploying MockBaseRegistrar contract...")
        MockBaseRegistrar = await ethers.getContractFactory("MockBaseRegistrar");
        mockBaseRegistrar = await MockBaseRegistrar.deploy();
        await mockBaseRegistrar.deployed();
        console.log("deployed")

        console.log("deploying ENSRenewal contract...")
        ENSRenewal = await ethers.getContractFactory("ENSRenewal");
        eNSRenewal = await ENSRenewal.deploy(mockBaseRegistrar.address);
        await eNSRenewal.deployed();
        console.log("deployed")
        console.log("-----------------------------------------------");
    })

    it("should check if ens name is available", async () => {
        await mockBaseRegistrar.setExpired(true)
        const availability = await eNSRenewal.checkAvailability(0);
        expect(availability).to.equal(true)
    })

    it("should check if ens name is unavailable", async () => {
        await mockBaseRegistrar.setExpired(false)
        const availability = await eNSRenewal.checkAvailability(0);
        expect(availability).to.equal(false)
    })
})