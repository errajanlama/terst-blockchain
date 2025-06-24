import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { Signer } from "ethers";    

// describe("HelloWorld", function () {
//   let helloWorld: any;
//   let owner: Signer;

//   beforeEach(async function () {
//     [owner] = await ethers.getSigners();
//     const HelloWorld = await ethers.getContractFactory("HelloWorld");
//     helloWorld = await HelloWorld.deploy();
//     await helloWorld.deployed();
//   });

//   it("should return the correct greeting", async function () {
//     expect(await helloWorld.greet()).to.equal("Hello, World!");
//   });

//   it("should allow the owner to set a new greeting", async function () {
//     const newGreeting = "Hello, Hardhat!";
//     await helloWorld.setGreeting(newGreeting);
//     expect(await helloWorld.greet()).to.equal(newGreeting);
//   });
// });

describe("hello world", function()
{
    it("should say hello world", async function () 
    {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const helloWorldContract = await HelloWorld.deploy();
        await helloWorldContract.deployed();

        const hello = await helloWorldContract.hello();
        expect(hello).to.be.equal("Hello world");
       
    });
});


//  describe("HelloWorld", function () {
//     it("Hello world", async function () {
//         // 1. setup 
//         // 2. Deploy the contract
//         // 3. Call the greet function
//         // 4. Assert the result
    
//         const [owner] = await ethers.getSigners();
//         const HelloWorld = await ethers.getContractFactory("HelloWorld"); // This will read contract file from artifacts
//         const hello = await HelloWorld.deploy(); // Deploy the contract
//         await hello.deployed();

//         expect(await hello.hello()).to.equal("Hello, World!");
//     });
// });