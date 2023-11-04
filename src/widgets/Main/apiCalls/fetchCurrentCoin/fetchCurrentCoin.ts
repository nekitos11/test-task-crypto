import { createConfig, createUrl } from '../../../../service';

const url = 'data/top/mktcapfull?limit=7&tsym=USD';

export const fetchCurrentCoin = async () => {
  const res = await fetch(createUrl(url), createConfig());
  const resJson = await res.json();
  return resJson.Data;
};