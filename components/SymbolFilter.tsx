import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
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
    backgroundColor: '#FFFFFF57',
    borderRadius: 40,
  },
  button: {
    padding: 10,
    margin: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  spacer: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  holder: {
    position: 'relative',
  },
  plus: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 24,
    top: 24,
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
            <View style={styles.holder} key={symbols[symbol].value}>
              {symbols[symbol].overlay && (
                <View style={styles.overlay}>
                  <Image
                    source={require('../assets/images/plus.png')}
                    style={styles.plus}
                  />
                </View>
              )}
              <MyButton
                icon={symbols[symbol].icon}
                value={symbols[symbol].value}
              />
            </View>
          );
        })}
      </ToggleButton.Row>
      <View style={styles.spacer} />
    </View>
  );
}
