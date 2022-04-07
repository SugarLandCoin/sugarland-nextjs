import { useState } from 'react';
import { ProviderProps } from '../../types';
import NavigationContext from './NavigationContext';

const NavigationContextProvider = ( props: ProviderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return <NavigationContext.Provider value={{ drawerOpen, toggleDrawerOpen }}>{ props.children }</NavigationContext.Provider>;
};

export default NavigationContextProvider;
