# ENS Auto Registry

It gives users the ability to auto renew their ENS domain. 

## Planning

A list of necessary features and actions for a MVP.

**NOTE:** This project will be developed with TDD principles.

### ENS Renewal Smart Contract 

The Chainlink Keeper compatible smart contract will house the business logic that automatically renews ENS domains.

The application's Keeper compatible smart contract will have:

- [ ] `checkUpkeep` and `performUpkeep` functions to maintain a `KeeperCompatibleInterface`.
    - NOTE: This is so it can be added to the Chainlink Keeper Registry
- [X] a way to check if the ENS domain is expired
- [ ] a way to renew the ENS domain

### Deploy the Smart Contract

The ENS Renewal smart contract will be deployed on an Ethereum testnet.

### Register and Fund Upkeep

The new contract will be registered through the [Chainlink Keeper App](https://keepers.chain.link/) and it will be funded with LINK tokens to cover the expenses + premium for running the upkeep.

## Possible Future Additions

### ENS Expiry Sniper

The application will watch specified ENS domains and register them if the previous owner lets them expire.
