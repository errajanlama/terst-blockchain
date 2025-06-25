pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter{
    uint32 counter = 0 ;

   /* function count() public  returns (uint) {
        counter++;
        console.log( "Counter is now", counter );
        return counter;
    } */

   // This write function increments the counter

    event CounterInc(address indexed addr, uint32 newCounter);
    
    function count() public {
        counter++;
        console.log( "Counter is now", counter );
    }


    // This read function returns the current value of the counter
    function getCounter() public view returns (uint32) {
        return counter;
    }
}
