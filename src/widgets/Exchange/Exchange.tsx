import './Exchange.css';
import { ApiItems } from './apiCalls/fetchMostPopular/types';
import { ExchangeField } from './components/ExchangeField';
import { GradientBlock } from '../../components/GradientBlock';
import './Exchange.css';

interface SidebarProps {
  pair: any;
}

export const Exchange = ({ pair }: SidebarProps) => {
  const [from, to] = pair?.label?.split(' - ') || [];
  console.log(pair, 'earpojfioejiogjgt');
  return (
    <GradientBlock className="exchange">
      <ExchangeField title="price" symbol={from} />
      <ExchangeField title="amount" symbol={to} />
    </GradientBlock>
  );
};
