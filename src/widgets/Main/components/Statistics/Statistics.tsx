import './Statistics.css';
import { ITimePickerItem } from '../TimePicker/TimePicker';
import { useQuery } from 'react-query';
import { ApiItems } from '../../apiCalls/fetchCurrentCoin/types';
import { getFetchCurrentPair } from '../../apiCalls/fetchCurrentPair/fetchCurrentPair';
import { StatisticsItem } from './StatisticsItem';
import { GradientBlock } from '../../../../components/GradientBlock';

interface StatisticsProps {
  pair: ITimePickerItem;
}

const statisticsItems = [
  {
    title: 'last trade price',
    key: 'LASTVOLUME',
  },
  {
    title: '24 hour price',
    key: 'CHANGEPCT24HOUR',
  },
  {
    title: '24 hour volume',
    key: 'VOLUME24HOUR',
  },
];
export const Statistics = ({ pair }: StatisticsProps) => {
  const [from, to] = pair?.label?.split(' - ') || [];
  const {
    data: currentPairData,
    isLoading,
  } = useQuery<ApiItems[]>(['currentPair', pair.label], getFetchCurrentPair(from, to));

  return (
    <div className="statistics-wrapper">
      <GradientBlock>
        <div className="statistics">
          {
            <ul className="statistics__list">
              {statisticsItems.map(({ title, key }) => {
                const value = currentPairData?.DISPLAY?.[from]?.[to]?.[key];
                return (
                  <li className="statistics__list-item">
                    <StatisticsItem
                      isLoading={isLoading}
                      title={title}
                      label={value}
                      isPlusDay={key === 'CHANGEPCT24HOUR' ? parseFloat(value) > 0 : undefined}
                    />
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </GradientBlock>
    </div>
  );
};