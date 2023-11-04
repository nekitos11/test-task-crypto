import './ExchangeField.css';
import { ExchangeInput } from '../ExchangeInput';

interface SidebarItemsProps {
  title: string;
  symbol: string;
  value: number;
  onChange: (value: number) => void;
}

export const ExchangeField = ({ title, symbol, value, onChange }: SidebarItemsProps) => {
  return (
    <div className="exchange-field">
      <div className="exchange-field__title">{title}</div>
      <ExchangeInput symbol={symbol} value={value} onChange={onChange} />
    </div>
  );
};