import React from 'react';
import {View} from 'react-native';
import MyBanner from '../components/Banner';
import {SymbolFilter} from '../components/SymbolFilter';

export function MainPage(): JSX.Element {
  return (
    <View>
      <MyBanner />
      <SymbolFilter />
    </View>
  );
}
