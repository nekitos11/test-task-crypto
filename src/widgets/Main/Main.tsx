import { useCurrentCoinContext } from '../../context/CurrentCoin/CurrentCoinContext';
import './Main.css';
import { useQuery } from 'react-query';
import { ApiItems } from '../Sidebar/apiCalls/fetchMostPopular/types';
import { fetchMostPopular } from '../Sidebar/apiCalls/fetchMostPopular/fetchMostPopular';
import Select from 'react-select';
import { TimePicker } from './components/TimePicker';
import { useEffect, useState } from 'react';
import { ITimePickerItem } from './components/TimePicker/TimePicker';
import { Statistics } from './components/Statistics';
import { defaultTSymId } from '../Sidebar/components/SidebarItem/SidebarItem';
import { Chart } from '../Chart';
import { Exchange } from '../Exchange';

const createPairsList = (data, coin) => {
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

const createOptions = (pairs) =>
  pairs?.map(({ first, second }) => ({
    value: first?.CoinInfo?.Id + second?.CoinInfo?.Id,
    label: first?.CoinInfo?.Name + ' - ' + second?.CoinInfo?.Name,
  }));
export const Main = () => {
  const { coin } = useCurrentCoinContext();
  const [currentPair, setCurrentPair] = useState();
  const [selectOptions, setSelectOptions] = useState();

  const { data } = useQuery<ApiItems[]>('mostPopular', fetchMostPopular);

  useEffect(() => {
    const pairList = createPairsList(data, coin);
    const options = createOptions(pairList);
    if (options) {
      setSelectOptions(options);
      setCurrentPair(
        options.find(({ value }) => value === coin?.CoinInfo?.Id + defaultTSymId) || options[0]
      );
    }
  }, [data, coin]);

  const [time, setTime] = useState<ITimePickerItem | undefined>();

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
        <Chart pair={currentPair}/>
        <Exchange pair={currentPair} />
      </div>
    </div>
  );
};