import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await   counter.deployed();
    console.log("Counter deployed to:", counter.address);
    console.log("Counter contract ABI:", JSON.stringify(Counter.interface.format(ethers.utils.FormatTypes.json)));
    console.log("Counter contract :", counter);
    return counter;
}

async function count(counter) {
    await counter.count();
    console.log("Current count:", await counter.getCounter());
}

deploy().then(count);