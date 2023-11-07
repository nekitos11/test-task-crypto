import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { ApiItem } from './types';

interface CurrentCoinContextProps {
  coin?: ApiItem;
  setCoin?: Dispatch<SetStateAction<ApiItem>>;
}

export const CurrentCoinContext = createContext<CurrentCoinContextProps | null>(null);
export const useCurrentCoinContext = () => {
  const ctx = useContext(CurrentCoinContext);

  if (!ctx) {
    throw new Error('useCurrentCoinContext has to be used within CurrentCoinProvider');
  }

  return ctx;
};