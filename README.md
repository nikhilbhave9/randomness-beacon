# Publicly-verifable Randomness using Ethereum 
![Solidity](https://img.shields.io/badge/Solidity-0.8.13-red) ![React](https://img.shields.io/badge/React-JS-blue)

Project is hosted at: https://vibodhnautiyal.github.io/randomness-beacon/ (Note that you need to have the MetaMask extension installed on your browser and be on the Kovan Testnet)

Corresponding paper detailing the implementation and cryptographic primitives can be found under: https://github.com/vibodhnautiyal/randomness-beacon/blob/main/Blockchain_CSP_Vibodh_Nikhil_FinalProject_Report.pdf

Serves as final project for CS-2361: Blockchain and Cryptocurrencies (Spring 2022)

Contributors: 
- [Vibodh Nautiyal](https://github.com/vibodhnautiyal) 
- [Nikhil Bhave](https://github.com/nikhilbhave9)

## Why do we need publicly-verifiable randomness? 
Several entities in the modern world require some form of randomness- elections, lotteries, conscription or sports drafts. However, in most of these cases, the participants are required to place their faith in some central authority who is in charge of these entities (for example, the [NIST, USA](https://www.nist.gov/)). 
Thus, in this project, we propose a framework to generate random numbers that is: 
- public
- tamper-proof
- unpredictable
- eliminates the need for trust in a central authority

Note that we have extensively referred to a prior work: [On Bitcoin as a public randomness source](https://eprint.iacr.org/2015/1015.pdf)

## Implementation

### The Backend 
The backbone of our backend is a smart contract written in Solidity. The primary function of this smart contract is to obtain the (Current Block Number - 1) and use that to query the corresponding Block Hash. Finally, we pass this block hash along to the front-end. The contract has been deployed to the Kovan testnet and the address is: __0x69a928bca4a20c55145C04d44cd36e667c67D6ec__

### The Frontend
The front-end is developed primarily in React.js. We make our Solidity smart contract interact with the React Front-end using web3.js. Web3.js uses a fetch call to interact with the smart contract and get the block hash. The smart contract gets the hash of the latest block that was mined and runs it through the extractor function. It then returns this hex value. We display this number as a hex value and decimal in the live randomness feed. If the user wants a random number in a range, they can put the minimum and maximum value and we return a random value in that range.
