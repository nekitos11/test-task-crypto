import { CurrentCoinContext } from './CurrentCoinContext';
import { useState } from 'react';

export const CurrentCoinProvider = ({ children }) => {
  const [coin, setCoin] = useState<string | undefined>();

  return (
    <CurrentCoinContext.Provider value={{ coin, setCoin }}>{children}</CurrentCoinContext.Provider>
  );
};