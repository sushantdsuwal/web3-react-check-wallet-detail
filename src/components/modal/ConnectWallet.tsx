import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useWeb3React } from '@web3-react/core';
import { injected } from '@/utils/wallet/connectors';
import useBalance from '@/hooks/use-balance';
import Button from '../common/buttons/Button';
import WalletDetailRow from './WalletInfoRow';

interface ConnectWalletProps {
  show: boolean;
  handleClose: () => void;
}

export default function ConnectWallet({ show, handleClose }: ConnectWalletProps) {
  const { active, account, library, activate, deactivate, chainId } = useWeb3React();

  const activeBalance = useBalance(library, account);

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem('isWalletConnected', 'connected');
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem('isWalletConnected', '');
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'connected') {
        try {
          await activate(injected);
          localStorage.setItem('isWalletConnected', 'connected');
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Wallet Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {account ? (
          <>
            <WalletDetailRow title='Key' value='Value' />
            <WalletDetailRow title='Account' value={account} />
            <WalletDetailRow title='Chain Id' value={chainId ?? ''} />
            <WalletDetailRow title='Balance' value={activeBalance} />
          </>
        ) : (
          <p className='error'>Wallet not connect. Please click the "Connect" button below</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!active ? (
          <>
            <Button variant='secondary' onClick={connect}>
              Connect
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Close
            </Button>
          </>
        ) : (
          <Button variant='primary' onClick={disconnect}>
            Disconnect
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
