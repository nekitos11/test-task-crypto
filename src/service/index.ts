const API_KEY = 'd5d090f5179fd498a40516208d116caf035884b0fdd465478be131ef5d2a1ef7';

const API_URL = 'https://min-api.cryptocompare.com/';

export const createUrl = (url: string) => API_URL + url;

export const createConfig = () => ({
  headers: {
    authorization: 'Apikey ' + API_KEY,
  },
});