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

export const SUGAR_NFT_ADDRESS = "0xd7bF5cFe1e63341c95cC4f9A27998191cF360F95";

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
  'SugarNewNFT' : '0xB822271328e4D1236e209fC5C6Fe4E282313f9F6',
  'SugarNFT' : '0xa0f7701643eEb1a03c02b038cF18eD54Cb2565f5',
  'REWARD' : '0xe098535d66729fa48E8998cFC9508E4Efa7b24C3',
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

// export const defaultChainId = 56;

// export const SUGAR_V2_ADDRESS = "0x59eB96F0B6f5838021f0E8f412Afe65D1Bf44A02";
                                 
// export const SUGAR_V2_GENESIS_BLOCK = 14254159;

// export const SUGAR_ADDRESS = SUGAR_V2_ADDRESS;
// export const SUGAR_GENESIS_BLOCK = SUGAR_V2_GENESIS_BLOCK;

// export const SUGAR_NFT_ADDRESS = "0x39930cf2Af45a2cD284664663b11CE0BB4AD1125";

// interface IRpcUrls {
//   [key: number]: string
// }

// interface INetworkNames {
//   [key: number]: string
// }

// export const rpcUrls: IRpcUrls = {
//   56: 'https://bsc-dataseed.binance.org/',
//   97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
// }

// export const networkNames: INetworkNames = {
//   56: 'BSC Mainnet',
//   97: 'BSC Testnet'
// }

// type AddressMapOptions = {
//   [key: string]: string
// }

// export const addressMap: AddressMapOptions = {

//   'SUGAR': '0x1379A0Ea8F000A04EB71baC3E3C1Af24C1eAaF23',
//   'SugarNewNFT' : '0xa62CBD6929E39AB5E3E7d0264e38CF039a6b4247',
//   'SugarNFT' : '0x39930cf2Af45a2cD284664663b11CE0BB4AD1125',
//   'REWARD' : '0x4783c0a4dA8b8136272146e288Ea290124FE6ad6',

//   'SUGAR': '0x1379A0Ea8F000A04EB71baC3E3C1Af24C1eAaF23',
//   'SugarNewNFT' : '0xa62CBD6929E39AB5E3E7d0264e38CF039a6b4247',
//   'SugarNFT' : '0xa098bF3A06166e84BF2E713817a36A21e34ff221',
//   'REWARD' : '0xb2036640B30b4eBE211C1f69776464Ec3e06ea40',
  
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
