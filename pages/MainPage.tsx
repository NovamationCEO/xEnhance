import React from 'react';
import {View} from 'react-native';
import MyBanner from '../components/Banner';
import {SymbolFilter} from '../components/SymbolFilter';
import {Enhancements} from '../components/Enhancements';
import {Questions} from '../components/Questions';

export function MainPage(props: {storeName: string}): JSX.Element {
  const [symbolFilter, setSymbolFilter] = React.useState('');
  const [baseCost, setBaseCost] = React.useState(0);
  const [isSummon, setIsSummon] = React.useState(false);

  const {storeName} = props;

  return (
    <View>
      <MyBanner storeName={storeName} />
      <SymbolFilter
        symbolFilter={symbolFilter}
        setSymbolFilter={setSymbolFilter}
      />
      <Enhancements
        symbolFilter={symbolFilter}
        setBaseCost={setBaseCost}
        setIsSummon={setIsSummon}
      />
      <Questions baseCost={baseCost} isSummon={isSummon} />
    </View>
  );
}
