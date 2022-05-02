// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

// Chainlink -> use this as a middleware to directly get block hash

contract MyContract {

    function extractor() public view returns(bytes32) {
        uint _previousBlockNumber;
        bytes32 _previousBlockHash; // this is "m" and is of length 256 bits 
        bytes memory _hashinbytes;
        bytes32 _hashOfHash; // this is Hash of m
        _previousBlockNumber = uint(block.number - 1);
        _hashinbytes = abi.encodePacked(_previousBlockHash);
        _hashOfHash = sha256(_hashinbytes);
        
        return (_hashOfHash);
    }  

}