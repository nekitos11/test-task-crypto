import * as React from 'react';
import './ExchangeInput.css';
import Block from '../../../../assets/block.svg';
import Arrow from '../../../../assets/arrow.svg';
import { Icon } from '../../../../components/Icon/Icon';
import { UseFormRegister } from 'react-hook-form';
import { IFormState } from '../../types';

interface ExchangeInputProps {
  symbol: string;
  name: 'price' | 'amount';
  value: number;
  onChange: (value: number) => void;
  register: UseFormRegister<IFormState>;
  icon?: string;
  placeholder?: string;
}

export const ExchangeInput = ({
  icon = Block,
  name,
  onChange = (value: number) => {},
  placeholder = '',
  value = 0,
  symbol = '',
  register,
}: ExchangeInputProps) => {
  const inputRef = React.useRef(null);
  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    <div onClick={handleClick} className="exchange-input">
      {icon ? <Icon icon={icon} className="exchange-input__icon" /> : null}

      <input
        className="exchange-input__input"
        ref={inputRef}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder={placeholder}
        value={value}
        {...register(name)}
      />
      <div className="exchange-input__sym">{symbol}</div>
      <div className="exchange-input__actions">
        <Icon
          icon={Arrow}
          className="exchange-input__actions-arrow"
          onClick={() => onChange(Number(value) + 1)}
        />
        <div className="exchange-input__actions-divider"></div>
        <Icon
          icon={Arrow}
          className="exchange-input__down-arrow exchange-input__actions-arrow"
          onClick={() => onChange(Number(value) - 1)}
        />
      </div>
    </div>
  );
};

