import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {enhancements} from '../consts/enhancements';
import {allowed} from '../consts/allowed';

export function Enhancements(props: {symbolFilter: string}) {
  const {symbolFilter} = props;
  const [chosen, setChosen] = React.useState('');

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      width: 200,
      margin: 10,
    },
  });

  return (
    <View style={styles.container}>
      {Object.keys(enhancements).map(enhancement => {
        const target = enhancements[enhancement];
        const whiteList = allowed[symbolFilter];

        if (!symbolFilter || !whiteList || whiteList.includes(target.type)) {
          return (
            <Button
              mode={target.value === chosen ? 'outlined' : 'elevated'}
              onPress={() => {
                setChosen(target.value === chosen ? '' : target.value);
              }}
              style={styles.button}>
              {target.name}
            </Button>
          );
        }

        return null;
      })}
    </View>
  );
}
