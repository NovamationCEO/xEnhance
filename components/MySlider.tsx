import React from 'react';
import {NumberSlider} from './NumberSlider';
import {sliderDataType} from './Questions';
import {Text} from 'react-native-paper';
import {Dimensions, StyleSheet, View} from 'react-native';
import {colors} from '../consts/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContents: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  label: {
    fontWeight: 'bold',
    width: 110,
    textAlign: 'right',
  },
  labelHolder: {
    backgroundColor: colors.thinIce,
    padding: 5,
    paddingLeft: 0,
    borderRadius: 10,
    marginRight: -10,
  },
});

const windowWidth = Dimensions.get('window').width;
const isWide = windowWidth > 1000;

export function MySlider(props: {item: sliderDataType}) {
  const {item} = props;

  return (
    <View style={styles.container}>
      {!isWide && (
        <View style={styles.labelHolder}>
          {item.label.split(' ').map(word => (
            <Text style={styles.label} key={word}>
              {word}
            </Text>
          ))}
        </View>
      )}
      <NumberSlider
        label={isWide ? item.label : ''}
        value={item.value}
        onChange={item.setValue}
        min={item.min}
        max={item.max}
      />
    </View>
  );
}
