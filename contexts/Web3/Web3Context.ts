import { createContext } from 'react';
import { Web3Client } from '../../web3';

interface IWeb3ContextOption {
  web3: Web3Client | undefined;
}

const Web3Context = createContext<IWeb3ContextOption>({
  web3: undefined
});

export default Web3Context;
