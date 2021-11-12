// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IBaseRegistrar {
    function available(uint256 label) external view returns(bool);
}

contract ENSCheckAvailability {

    // address BaseRegistrarAddress 
    address BaseRegistrarAddress = 0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85;

    function checkAvailability(uint256 _label) external view returns (bool) {
        return IBaseRegistrar(BaseRegistrarAddress).available(_label);
    }

}
