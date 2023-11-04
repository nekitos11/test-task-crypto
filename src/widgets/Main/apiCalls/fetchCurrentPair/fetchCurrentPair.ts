import { createConfig, createUrl } from '../../../../service';

const url = 'data/pricemultifull';

export const fetchCurrentPair = async (from: string, to: string) => {
  
  const res = await fetch(createUrl(url, `?fsyms=${from}&tsyms=${to}`), createConfig());
  const resJson = await res.json();
  return resJson.DISPLAY;
};

export const getFetchCurrentPair = (from: string, to:string) => {
  return () => fetchCurrentPair(from, to);
};