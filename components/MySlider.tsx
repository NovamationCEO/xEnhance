import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  questionContainer: {
    padding: 10,
    margin: 10,
  },
  thumbContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    display: 'flex',
    marginRight: 5,
    marginTop: 2,
  },
  thumbBackground: {
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});

export function MySlider(props: {
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  label: string;
}) {
  const {value, onChange, min, max, step = 1, label} = props;
  return (
    <View style={styles.questionContainer}>
      <Text>{label}</Text>
      <Slider
        value={value}
        onValueChange={(n: number[]) => onChange(n[0])}
        minimumValue={min}
        maximumValue={max}
        step={step}
        renderThumbComponent={() => (
          <View style={styles.thumbContainer}>
            <ImageBackground
              source={require('../images/frost.jpg')}
              style={styles.thumbBackground}
              resizeMode={'cover'}>
              <Text style={styles.text}>{value}</Text>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}
