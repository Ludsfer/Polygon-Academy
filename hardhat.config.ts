import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


// to use this method, I need to install 'dotenv' with the command "npm i dotenv"
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    polygon_mumbai: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },

  },
};

export default config;
