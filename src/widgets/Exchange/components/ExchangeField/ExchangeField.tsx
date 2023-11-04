import { SidebarItem } from '../SidebarItem';
import './ExchangeField.css';
import { useState } from 'react';
import { ApiItems } from '../../apiCalls/fetchMostPopular/types';
import { useCurrentCoinContext } from '../../../../context/CurrentCoin/CurrentCoinContext';
import { ExchangeInput } from '../ExchangeInput';
interface SidebarItemsProps {
  title: string;
  symbol: string;
  value: string;
}

export const ExchangeField = ({ title, symbol }: SidebarItemsProps) => {
  return (
    <div className="exchange-field">
      <div className="exchange-field__title">{title}</div>
      <ExchangeInput symbol={symbol} />
    </div>
  );
};