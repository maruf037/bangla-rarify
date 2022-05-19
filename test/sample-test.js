const { ethers } = require("hardhat");

describe("NFTMarket", function() {
  it("Should create and execute market sales", async function() {
    // Deploy the marketplace
    const BanglaRarify = await ethers.getContractFactory("BanglaRarify");
    const banglaRarify = await BanglaRarify.deploy();
    await banglaRarify.deployed();

    let listingPrice = await banglaRarify.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits('1', 'ether');

    // Creating two tokens
    await banglaRarify.createToken("https://www.banglatoken.com", auctionPrice, {value: listingPrice});
    await banglaRarify.createToken("https://www.banglatoken2.com", auctionPrice, {value: listingPrice});

    const [_, buyerAddress] = await ethers.getSigners();

    // Executing sale of token to another user
    await banglaRarify.connect(buyerAddress).createMarketSale(1, { value: auctionPrice });

    // Reselling a token
    await banglaRarify.connect(buyerAddress).resellToken(1, auctionPrice, { value: listingPrice });

    // query for and returning the unsold items
    items = await banglaRarify.fetchMarketItems();
    items = await Promise.all(items.map(async i => {
      const tokenUri = await banglaRarify.tokenURI(i.tokenId);
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)

  })
})
