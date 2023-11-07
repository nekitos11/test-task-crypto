import { CurrentCoinContext } from './CurrentCoinContext';
import { ReactNode, useState } from 'react';
import {ApiItem} from "./types";

interface CurrentCoinProviderProps {
  children?: ReactNode;
}

export const CurrentCoinProvider = ({ children }: CurrentCoinProviderProps) => {
  const [coin, setCoin] = useState<ApiItem | undefined>();

  return (
    <CurrentCoinContext.Provider value={{ coin, setCoin }}>{children}</CurrentCoinContext.Provider>
  );
};