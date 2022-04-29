export const MORALIS_SERVER_URL = "https://ty7ttshwev7r.usemoralis.com:2053/server";
export const MORALIS_APP_ID = "wK36eTnEubsFHqXbwWZ0m31RYKGC6ibofNwwTOvn";
export const MORALIS_MASTER_KEY = "oivOABWSwJHNd4NJ9TJO8h3hYzDzQTb9ATF6XyUZ";

export const CMC_KEY = "980181ba-4dbd-4f5d-8136-512067bdba93";

export const DATA_UNAVAILABLE = '--';

export const defaultChainId = 56;

export const SUGAR_V2_ADDRESS = "0xcB2aDBCa6f15E9B3F1D98FcE57aC48a093F34fA9";
                                 
export const SUGAR_V2_GENESIS_BLOCK = 14254159;

export const SUGAR_ADDRESS = SUGAR_V2_ADDRESS;
export const SUGAR_GENESIS_BLOCK = SUGAR_V2_GENESIS_BLOCK;

export const SUGAR_NFT_ADDRESS = "0xB822271328e4D1236e209fC5C6Fe4E282313f9F6";

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
  'SUGAR': '0xcB2aDBCa6f15E9B3F1D98FcE57aC48a093F34fA9',
  'SugarNFT' : '0xB822271328e4D1236e209fC5C6Fe4E282313f9F6',
  'REWARD' : '0x6D3F9a7418FAD7A5483745e26c6616e9712d408A',
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
