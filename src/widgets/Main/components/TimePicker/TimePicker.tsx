import './TimePicker.css';
import { useContext } from 'react';
import { CurrentCoinContext } from '../../../../context/CurrentCoin/CurrentCoinContext';
import { TimePickerItem } from './TimePickerItem';
import './TimePicker.css';

export type ITimePickerItem = {
  label: string;
  value: string;
};
const timePickerItems = [
  {
    label: '1d',
    value: 'histoday?aggregate=1',
  },
  {
    label: '6h',
    value: 'histohour?aggregate=6',
  },
  {
    label: '1h',
    value: 'histohour?aggregate=1',
  },
  {
    label: '30m',
    value: 'histominute?aggregate=30',
  },
  {
    label: '5m',
    value: 'histominute?aggregate=5',
  },
];

interface TimePickerProps {
  onChange: (item: ITimePickerItem) => void;
  time?: ITimePickerItem;
}

export const TimePicker = ({ onChange, time }: TimePickerProps) => {
  return (
    <div className="time-picker">
      {timePickerItems?.map((item) => (
        <TimePickerItem
          isItemChecked={item.value === time?.value}
          onChange={() => onChange(item)}
          label={item.label}
        />
      ))}
    </div>
  );
};