import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import {MySlider} from './MySlider';

const styles = StyleSheet.create({
  questionContainer: {
    padding: 10,
    margin: 10,
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

export function Questions() {
  const [multitarget, setMultitarget] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  const [hasPersistent, setHasPersistent] = React.useState(false);
  const [cardLevel, setCardLevel] = React.useState(1);
  const [previous, setPrevious] = React.useState(0);

  return (
    <View>
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
    </View>
  );
}
