import { createConfig, createUrl } from '../../../../service';

const url = 'data/v2';

export const fetchPeriodData = async (from: string,to: string, time?: string) => {

  const fetchUrl = new URL(createUrl(url) + time);
  fetchUrl.searchParams.set('fsym', from)
  fetchUrl.searchParams.set('tsym', to)
  fetchUrl.searchParams.set('limit', '30')

  const res = await fetch(fetchUrl.href, createConfig());
  const resJson = await res.json();
  return resJson.Data;
};
export const getFetchedPeriodData = (from: string,to: string, time?: string) => () => fetchPeriodData(from,to, time)