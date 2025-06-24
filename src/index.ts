import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

function getEth() {
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("Ethereum provider not found. Please install MetaMask or another Ethereum wallet.");
  }
  return eth;
}

async function hasAccounts() {
  const eth = getEth();
  try {
    const accounts = await eth.request({ method: 'eth_accounts' });
    console.log("Accounts:", accounts);
    return accounts.length > 0;
  } catch (error) {
    console.error("Error checking accounts:", error);
    throw error;
  }
}

async function connectWallet() {
  const eth = getEth();
  try {
    const accounts = await eth.request({ method: 'eth_requestAccounts' });
    console.log("Connected account:", accounts[0]);
    return accounts[0];
  } catch (error) {
    console.error("Error connecting wallet:", error);
    throw error;
  }
}

async function run() {
  try {
    const provider = new ethers.providers.Web3Provider(getEth());
    const network = await provider.getNetwork();
    console.log("Network:", network);

    if (await hasAccounts()) {
      console.log("Wallet already connected.");
    } else {
      console.log("Connecting wallet...");
      await connectWallet();
    }

    const signer = provider.getSigner();
    const address = await signer.getAddress();
    console.log("Connected address:", address);

    // Check network
    if (network.chainId !== 1) {
      console.warn("You are not connected to the Ethereum mainnet. Current network:", network.name);
      // Optionally, return here if you only want to allow mainnet
      // return;
    } else {
      console.log("Connected to the Ethereum mainnet.");
    }

    // !!! IMPORTANT: Replace this address with your actual deployed contract address !!!
    const contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

    const helloWorldContract = new ethers.Contract(
      contractAddress,
      ["function hello() public pure returns (string memory)"],
      signer
    );

    try {
      const message = await helloWorldContract.hello();
      console.log("hello() returned:", message);

      document.body.innerHTML = `
        <h1>Hello World Contract Interaction</h1>
        <div>Contract says: ${message}</div>
      `;
    } catch (err) {
      console.error("Call failed:", err);

      document.body.innerHTML = `
        <h1>Hello World Contract Interaction</h1>
        <div style="color: red;">Call failed: ${err.message}</div>
      `;
    }
  } catch (error) {
    console.error("Error in run function:", error);
  }
}

run();