import * as React from 'react';
import './ExchangeForm.css';
import { ExchangeField } from '../ExchangeField';
import { Control, useForm, UseFormRegister, useWatch } from 'react-hook-form';
import { IFormState } from '../../types';

interface ExchangeFormProps {
  control: Control<IFormState>;
  from: string;
  to: string;
  register: UseFormRegister<IFormState>;
}

export const ExchangeForm = ({ from = '', to = '', register, control }: ExchangeFormProps) => {
  const { setValue } = useForm<IFormState>();

  const dealPrice = useWatch({ name: 'price', control });
  const dealAmount = useWatch({ name: 'amount', control });

  return (
    <>
      <ExchangeField
        title="price"
        name="price"
        symbol={from}
        value={dealPrice}
        register={register}
        control={control}
        onChange={(value) => value > 0 && setValue('price', value)}
      />
      <ExchangeField
        title="amount"
        name="amount"
        symbol={to}
        value={dealAmount}
        control={control}
        register={register}
        onChange={(value) => value > 0 && setValue('amount', value)}
      />
      <div className="exchange__total">
        <div className="exchange__total-title">total</div>
        <div className="exchange__total-sum">{dealAmount * dealPrice}</div>
        <button type="submit">click</button>
      </div>
    </>
  );
};

