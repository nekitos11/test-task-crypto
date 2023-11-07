import { useCurrentCoinContext } from '../../context/CurrentCoin/CurrentCoinContext';
import './Main.css';
import { useQuery } from 'react-query';
import { fetchMostPopular } from '../Sidebar/apiCalls/fetchMostPopular/fetchMostPopular';
import Select from 'react-select';
import { TimePicker } from './components/TimePicker';
import { useEffect, useState } from 'react';
import { timePickerItems } from './components/TimePicker/TimePicker';
import { Statistics } from './components/Statistics';
import { defaultTSymId } from '../Sidebar/components/SidebarItem/SidebarItem';
import { Chart } from '../Chart';
import { Exchange } from '../Exchange';
import { DefaultSelectItem } from '../../types';
import { ApiItem } from '../../context/CurrentCoin/types';

const createPairsList = (data: ApiItem[], coin?: ApiItem) => {
  const mappedData = data?.reduce((acc, el) => {
    if (el?.CoinInfo?.Id !== coin?.CoinInfo?.Id)
      acc.push(
        {
          first: el,
          second: coin,
        },
        {
          first: coin,
          second: el,
        }
      );
    return acc;
  }, []);
  return mappedData;
};

const createOptions = (pairs: { first: ApiItem; second: ApiItem }[]) =>
  pairs?.map(({ first, second }) => ({
    value: first?.CoinInfo?.Id + second?.CoinInfo?.Id,
    label: first?.CoinInfo?.Name + ' - ' + second?.CoinInfo?.Name,
  }));

export const Main = () => {
  const { coin } = useCurrentCoinContext();
  const [currentPair, setCurrentPair] = useState<DefaultSelectItem | undefined>();
  const [selectOptions, setSelectOptions] = useState<DefaultSelectItem[]>();
  const [from, to] = currentPair?.label?.split(' - ') ?? [];
  const [time, setTime] = useState<DefaultSelectItem | undefined>();

  const { data } = useQuery<ApiItem[]>('mostPopular', fetchMostPopular);

  useEffect(() => {
    const pairList = createPairsList(data, coin);
    const options = createOptions(pairList);
    if (options) {
      setSelectOptions(options);
      setCurrentPair(
        options.find(({ value }) => value === coin?.CoinInfo?.Id + defaultTSymId) || options[0]
      );
      setTime(timePickerItems[0]);
    }
  }, [data, coin]);

  if (!coin) {
    return (
      <div className="main">
        <div className="content-empty">Choose a coins pair to start</div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="content">
        <div className="main__header">
          <div className="main__select">
            <Select options={selectOptions} value={currentPair} onChange={setCurrentPair} />
          </div>
          <div className="main__time-picker">
            <TimePicker onChange={setTime} time={time} />
          </div>
        </div>
        {currentPair && <Statistics pair={currentPair} />}
        <Chart from={from} to={to} time={time} />
        <Exchange from={from} to={to} />
      </div>
    </div>
  );
};