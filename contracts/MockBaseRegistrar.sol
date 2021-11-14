pragma solidity >=0.8.4;

contract MockBaseRegistrar {
    bool expired;

    function setExpired(bool val) public {
        expired = val;
    }

    function available(uint256 id) public view returns(bool) {
        return expired;
    }   
}
