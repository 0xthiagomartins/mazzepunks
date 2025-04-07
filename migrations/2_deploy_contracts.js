var ConvertLib = artifacts.require("./ConvertLib.sol");
var MazzePunks = artifacts.require("./MazzePunks.sol");
var MazzePunksMarket = artifacts.require("./MazzePunksMarket.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MazzePunks);
  deployer.deploy(MazzePunks);
  deployer.deploy(MazzePunksMarket);
};
