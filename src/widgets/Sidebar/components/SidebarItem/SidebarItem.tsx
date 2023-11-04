import './SidebarItem.css';
import { useContext } from 'react';
import { CurrentCoinContext } from '../../../../context/CurrentCoin/CurrentCoinContext';

const defaultTsym = 'USD';
export const defaultTSymId = '171986'

interface SidebarItemProps {
  el: any;
  onClick: () => void;
  isItemChecked: boolean;
}

export const SidebarItem = ({ el, onClick, isItemChecked }: SidebarItemProps) => {
  return (
    <div className={`sidebarItem${isItemChecked ? ' checked' : ''}`} onClick={onClick}>
      <div className="sidebarItem__main">
        <div className="pair">
          {el.CoinInfo.Name} - {defaultTsym}
        </div>
        <div className="price">${el.RAW.USD.PRICE.toFixed(2)}</div>
      </div>
      <div>chart</div>
    </div>
  );
};