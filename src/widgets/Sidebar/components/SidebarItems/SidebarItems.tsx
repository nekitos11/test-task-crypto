import { SidebarItem } from '../SidebarItem';
import './SidebarItems.css';
import { useCallback, useState } from 'react';
import { ApiItem } from '../../apiCalls/fetchMostPopular/types';
import { useCurrentCoinContext } from '../../../../context/CurrentCoin/CurrentCoinContext';

interface SidebarItemsProps {
  items: ApiItem[];
}

export const SidebarItems = ({ items }: SidebarItemsProps) => {
  const { setCoin, coin } = useCurrentCoinContext();

  const onItemClick = useCallback((el: ApiItem) => () => setCoin(el), [setCoin]);

  return (
    <div className="sidebarItems">
      {items?.map((el) => (
        <SidebarItem
          isPlusDay={parseFloat(String(el?.RAW?.USD?.CHANGEPCT24HOUR)) > 0}
          isItemChecked={coin?.CoinInfo?.Id === el?.CoinInfo?.Id}
          onClick={onItemClick(el)}
          el={el}
        />
      ))}
    </div>
  );
};