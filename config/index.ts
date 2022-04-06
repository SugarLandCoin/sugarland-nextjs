export const MORALIS_SERVER_URL = "https://pwmj2jvvdm2t.usemoralis.com:2053/server";
export const MORALIS_APP_ID = "xsCT6671BG8YB21jWcnR3PGl9WyiKw5YB3h19UWt";
export const MORALIS_MASTER_KEY = "Wj9yWJqQ626vZ6MXTNcps27UIa8iBfjlPLjJg5o0";

export const CMC_KEY = "980181ba-4dbd-4f5d-8136-512067bdba93";

export const DATA_UNAVAILABLE = '--';

export const defaultChainId = 97;

// export const SUGAR_V2_ADDRESS = "0xcB2aDBCa6f15E9B3F1D98FcE57aC48a093F34fA9";
export const SUGAR_V2_ADDRESS = "0x55C750D1dCa531F9a4fD429925BA12C44C34C529";
export const SUGAR_V2_GENESIS_BLOCK = 14254159;

export const SUGAR_ADDRESS = SUGAR_V2_ADDRESS;
export const SUGAR_GENESIS_BLOCK = SUGAR_V2_GENESIS_BLOCK;

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
