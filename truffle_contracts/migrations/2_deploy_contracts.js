var Beacon = artifacts.require("Beacon");

module.exports = function(deployer) {
  deployer.deploy(Beacon);
};