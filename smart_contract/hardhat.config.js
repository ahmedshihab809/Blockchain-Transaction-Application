//https://eth-sepolia.g.alchemy.com/v2/twu9eZ9n6SSomuihWwmnN_zHFV9sbULs

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/twu9eZ9n6SSomuihWwmnN_zHFV9sbULs',
      accounts: ['63acbcbb6cda78a3288aaf6b14c0ce5f4570533426c740e786281c76d93647ea']
    }
  }
}