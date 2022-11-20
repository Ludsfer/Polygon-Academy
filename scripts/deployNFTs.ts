import { ethers } from "hardhat";

async function main() {
    const contract = await ethers.getContractFactory("PolygonNFTs");
    const deployedContract = await  contract.deploy("PolyNFT", "PNT");
    deployedContract.deployed();

    console.log(`The NFT contract address is: ${deployedContract.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  

// TO DEPLOY THE SCRIPT ON THE NETWORK npx hardhat run --network <your-network> scripts/deploy.js