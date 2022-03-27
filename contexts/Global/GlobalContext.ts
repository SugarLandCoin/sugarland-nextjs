import { createContext } from 'react';

interface IGlobalContextOption {
  sugarPrice: number | null;
}

const GlobalContext = createContext<IGlobalContextOption>({
  sugarPrice: null
});

export default GlobalContext;
