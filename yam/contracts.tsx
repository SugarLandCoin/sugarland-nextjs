import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import { addressMap, SUGAR_NFT_ADDRESS } from '../config';
import SUGAR from '../contracts/Sugar.json';
import SugarNFT from '../contracts/SugarNFT.json';
import ERC20JSON from '../contracts/IERC20.json';
import FUSD from '../contracts/FUSD.json';

interface contractsMapOptions {
  [key: string]: Contract
}

export class Contracts {
  web3: Web3;
  contractsMap: contractsMapOptions;
  
  constructor(web3: Web3) {
    this.web3 = web3;
    this.contractsMap = {};

    this.contractsMap = {
      'SUGAR': new web3.eth.Contract(SUGAR as AbiItem[]),
      'SugarNFT': new web3.eth.Contract(SugarNFT as AbiItem[]),
    }
    // this.contractsMap = {
    //   'BUSD': new web3.eth.Contract(ERC20JSON.abi as AbiItem[]),
    //   'DAI': new web3.eth.Contract(ERC20JSON.abi as AbiItem[]),
    //   'USDT': new web3.eth.Contract(ERC20JSON.abi as AbiItem[]),
    //   'USDC': new web3.eth.Contract(ERC20JSON.abi as AbiItem[]),
    //   'FUSD': new web3.eth.Contract(FUSD.abi as AbiItem[]),
    // }

    this._updateContractAddresses();
  }

  _updateContractAddresses() {
    this.contractsMap['SUGAR'].options.address = addressMap['SUGAR'];
    this.contractsMap['SugarNFT'].options.address = addressMap['SugarNFT'];
    // this.contractsMap['FUSD'].options.address = addressMap['FUSD'];
    // stableCoins.forEach((coin) => {
    //   this.contractsMap[coin.name].options.address = addressMap[coin.name];
    // });
  }
}
  