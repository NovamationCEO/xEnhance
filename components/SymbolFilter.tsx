import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {symbols} from '../consts/symbols';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    span: 10,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  buttonRow: {
    justifyContent: 'space-around',
    span: 40,
  },
  button: {
    padding: 10,
    margin: 10,
    width: 80,
    height: 80,
  },
  spacer: {
    flex: 1,
  },
});

function MyButton(props: {icon: IconSource; value: string}) {
  const {icon, value} = props;

  return (
    <ToggleButton icon={icon} value={value} style={styles.button} size={50} />
  );
}

export function SymbolFilter(props: {
  symbolFilter: string;
  setSymbolFilter: (x: string) => void;
}) {
  const {symbolFilter, setSymbolFilter} = props;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.spacer} />
      <ToggleButton.Row
        onValueChange={value =>
          setSymbolFilter(value === 'chosen' ? '' : value)
        }
        value={symbolFilter}
        style={styles.buttonRow}>
        {Object.keys(symbols).map(symbol => {
          return (
            <MyButton
              icon={symbols[symbol].icon}
              value={symbols[symbol].value}
              key={symbols[symbol].value}
            />
          );
        })}
      </ToggleButton.Row>
      <View style={styles.spacer} />
    </View>
  );
}
