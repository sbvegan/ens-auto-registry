pragma solidity >=0.8.4;

import "hardhat/console.sol";

contract MockBaseRegistrar {
    bool expired;

    function setExpired(bool val) public {
        console.log("MockBaseRegistrar[setExpired]");
        console.log(val);
        expired = val;
    }

    function available(uint256 id) public view returns(bool) {
        console.log('MockBaseRegistrar[available]');
        console.log(id);
        return expired;
    }

    function register(uint256 id, address owner, uint duration) external view returns(uint) {
        console.log('MockBaseRegistrar[register]');
        console.log(id, owner, duration);
        return block.timestamp + duration;
    }

}
