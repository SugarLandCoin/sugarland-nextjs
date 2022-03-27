// import BigNumber from 'bignumber.js';
import { BigNumber } from 'ethers';
import { useEffect, useMemo, useState } from 'react';
import { useWallet } from 'use-wallet';
import { DATA_UNAVAILABLE, addressMap } from '../config';
import { hooks } from '../helpers';
import useYam from './useYam';

const REFRESH_RATE = 10 * 1000;

const useUserApprovalOfContract = (_contract: string, _token: string) => {
  const yam = useYam();
  const wallet = useWallet();
  const [contract, setContract] = useState(_contract);
  const [token, setToken] = useState(_token);
  const [amount, setAmount] = useState(DATA_UNAVAILABLE);

  const update = async () => {
    if (!yam || !wallet?.account) return;
    if (!contract || !token) return;

    const ret = BigNumber.from(
      await yam.contracts.contractsMap[token].methods.allowance(wallet.account, addressMap[contract]).call()
    );
    setAmount(ret.toString());
  };

  const updateApprovalInfo = (_newContract: string, _newToken: string) => {
    setAmount(DATA_UNAVAILABLE);
    setToken(_newToken);
    setContract(_newContract);
  }

  useEffect(() => {
    let interval:any;
    if (yam) {
      update();
      interval = hooks.setWalletAwareInterval(wallet, update, REFRESH_RATE);
    }
    return () => clearInterval(interval);
  }, [yam, wallet, _contract, _token]);

  return useMemo(
    () => ({
      amount,
      update,
      updateApprovalInfo
    }),
    [amount]
  );
};

export default useUserApprovalOfContract;
