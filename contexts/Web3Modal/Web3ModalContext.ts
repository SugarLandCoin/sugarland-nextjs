import { createContext } from 'react';
import Web3 from 'web3';

interface IWeb3ModalContext {
  web3: Web3 | null;
  connect: () => void;
  disconnect: () => void;
  account: string | null;
  chainId: number | null;
  networkId: number | null;
  connected: boolean;
}

const Web3ModalContext = createContext<IWeb3ModalContext>({
  web3: null,
  connect: () => {},
  disconnect: () => {},
  account: null,
  chainId: null,
  networkId: null,
  connected: false
});

export default Web3ModalContext;