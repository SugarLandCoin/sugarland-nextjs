import { useEffect, useState, useContext } from 'react';
import { Yam } from '../../yam';
import YamContext from './YamContext';
import Web3ModalContext from '../Web3Modal/Web3ModalContext'

import { ProviderProps } from '../../types';

declare global {
  interface Window { yam: any; }
}

const YamProvider = (props: ProviderProps) => {
  const { web3, chainId, account } = useContext(Web3ModalContext);
  const [yam, setYam] = useState<Yam>();

  useEffect(() => {
    console.log(web3, chainId, account);
    if (web3 && chainId && account) {
      try {
        const _yam = new Yam(web3, {});
        setYam(_yam);
      }
      catch(e) {
        console.log("Failed to create a Web3 Wrapper: ", e);
      }
    }
    else {
      setYam(undefined);
    }
  }, [web3, chainId, account]);

  return <YamContext.Provider value={{ yam }}>{ props.children }</YamContext.Provider>;
};

export default YamProvider;
