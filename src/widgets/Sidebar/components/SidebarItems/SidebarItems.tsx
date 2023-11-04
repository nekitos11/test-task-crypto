import { SidebarItem } from '../SidebarItem';
import './SidebarItems.css';
import { useState } from 'react';
import { ApiItems } from '../../apiCalls/fetchMostPopular/types';
import { useCurrentCoinContext } from '../../../../context/CurrentCoin/CurrentCoinContext';

interface SidebarItemsProps {
  items: ApiItems[];
}

export const SidebarItems = ({ items }: SidebarItemsProps) => {
  const [checkedItem, setCheckedItem] = useState<number | undefined>();
  const { setCoin } = useCurrentCoinContext();

  return (
    <div className="sidebarItems">
      {items?.map((el, idx) => (
        <SidebarItem
          isItemChecked={checkedItem === idx}
          onClick={() => {
            setCoin(el);
            setCheckedItem(idx);
          }}
          el={el}
        />
      ))}
    </div>
  );
};