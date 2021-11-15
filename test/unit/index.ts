import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractFactory, Contract } from "ethers";

describe("ENSRenewal Unit Tests", () => {

    let ENSRenewal: ContractFactory;
    let eNSRenewal: Contract;

    let MockBaseRegistrar: ContractFactory;
    let mockBaseRegistrar: Contract;

    // ENS

    before(async () => {
        // deploy mock base registrar contract
        MockBaseRegistrar = await ethers.getContractFactory("MockBaseRegistrar");
        mockBaseRegistrar = await MockBaseRegistrar.deploy();
        await mockBaseRegistrar.deployed();

        // deploy ENSRenewal contract
        ENSRenewal = await ethers.getContractFactory("ENSRenewal");
        eNSRenewal = await ENSRenewal.deploy(mockBaseRegistrar.address);
        await eNSRenewal.deployed();
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

    it("should register a new address", async () => {
        // TODO: set these variables, need to figure out how to derive the id
        const id = 0;
        const owner = "";
        const duration = 1;
        await eNSRenewal.register(id, owner, duration)
        // TODO: expecting the timestamp + duration and should be expiration time
        // maybe need to just make sure its greater than the timestamp         
    })
})