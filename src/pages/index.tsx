import { useState } from 'react';
import Button from '@/components/common/buttons/Button';
import CryptoConverterForm from '@/components/forms/CryptoConverter';
import ConnectWallet from '@/components/modal/ConnectWallet';

const ReactForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='card'>
        <div className='container'>
          <CryptoConverterForm />
          <ConnectWallet show={show} handleClose={handleClose} />
          <Button icon='fa fa-link' variant='primary' type='button' onClick={handleShow}>
            &nbsp; Connect Wallet
          </Button>
        </div>
      </div>
    </>
  );
};

export default ReactForm;
