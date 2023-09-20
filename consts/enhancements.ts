import {symbols} from './symbols';

type enhancementsType = {
  [name: string]: {
    name: string;
    value: string;
    cost: number;
    type: keyof typeof symbols;
  };
};

export const enhancements: enhancementsType = {
  move: {
    name: 'Move +1',
    value: 'move',
    cost: 30,
    type: symbols.square.value,
  },
  attack: {
    name: 'Attack +1',
    value: 'attack',
    cost: 50,
    type: symbols.plus.value,
  },
  range: {
    name: 'Range +1',
    value: 'range',
    cost: 30,
    type: symbols.plus.value,
  },
  target: {
    name: 'Target +1',
    value: 'target',
    cost: 75,
    type: symbols.plus.value,
  },
  shield: {
    name: 'Shield +1',
    value: 'shield',
    cost: 80,
    type: symbols.plus.value,
  },
  retaliate: {
    name: 'Retaliate +1',
    value: 'retaliate',
    cost: 60,
    type: symbols.plus.value,
  },
  pierce: {
    name: 'Pierce +1',
    value: 'pierce',
    cost: 30,
    type: symbols.plus.value,
  },
  heal: {
    name: 'Heal +1',
    value: 'heal',
    cost: 30,
    type: symbols.plus.value,
  },
  push: {
    name: 'Push +1',
    value: 'push',
    cost: 30,
    type: symbols.plus.value,
  },
  pull: {
    name: 'Pull +1',
    value: 'pull',
    cost: 20,
    type: symbols.plus.value,
  },
  teleport: {
    name: 'Teleport +1',
    value: 'teleport',
    cost: 50,
    type: symbols.plus.value,
  },
  summonHp: {
    name: 'Summon HP +1',
    value: 'summonHp',
    cost: 40,
    type: symbols.plus.value,
  },
  summonMove: {
    name: 'Summon Move +1',
    value: 'summonMove',
    cost: 60,
    type: symbols.plus.value,
  },
  summonAttack: {
    name: 'Summon Attack +1',
    value: 'summonAttack',
    cost: 100,
    type: symbols.plus.value,
  },
  summonRange: {
    name: 'Summon Range +1',
    value: 'summonRange',
    cost: 50,
    type: symbols.plus.value,
  },
  regenerate: {
    name: 'Regenerate',
    value: 'regenerate',
    cost: 40,
    type: symbols.plus.value,
  },
  ward: {
    name: 'Ward',
    value: 'ward',
    cost: 75,
    type: symbols.plus.value,
  },
  strengthen: {
    name: 'Strengthen',
    value: 'strengthen',
    cost: 100,
    type: symbols.plus.value,
  },
  bless: {
    name: 'Bless',
    value: 'bless',
    cost: 75,
    type: symbols.plus.value,
  },
  wound: {
    name: 'Wound',
    value: 'wound',
    cost: 75,
    type: symbols.diamond.value,
  },
  poison: {
    name: 'Poison',
    value: 'poison',
    cost: 50,
    type: symbols.diamond.value,
  },
  immobilize: {
    name: 'Immobilize',
    value: 'immobilize',
    cost: 150,
    type: symbols.diamond.value,
  },
  muddle: {
    name: 'Muddle',
    value: 'muddle',
    cost: 40,
    type: symbols.diamond.value,
  },
  curse: {
    name: 'Curse',
    value: 'curse',
    cost: 150,
    type: symbols.diamond.value,
  },
  element: {
    name: 'Element',
    value: 'element',
    cost: 100,
    type: symbols.circle.value,
  },
  wildElement: {
    name: 'Wild Element',
    value: 'wildElement',
    cost: 150,
    type: symbols.circle.value,
  },
  jump: {
    name: 'Jump',
    value: 'jump',
    cost: 60,
    type: symbols.square.value,
  },
  aoeHex: {
    name: 'Area-of-Effect Hex',
    value: 'aeoHex',
    cost: 200,
    type: symbols.hex.value,
  },
};
