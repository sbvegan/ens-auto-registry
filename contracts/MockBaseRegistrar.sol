// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import 'hardhat/console.sol';
import '@ensdomains/ens-contracts/contracts/ethregistrar/BaseRegistrar.sol';

abstract contract MockBaseRegistrar is BaseRegistrar {

    // I can update this variable for unit tests
    bool expired;

    // returns expired
    function available(uint256 id) public view override returns(bool) {
        console.log("MockBaseRegistrar[available]");
        console.log(id);
        return expired;
    }

}