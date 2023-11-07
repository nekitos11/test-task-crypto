import './ExchangeField.css';
import { ExchangeInput } from '../ExchangeInput';
import { Control, Controller, UseFormRegister } from 'react-hook-form';
import { IFormState } from '../../types';

interface ExchangeFieldProps {
  title: string;
  symbol: string;
  name: 'price' | 'amount';
  value: number;
  onChange: (value: number) => void;
  register: UseFormRegister<IFormState>;
  control: Control<IFormState>;
}

export const ExchangeField = ({ title, name, control, ...inputProps }: ExchangeFieldProps) => {
  return (
    <div className="exchange-field">
      <div className="exchange-field__title">{title}</div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <ExchangeInput {...inputProps} {...field} />}
      />
    </div>
  );
};