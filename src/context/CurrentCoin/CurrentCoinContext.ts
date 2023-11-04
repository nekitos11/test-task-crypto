import {createContext, Dispatch, SetStateAction, useContext} from 'react';

interface CurrentCoinContextProps {
  coin?: string;
  setCoin?: Dispatch<SetStateAction<string>>;
}

export const CurrentCoinContext = createContext<CurrentCoinContextProps | null>(null);
export const useCurrentCoinContext = () => {
  const ctx = useContext(CurrentCoinContext);

  if (!ctx) {
    throw new Error('useCurrentCoinContext has to be used within CurrentCoinProvider');
  }

  return ctx;
};