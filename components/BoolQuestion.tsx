import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';

const styles = StyleSheet.create({
  buttonBar: {
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  questionContainer: {
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
  },
});

export function BoolQuestion(props: {
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
