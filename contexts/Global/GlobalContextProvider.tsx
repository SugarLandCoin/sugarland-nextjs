import { useEffect, useState } from 'react';
import { ProviderProps } from '../../types';
import GlobalContext from './GlobalContext';
import { useCoingecko } from '../../hooks';

const GlobalContextProvider = ( props: ProviderProps) => {
  const { fetchCoinData } = useCoingecko();
  const [sugarPrice, setSugarPrice] = useState<number | null>(null);

  useEffect(() => {
    async function getCoinData() {
      const sugarland = await fetchCoinData('sugarland-token');
      setSugarPrice(sugarland.current_price.usd.toFixed(10));
      return sugarland;
    }
    getCoinData();
  }, []);

  return <GlobalContext.Provider value={{ sugarPrice }}>{ props.children }</GlobalContext.Provider>;
};

export default GlobalContextProvider;
