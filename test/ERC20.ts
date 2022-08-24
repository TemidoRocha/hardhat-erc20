import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC20 } from "../typechain-types/ERC20";


describe("ERC20Contract", function () {
  let ERC20Contract: ERC20;
  let someAddress: SignerWithAddress;
  let someOtherAddress: SignerWithAddress;

  beforeEach(async function(){
    const ERC20ContractFactory = await ethers.getContractFactory("ERC20");
    ERC20Contract = await ERC20ContractFactory.deploy("hello", "SYM");
    await ERC20Contract.deployed();

    someAddress = (await ethers.getSigners())[1];
    someOtherAddress = (await ethers.getSigners())[2];
  })

  describe("When I have 10 tokens", function(){
    beforeEach(async function() {
      await ERC20Contract.transfer(someAddress.address, 10);
    })
    describe("When I transfer 10 tokens", function(){
      it("should transfer token correctly", async function(){
        await ERC20Contract.connect(someAddress).transfer(someOtherAddress.address, 10);
  
        expect(await ERC20Contract.balanceOf(someOtherAddress.address)).to.equal(10);
      })
    })
    
    describe("When I transfer 15 tokens", function(){
      it("should revert the transaction", async function(){
        await expect(ERC20Contract.connect(someAddress).transfer(someOtherAddress.address, 15)).to.be.revertedWith("ERC20: transfer amount exceeds balance");
      })
    })
  })
  
});
