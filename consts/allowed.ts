import {symbolsKey} from './symbols';

type allowedType = {
  [name: symbolsKey]: symbolsKey[];
};

export const allowed: allowedType = {
  square: ['square'],
  circle: ['square', 'circle'],
  diamond: ['square', 'circle', 'diamond'],
  plus: ['square', 'circle', 'plus'],
  hex: ['hex'],
};
