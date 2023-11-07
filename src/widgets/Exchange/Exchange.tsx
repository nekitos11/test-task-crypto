import './Exchange.css';
import { GradientBlock } from '../../components/GradientBlock';
import './Exchange.css';
import { useQuery } from 'react-query';
import { getFetchCurrentPair } from '../Main/apiCalls/fetchCurrentPair/fetchCurrentPair';
import { ApiResponse } from '../Main/apiCalls/fetchCurrentPair/types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ExchangeForm } from './components/ExchangeForm';
import { IFormState } from './types';

interface ExchangeProps {
  from: string;
  to: string;
}

export const Exchange = ({ from, to }: ExchangeProps) => {
  const { setValue, control, register } = useForm<IFormState>();

  const { data: currentPairData } = useQuery<ApiResponse>(
      [from, to],
    getFetchCurrentPair(from, to),
  );

  useEffect(() => {
    if (currentPairData) {
      setValue('amount', 1);
      setValue('price', +currentPairData?.RAW?.[from]?.[to]?.PRICE?.toFixed(2));
    }
  }, [currentPairData]);

  return (
    <GradientBlock className="exchange">
      <form>
        <ExchangeForm from={from} to={to} control={control} register={register} />
      </form>
    </GradientBlock>
  );
};
