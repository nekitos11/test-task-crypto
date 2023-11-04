import './Exchange.css';
import { ApiItems } from './apiCalls/fetchMostPopular/types';
import { ExchangeField } from './components/ExchangeField';
import { GradientBlock } from '../../components/GradientBlock';
import './Exchange.css';
import { useQuery } from 'react-query';
import { getFetchCurrentPair } from '../Main/apiCalls/fetchCurrentPair/fetchCurrentPair';
import { useEffect, useState } from 'react';

interface SidebarProps {
  pair: any;
}

export const Exchange = ({ pair }: SidebarProps) => {
  const [from, to] = pair?.label?.split(' - ') || [];
  const [dealPrice, setDealPrice] = useState<number | undefined>();
  const [dealAmount, setDealAmount] = useState<number | undefined>(1);

  const { data: currentPairData, refetch } = useQuery<ApiItems[]>(
    'currentPair',
    getFetchCurrentPair(from, to)
  );
  useEffect(() => {
    refetch();
  }, [pair]);

  useEffect(() => {
    if (currentPairData) {
      setDealAmount(1);
      setDealPrice(currentPairData?.RAW?.[from]?.[to]?.PRICE?.toFixed(2));
    }
  }, [currentPairData]);

  return (
    <GradientBlock className="exchange">
      <ExchangeField
        title="price"
        symbol={from}
        value={dealPrice}
        onChange={(value) => value > 0 && setDealPrice(value)}
      />
      <ExchangeField
        title="amount"
        symbol={to}
        value={dealAmount}
        onChange={(value) => value > 0 && setDealAmount(value)}
      />
      <div className="exchange__total">
        <div className="exchange__total-title">total</div>
        <div className="exchange__total-sum">{dealAmount * dealPrice}</div>
      </div>
    </GradientBlock>
  );
};
