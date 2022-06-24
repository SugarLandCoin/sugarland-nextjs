export const MORALIS_SERVER_URL = "https://ty7ttshwev7r.usemoralis.com:2053/server";
export const MORALIS_APP_ID = "wK36eTnEubsFHqXbwWZ0m31RYKGC6ibofNwwTOvn";
export const MORALIS_MASTER_KEY = "oivOABWSwJHNd4NJ9TJO8h3hYzDzQTb9ATF6XyUZ";

export const CMC_KEY = "980181ba-4dbd-4f5d-8136-512067bdba93";

export const DATA_UNAVAILABLE = '--';

export const defaultChainId = 56;

export const SUGAR_V2_ADDRESS = "0x59eB96F0B6f5838021f0E8f412Afe65D1Bf44A02";
                                 
export const SUGAR_V2_GENESIS_BLOCK = 14254159;

export const SUGAR_ADDRESS = SUGAR_V2_ADDRESS;
export const SUGAR_GENESIS_BLOCK = SUGAR_V2_GENESIS_BLOCK;

export const CITIZEN_NFT  = "0x4E3fd88B4Cb3d524148DE906235dF7b45267Ec8F";

interface IRpcUrls {
  [key: number]: string
}

interface INetworkNames {
  [key: number]: string
}

export const rpcUrls: IRpcUrls = {
  56: 'https://bsc-dataseed.binance.org/',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
}

export const networkNames: INetworkNames = {
  56: 'BSC Mainnet',
  97: 'BSC Testnet'
}

type AddressMapOptions = {
  [key: string]: string
}

export const addressMap: AddressMapOptions = {

  'SUGAR': '0x59eB96F0B6f5838021f0E8f412Afe65D1Bf44A02',
  'SugarOldNFT' : '0xB822271328e4D1236e209fC5C6Fe4E282313f9F6',
  'CitizenNFT' : '0x4E3fd88B4Cb3d524148DE906235dF7b45267Ec8F',
  'REWARD' : '0xE3486e37c9E3B4AD96fa06003376E21Af1F17490',
};

interface TokenInfo {
  name: string;
  decimal: number;
}
interface TokenMapOptions {
  [key: string]: TokenInfo
}

export const drawerWidth = 360;
export const drawerWidthCollapsed = 60;







// export const MORALIS_SERVER_URL = "https://ty7ttshwev7r.usemoralis.com:2053/server";
// export const MORALIS_APP_ID = "wK36eTnEubsFHqXbwWZ0m31RYKGC6ibofNwwTOvn";
// export const MORALIS_MASTER_KEY = "oivOABWSwJHNd4NJ9TJO8h3hYzDzQTb9ATF6XyUZ";

// export const CMC_KEY = "980181ba-4dbd-4f5d-8136-512067bdba93";

// export const DATA_UNAVAILABLE = '--';

// export const defaultChainId = 3;

// export const SUGAR_V2_ADDRESS = "0x46aa2585f1eBE4Be93fcBA0301466465537F5D85";
                                 
// export const SUGAR_V2_GENESIS_BLOCK = 14254159;

// export const SUGAR_ADDRESS = SUGAR_V2_ADDRESS;
// export const SUGAR_GENESIS_BLOCK = SUGAR_V2_GENESIS_BLOCK;

// export const CITIZEN_NFT = "0x7A50811d49d3FCd34AE581c6c1DE4f582Ea2ba22";

// interface IRpcUrls {
//   [key: number]: string
// }

// interface INetworkNames {
//   [key: number]: string
// }

// export const rpcUrls: IRpcUrls = {
//   56: 'https://bsc-dataseed.binance.org/',
//   97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
//   3 : 'https://ropsten.infura.io/v3/be0a123d3e494bc28708d61034424f92',
// }

// export const networkNames: INetworkNames = {
//   56: 'BSC Mainnet',
//   97: 'BSC Testnet',
//   3: 'ROPSTEN',
// }

// type AddressMapOptions = {
//   [key: string]: string
// }

// export const addressMap: AddressMapOptions = {

//   'SUGAR': '0x46aa2585f1eBE4Be93fcBA0301466465537F5D85',
//   'SugarOldNFT' : '0x7aCf36C1b16e2367Aad643299c21fCDF3beBB54C',
//   'CitizenNFT' : '0x7A50811d49d3FCd34AE581c6c1DE4f582Ea2ba22',
//   'REWARD' : '0x5d9a86f1E40620990462330e206d2f5aFAE58DDb',

// };

// interface TokenInfo {
//   name: string;
//   decimal: number;
// }
// interface TokenMapOptions {
//   [key: string]: TokenInfo
// }

// export const drawerWidth = 360;
// export const drawerWidthCollapsed = 60;