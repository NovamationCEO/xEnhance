import React from 'react';
import {View} from 'react-native';
import MyBanner from '../components/Banner';
import {SymbolFilter} from '../components/SymbolFilter';
import {Enhancements} from '../components/Enhancements';
import {Questions} from '../components/Questions';

export function MainPage(): JSX.Element {
  const [symbolFilter, setSymbolFilter] = React.useState('');
  return (
    <View>
      <MyBanner />
      <SymbolFilter
        symbolFilter={symbolFilter}
        setSymbolFilter={setSymbolFilter}
      />
      <Enhancements symbolFilter={symbolFilter} />
      <Questions />
    </View>
  );
}
