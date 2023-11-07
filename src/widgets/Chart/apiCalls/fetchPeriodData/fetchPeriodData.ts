import { createConfig, createUrl } from '../../../../service';

const url = 'data/v2/histoday?tsym=USD&limit=19';

export const fetchPeriodData = async (from: string) => {
  const res = await fetch(createUrl(url, '&fsym=' + from), createConfig());
  const resJson = await res.json();
  return resJson.Data;
};
export const getFetchedPeriodData = (from: string) => () => fetchPeriodData(from)