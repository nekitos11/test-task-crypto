import './Sidebar.css';
import { SidebarItems } from './components/SidebarItems';
import { ApiItem } from './apiCalls/fetchMostPopular/types';
import { useEffect } from 'react';
import { useCurrentCoinContext } from '../../context/CurrentCoin/CurrentCoinContext';
import { useQuery } from 'react-query';
import { fetchMostPopular } from './apiCalls/fetchMostPopular/fetchMostPopular';

export const Sidebar = () => {
  const { setCoin } = useCurrentCoinContext();
  const { data } = useQuery<ApiItem[]>('mostPopular', fetchMostPopular);

  useEffect(() => {
    if (data?.length) {
      setCoin(data?.[0]);
    }
  }, [data]);

  return (
    <div className="sidebar">
      <div className="title">Popular pairs</div>
      <SidebarItems items={data} />
      <div className="divider"></div>
    </div>
  );
};
