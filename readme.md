![MazzePunks](/punk-variety.png)

## MazzePunks: Collectible Characters on the Mazze BlockDAG

MazzePunks are 10,000 unique collectible characters with proof of ownership stored on the Mazze BlockDAG. No two are exactly alike, and each one of them can be officially owned by a single person as managed and verified by a contract running on the Mazze BlockDAG.

This repo contains the Mazze BlockDAG contract used to manage the Punks, a verifiable image of all the punks, and a unit test to verify the contract's functionality.

### Some Questions

* **How much do the punks cost?** When we first release the project, you can claim a punk by simply paying the transaction fee. The market rate will be determined by supply and demand.
* **How much is a punk worth?** Like many things, they're worth whatever someone will pay. The value will be determined by the community and market dynamics.
* **How were the punk images created?** With a generator that was programmed to generate punks with a range of features and rarity.

### How to Use the MazzePunks Contract

The main MazzePunks contract can be found at address **[TODO:CONTRACT_ADDRESS]**. Watch this contract in your Mazze wallet using that address and [this ABI file](/compiled/MazzePunksMarket.abi).

Once you are watching the contract you can execute the following functions to transact punks:

* ```getPunk(uint index)``` to claim ownership of a punk
* ```transferPunk(address to, uint index)``` transfer ownership of a punk to someone without requiring any payment.
* ```offerPunkForSale(uint punkIndex, uint minSalePriceInWei)``` offer one of your punks for sale to anyone willing to pay the minimum price specified (in Wei).
* ```offerPunkForSaleToAddress(uint punkIndex, uint minSalePriceInWei, address toAddress)``` offer one of your punks for some minumum price, but only to the address specified. Use this to sell a punk to a specific person.
* ```enterBidForPunk(uint punkIndex)``` enters a bid for the punkIndex specified. Send in the amount of your bid in the value field and we will hold that ether in escrow.
* ```acceptBidForPunk(uint punkIndex, uint minPrice)``` to accept a pending bid for the specified punk. You can specify a minPrice in Wei to protect yourself from someone switching the bid for a lower bid.
* ```withdrawBidForPunk(uint punkIndex)``` will withdraw a bid for the specified punk and send you the ether from the bid.
* ```buyPunk(uint punkIndex)``` buy punk at the specified index. That punk needs to be previously offered for sale, and you need to have sent at least the amount of Ether specified as the sale price for the punk.
* ```withdraw()``` claim all the Ether people have previously sent to buy your punks.

### Verifying the Punks are 100% Authentic and Legit MazzePunks™

![All the MazzePunks](/punks.png)

This is the official and genuine image of all of the MazzePunks that have been created. To allow verification that the punks being managed by the MazzePunks contract are the same as what you see in the image, we have embedded a SHA256 hash of the image file into the contract. You can generate this hash for the punks image file via a command line similar to ```openssl sha -sha256 punks.png``` and compare that to the embedded hash in the contract ```[TODO:NEW_HASH]```.
