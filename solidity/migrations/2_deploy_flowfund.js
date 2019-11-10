const Flowfund = artifacts.require('./Flowfund.sol')


module.exports = (deployer) => {
    deployer.deploy(Flowfund);
}