// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

interface IBaseRegistrar {
    function available(uint256 label) external view returns(bool);
}

contract ENSRenewal is KeeperCompatibleInterface {

    // address BaseRegistrarAddress = 0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85;
    // corrected checksummed address?
    address BaseRegistrarAddress = 0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85;

    function checkAvailability(uint256 _label) external view returns (bool) {
        return IBaseRegistrar(BaseRegistrarAddress).available(_label);
    }

    function checkUpkeep(bytes calldata /* checkData */) external override returns (bool upkeepNeeded, bytes memory /* performData */) {
        upkeepNeeded = false;
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        // performUpkeep
    }   
}
