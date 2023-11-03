import { SidebarItem } from '../SidebarItem';
import './SidebarItems.css';
import { useState } from 'react';
import {ApiItems} from "../../apiCalls/fetchMostPopular/types";

interface SidebarItemsProps {
  items: ApiItems[]
}
export const SidebarItems = ({ items }: SidebarItemsProps) => {
  const [checkedItem, setCheckedItem] = useState<number | undefined>();

  return (
    <div className="sidebarItems">
      {items?.map((el, idx) => (
        <SidebarItem
          isItemChecked={checkedItem === idx}
          onClick={() => setCheckedItem(idx)}
          el={el}
        />
      ))}
    </div>
  );
};