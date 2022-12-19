import React from 'react';

interface WalletDetailRowProps {
  title: string;
  value: string | number;
}

export default function WalletDetailRow({ title, value }: WalletDetailRowProps) {
  return (
    <div className='d-flex justify-content-between mb-2 wallet-info'>
      <h5>{title}</h5>
      <span>{value}</span>
    </div>
  );
}
