import { useEffect, useState } from 'react';

function useBalance(web3: any, account:string | null |  undefined) {
  const [balance, setBalance] = useState('?');
  useEffect(() => {
    if (web3 && account) {
      (async () => {
        try {
          const correctedAccount = web3.utils.toChecksumAddress(account);
          const balanceInWei = await web3.eth.getBalance(correctedAccount);
          setBalance(Number(web3.utils.fromWei(balanceInWei, 'ether')).toFixed(2));
        } catch (error:any) {
          setBalance('?');
        }
      })();
    }
  }, [web3, account]);
  return balance;
}

export default useBalance;
