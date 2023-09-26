import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {enhancements} from '../consts/enhancements';
import {allowed} from '../consts/allowed';

export function Enhancements(props: {
  symbolFilter: string;
  setBaseCost: (n: number) => void;
  setIsSummon: (b: boolean) => void;
}) {
  const {symbolFilter, setBaseCost, setIsSummon} = props;
  const [chosen, setChosen] = React.useState('');

  React.useEffect(() => {
    if (
      !chosen ||
      !chosen.length ||
      !enhancements[chosen] ||
      !enhancements[chosen].cost
    ) {
      setBaseCost(0);
      return;
    }
    setBaseCost(enhancements[chosen].cost);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosen]);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      width: 150,
      margin: 10,
    },
    text: {
      width: 150,
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
              mode={target.value === chosen ? 'contained-tonal' : 'elevated'}
              onPress={() => {
                setChosen(target.value === chosen ? '' : target.value);
                setIsSummon(target.value.includes('summon'));
              }}
              style={styles.button}
              key={enhancement}>
              <Text
                style={styles.text}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {target.name}
              </Text>
            </Button>
          );
        }

        return null;
      })}
    </View>
  );
}
