export interface ApiItem {
  CoinInfo: {
    Name: string;
    Id: string
  };
  RAW: {
    USD: { PRICE: string; VOLUME24HOUR: number; CHANGEPCT24HOUR: number };
  };
}