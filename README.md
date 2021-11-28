# ENS Auto Registry

It gives users the ability to auto renew their ENS domain. 

## Fall 2021 Chainlink Hackathon 

### Inspiration

This project was a way to explore Chainlink products and the ENS protocol.

### What it does

The code in the is repository has the ability to check the availability of 
ENS domain names. This can be achieve with Smart Contracts and a simple
script.

### How I built it

I used the hardhat framework and the nice documentation from [Chainlink](https://docs.chain.link/),
[ENS](https://docs.ens.domains/), and [ethersjs](https://docs.ethers.io/v5/).

### Challenges I ran into

The main challenge was that the ENS testnet contracts and the Chainlink keepers
smart contracts were not deployed on any common test network. The other 
challenge was to figure out how to test smart contracts.

### Accomplishments that I'm proud of

I'm proud of learning how to read deployed smart contracts in my own contracts
and learning more about the Ethereum developer ecosystem.


### What I learned

- How to do basic Hardhat testing
- How to read from a deployed contract in my own contract and using ethersjs
- How Chainlink VRF, oracles, and keepers work on a high level
- How the ENS protocol works on a high level

### What's next for ENS Auto-Registry

Nothing planned

## Planning

A list of necessary features and actions for a MVP.

**NOTE:** This project will be developed with TDD principles.

### ENS Renewal Smart Contract 

The Chainlink Keeper compatible smart contract will house the business logic 
that automatically renews ENS domains.

The application's Keeper compatible smart contract will have:

- [X] `checkUpkeep` and `performUpkeep` functions to maintain a 
`KeeperCompatibleInterface`.
    - NOTE: This is so it can be added to the Chainlink Keeper Registry
- [X] a way to check if the ENS domain is expired
- [ ] a way to renew the ENS domain

### Deploy the Smart Contract

The ENS Renewal smart contract will be deployed on an Ethereum testnet.

### Register and Fund Upkeep

The new contract will be registered through the [Chainlink Keeper App](https://keepers.chain.link/) 
and it will be funded with LINK tokens to cover the expenses + premium for 
running the upkeep.

## Possible Future Additions

### ENS Expiry Sniper

The application will watch specified ENS domains and register them if the 
previous owner lets them expire.

# Some Hardhat Commands

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```
