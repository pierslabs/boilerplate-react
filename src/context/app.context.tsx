import { createContext, useCallback, useMemo, useState } from 'react';

// Context Props
export interface AppContextProps {
  counter: number;
  handleCounter: () => void;
}

const appContextDefaultValue: AppContextProps = {
  counter: 0,
  handleCounter: () => {},
};

export const AppContext = createContext<AppContextProps>(
  appContextDefaultValue
);

// Provider Props
export interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleCounter = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  const values: AppContextProps = useMemo(() => {
    return {
      counter,
      handleCounter,
    };
  }, [counter, handleCounter]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
