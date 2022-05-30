const hre = require('hardhat');
const fs = require('fs');

async function main() {
    const BanglaRarify = await hre.ethers.getContractFactory("BanglaRarify");
    const banglaRarify = await BanglaRarify.deploy();
    await banglaRarify.deployed();
    console.log("BanglaRarify deployed to: ", banglaRarify.address, "with pleasure!");

    fs.writeFileSync('./config.js', `export const marketplaceAddress = "${banglaRarify.address}"`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
         console.error(error);
        process.exit(1);
    })