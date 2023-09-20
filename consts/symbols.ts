import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

type symbolsType = {
  [name: string]: {
    name: string;
    icon: IconSource;
    value: string;
  };
};

export const symbols: symbolsType = {
  square: {
    name: 'Square',
    icon: 'square-outline',
    value: 'square',
  },
  circle: {
    name: 'Circle',
    icon: 'circle-outline',
    value: 'circle',
  },
  diamond: {
    name: 'Diamond',
    icon: 'rhombus-outline',
    value: 'diamond',
  },
  plus: {
    name: 'Diamond+',
    icon: 'plus-thick',
    value: 'plus',
  },
  hex: {
    name: 'Hex',
    icon: 'hexagon-outline',
    value: 'hex',
  },
};

export type symbolsKey = keyof typeof symbols;
