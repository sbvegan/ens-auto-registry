// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

interface IBaseRegistrar {
    function available(uint256 label) external view returns(bool);
}

contract ENSRenewal is KeeperCompatibleInterface {

    address BaseRegistrarAddress;

    constructor(address _baseRegistrarAddress) {
        BaseRegistrarAddress = _baseRegistrarAddress;
    }

    function checkAvailability(uint256 _label) external view returns (bool) {
        return IBaseRegistrar(BaseRegistrarAddress).available(_label);
    }

    function registerENS(uint256 id, address owner, uint duration) external override returns(uint) {
        // BaseRegistrar Contract register steps
        // 1. checks availability
        // 2. checks for overflow, adds duration 
        // 3. updates the `expires` mapping with the id and the expiration time
        // 4. checks if the id exists, if so, burn that id
        // 5. mint a new NFT/ERC-721
        // 6. updates registry if necessary
        // 7. emits NameRegistered events
        // 8. returns the expiration time
        
    }

    function checkUpkeep(bytes calldata /* checkData */) external override returns (bool upkeepNeeded, bytes memory /* performData */) {
        upkeepNeeded = false;
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        // performUpkeep
    }   
}
