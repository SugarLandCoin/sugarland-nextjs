import { createContext } from 'react';

interface IGlobalContextOption {
  sugarPrice: number | null;
  tokenHolders: number;
  totalSupply: number;
  marketCap: number;
}

const GlobalContext = createContext<IGlobalContextOption>({
  sugarPrice: null,
  tokenHolders: 0,
  totalSupply: 0,
  marketCap: 0,
});

export default GlobalContext;
