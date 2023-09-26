import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SegmentedButtons, Switch} from 'react-native-paper';
import {colors} from '../consts/colors';

const styles = (props: {isTrue: boolean}) =>
  StyleSheet.create({
    buttonBar: {
      backgroundColor: 'transparent',
      borderRadius: 20,
    },
    wideContainer: {
      padding: 10,
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
    },
    shortContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: props.isTrue ? colors.lightIce : colors.darkIce,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      height: 41,
      borderRadius: 20,
      marginTop: -15,
    },
    shortLabel: {
      fontWeight: 'bold',
      paddingTop: 7,
      color: props.isTrue ? colors.primary : colors.lightIce,
    },
  });

const windowWidth = Dimensions.get('window').width;
const isWide = windowWidth > 1000;

export function BoolQuestion(props: {
  value: boolean;
  setValue: (v: boolean) => void;
  label: string;
}) {
  const {value, setValue, label} = props;

  const localStyle = styles({isTrue: value});

  return (
    <View style={localStyle.wideContainer}>
      {isWide && (
        <SegmentedButtons
          value={value.toString()}
          onValueChange={(v: string) => setValue(v === 'true')}
          style={localStyle.buttonBar}
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
      )}
      {!isWide && (
        <View style={localStyle.shortContainer}>
          <Text style={localStyle.shortLabel}>{label}</Text>
          <Switch
            value={value}
            onValueChange={() => setValue(!value)}
            color={colors.darkIce}
          />
        </View>
      )}
    </View>
  );
}
