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
  const [isMultiImmune, setIsMultiImmune] = React.useState(false);

  const {storeName} = props;

  return (
    <View>
      <MyBanner storeName={storeName} />
      <SymbolFilter
        symbolFilter={symbolFilter}
        setSymbolFilter={setSymbolFilter}
      />
      {symbolFilter && symbolFilter.length && (
        <>
          <Enhancements
            symbolFilter={symbolFilter}
            setBaseCost={setBaseCost}
            setIsSummon={setIsSummon}
            setIsMultiImmune={setIsMultiImmune}
          />
          {baseCost > 0 && (
            <Questions
              baseCost={baseCost}
              isSummon={isSummon}
              isMultiImmune={isMultiImmune}
            />
          )}
        </>
      )}
    </View>
  );
}
