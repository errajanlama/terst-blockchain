import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorldContract = await HelloWorld.deploy();
    await helloWorldContract.deployed();
    
    console.log("HelloWorld deployed to:", helloWorldContract.address);
    return helloWorldContract;
}

async function sayHello() {
    console.log("Calling hello() function...");
    const helloWorldContract = await deploy();
    const hello = await helloWorldContract.hello();
    console.log("Response from hello():", hello);   
}

deploy().then(() => sayHello())
.catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
});