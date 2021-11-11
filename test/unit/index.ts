import { expect } from "chai";
import { ethers } from "hardhat";
import { ContractFactory, Contract } from "ethers";

describe("ENSRenewal Unit Tests", () => {

    let ENSRenewal: ContractFactory;
    let eNSRenewal: Contract;

    before(async () => {
        ENSRenewal = await ethers.getContractFactory("ENSRenewal");
        eNSRenewal = await ENSRenewal.deploy();
        await eNSRenewal.deployed();
    })

    it("should", async () => {

        // expect(true).to.equal(false)
    })
})