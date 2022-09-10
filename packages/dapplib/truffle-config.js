require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remain purpose grace glide olympic suffer'; 
let testAccounts = [
"0x89f1573d9c1a79fb154e8fa2e5966e832539ad134e4c4913b8d9881d1948dc0b",
"0x5e979a72db22ec7402c9e1fd5fda4b0403718d775afbbce930fb8f7885dc9eba",
"0xb0601d4bbb4627a938cc0b3fcdde84d0b0b170688b95b75626999588e33c5661",
"0xbf69c9ad3a21284832a21be2b67b420360934f4e7304afa70475cccd48f4571c",
"0x63c225b954be9bffae72a66629434deb2b1503c11ca1c322668c8ae84d769e79",
"0x1f490fc47008c87df8f3a5b8b2ee2b19faff70ad002586e043021697893698b8",
"0xe883c0665191791abd7962552bbcbaf96acca452d07cd47e482c1ad14c5225a3",
"0xee07f071b0acc3f4745d90949307bae589156d47b7f121d04e6105e41cb1a297",
"0x5954fa886f2b8bb8327e550eb2a22a9d701e7bf11d4d2997f46df878d062603d",
"0x3ea6fb22a52b0e9f1c24715acc3de1caa110bd5ce3d564a2e44df87d8a3d2539"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

