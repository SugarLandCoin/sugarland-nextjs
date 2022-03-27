import Web3 from 'web3';
import { Contracts } from '../yam/contracts';

export default class Web3Client {
  web3: Web3;
  contracts: Contracts;    
  constructor(apiUrl: string | null, options: any) {
    this.web3 = new Web3(apiUrl);
    this.contracts = new Contracts(this.web3);
  }
}
