import { useEffect, useState } from 'react';
import { DATA_UNAVAILABLE, tokenMap } from '../config';
import useYam from './useYam';
import { hooks } from '../helpers';
import { ethers } from 'ethers';


const REFRESH_RATE = 30 * 1000;

const useTokenBalance = (_tokenName: string) => {
  const yam = useYam();
  const wallet = useWallet();
  const [balance, setBalance] = useState<string>(DATA_UNAVAILABLE);
  const [tokenName, setTokenName] = useState<string>(_tokenName)
  const decimals = tokenMap[_tokenName] ? tokenMap[_tokenName].decimal : 18;

  const update = async () => {
    if (!yam || !wallet?.account || tokenName == "") return;

    if (tokenName?.toUpperCase() === 'ETH') {
      const ret = ethers.BigNumber.from(await yam.web3.eth.getBalance(wallet.account, "latest")).div(10 ** decimals)
      setBalance(ret.toString());
      return;
    }
    if (!(yam.contracts.contractsMap[tokenName])) {
      return;
    }

    const ret = (await yam.contracts.contractsMap[tokenName].methods.balanceOf(wallet.account).call()) / 10 ** decimals;
    setBalance(ret.toString());
  }

  const updateToken = async (_newTokenName: string) => {
    setTokenName(_newTokenName);
  }

  useEffect(() => {
    let interval:any;

    if (yam) {
      update();
      interval = hooks.setWalletAwareInterval(wallet, update, REFRESH_RATE);
    }

    return () => clearInterval(interval);
  }, [yam, wallet, tokenName]);

  return {
    update,
    updateToken,
    balance
  };
};

export default useTokenBalance;
