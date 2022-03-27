import Web3 from 'web3';
import { Contracts } from './contracts';

export default class Yam {
  web3: Web3;
  contracts: Contracts;
  constructor(_web3: Web3, options: any) {
    this.web3 = _web3;
    this.contracts = new Contracts(this.web3);
  }
}
