require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy return night erosion just problem army gaze'; 
let testAccounts = [
"0xa0be7d9e866c2af7d4bbb9224ccaa043333c5eba9992963f4f437fd9086f415e",
"0x84c804f08c6f849f037612aea1bba37e4c20047ba48cb60982b4ffddc12be08c",
"0x3d49e3da34e92fd2ba1bcc02e859ca4785065213aae82213d98d36ab5fcf89f8",
"0xc14bdadff42fd2a7ac3af3a839379d18bbf882be9690418f657773149d7a7a9d",
"0xd54e2c1abb7c5ade92a913975ea66497ae614253debdc11605ec13c8fc8b6acd",
"0xed25d1047d3d125c835a1a22c4ae395547a804c188a43ebc89867e4c1c1cb1a4",
"0x641b61c1e63d11c8291345eefc19ebb27d0c7f7e4892779e0e2aed8269b06ce0",
"0xc52ef7fd3971ae3df2be2ececdc247355aa780cc5465ca12278b87ad6d6394f6",
"0xfcd1ae1baad2546ebf60a2c229e4af152c17f94acd46b57a34efc27db639a62e",
"0x782c4654fd69cbbd65ca4992b60dff253773cd721402ffdf13ef27daa496b29e"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
