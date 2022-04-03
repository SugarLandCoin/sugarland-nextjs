import { createContext } from 'react';

interface INavigationContextOption {
  drawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const NavigationContext = createContext<INavigationContextOption>({
  drawerOpen: false,
  toggleDrawerOpen: () => {},
});

export default NavigationContext;
