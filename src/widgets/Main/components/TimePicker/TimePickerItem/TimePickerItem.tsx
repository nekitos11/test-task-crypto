import './TimePickerItem.css';
import { useContext } from 'react';
import { CurrentCoinContext } from '../../../../../context/CurrentCoin/CurrentCoinContext';
import { ITimePickerItem } from '../TimePicker';

interface TimePickerItemProps {
  label: string;
  onChange: () => void;
  isItemChecked: boolean;
}

export const TimePickerItem = ({ label, onChange, isItemChecked }: TimePickerItemProps) => {
  return (
    <div
      onClick={onChange}
      className={`timePickerItem${isItemChecked ? ' timePickerItem_checked' : ''}`}
    >
      {label}
    </div>
  );
};