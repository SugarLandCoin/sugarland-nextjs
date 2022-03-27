import { createContext } from 'react';
import { Yam } from '../../yam';

interface IYamContextOption {
  yam: Yam | undefined;
}

const YamContext = createContext<IYamContextOption>({
  yam: undefined
});

export default YamContext;
