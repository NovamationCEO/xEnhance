import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import {MySlider} from './MySlider';

const styles = StyleSheet.create({
  questionContainer: {
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonBar: {
    backgroundColor: '#1181B9',
    borderRadius: 20,
  },
  costContainer: {
    display: 'flex',
    flex: 1,
    alignText: 'center',
    justifyContent: 'center',
  },
  finalCost: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

function MyYesNo(props: {
  value: boolean;
  setValue: (v: boolean) => void;
  label: string;
}) {
  const {value, setValue, label} = props;

  return (
    <View style={styles.questionContainer}>
      <SegmentedButtons
        value={value.toString()}
        onValueChange={(v: string) => setValue(v === 'true')}
        style={styles.buttonBar}
        buttons={[
          {
            value: value.toString(),
            label: label,
            icon: value ? 'check' : 'cancel',
          },
          {
            value: 'false',
            label: 'NO',
          },
          {value: 'true', label: 'YES'},
        ]}
      />
    </View>
  );
}

export function Questions(props: {baseCost: number}) {
  const [multitarget, setMultitarget] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  const [hasPersistent, setHasPersistent] = React.useState(false);
  const [cardLevel, setCardLevel] = React.useState(1);
  const [previous, setPrevious] = React.useState(0);

  const {baseCost} = props;

  function getFinalCost() {
    let total = baseCost;

    if (multitarget) {
      total = total * 2;
    }

    if (hasLost && !hasPersistent) {
      total = total / 2;
    }

    if (hasPersistent) {
      total = total * 3;
    }

    total = total + (cardLevel - 1) * 25;
    total = total + previous * 75;

    return total;
  }

  return (
    <View style={styles.questionContainer}>
      <MyYesNo
        value={multitarget}
        setValue={setMultitarget}
        label={'Targeting multiple figures or hexes?'}
      />
      <MyYesNo value={hasLost} setValue={setHasLost} label={'Has Lost icon?'} />
      <MyYesNo
        value={hasPersistent}
        setValue={setHasPersistent}
        label={'Has Persistent Icon?'}
      />
      <MySlider
        label={'Card Level'}
        value={cardLevel}
        onChange={setCardLevel}
        min={1}
        max={9}
      />
      <MySlider
        label={'Existing Enhancements'}
        value={previous}
        onChange={setPrevious}
        min={0}
        max={3}
      />
      <View style={styles.costContainer}>
        <Text style={styles.finalCost}>{getFinalCost()}</Text>
      </View>
    </View>
  );
}
