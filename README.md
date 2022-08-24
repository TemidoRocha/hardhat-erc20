# Solidity, Ethereum and Blockchain: The Complete Developer's Guide

### Creating ERC-20 Token

Started from: Sample Hardhat Project
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

### Logs are based on bloom filter

- are stored by block and not by transaction.

### Deploying with Infura

- contract's Bytecode
- private key
- deployment tool
- ethereum node service

##### Mainet Considerations

- GAS
- Audit
- Source Code Verification

### Deploying with remix

flatten command

npx hardhat flatten contracts/ERC20.sol >> FlattenedERC20.sol
