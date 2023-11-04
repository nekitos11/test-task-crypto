import * as React from 'react';
import './ExchangeInput.css';
import Block from 'assets/block.svg';
import Arrow from 'assets/arrow.svg';
import { Icon } from '../../../../components/Icon/Icon';

export const ExchangeInput = ({
  containerStyle = {},
  icon = Block,
  inputStyle = {},
  name = '',
  onChange = (value: number) => {},
  placeholder = '',
  value = 0,
  symbol = '',
  wrapperStyle = {},
}) => {
  const inputRef = React.useRef(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    // <div className={className} style={wrapperStyle}>
    <div onClick={handleClick} className="exchange-input" style={containerStyle}>
      {icon ? <Icon icon={icon} className="exchange-input__icon" /> : null}

      <input
        className="exchange-input__input"
        ref={inputRef}
        name={name}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder={placeholder}
        value={value}
        style={inputStyle}
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
    // </div>
  );
};

