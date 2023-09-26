import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';
import {colors} from '../consts/colors';

const styles = StyleSheet.create({
  questionContainer: {
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  holder: {
    flex: 1,
    backgroundColor: colors.darkIce,
    borderRadius: 500,
    flexDirection: 'column',
    padding: 10,
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
  trackContainer: {
    height: 25,
    borderRadius: 15,
    backgroundColor: colors.lightIce,
    borderWidth: 2,
    borderColor: colors.darkIce,
    padding: 10,
    margin: 10,
  },
  track: {
    backgroundColor: 'transparent',
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export function NumberSlider(props: {
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  label?: string;
}) {
  const {value, onChange, min, max, step = 1, label = ''} = props;
  return (
    <View style={styles.questionContainer}>
      <View style={styles.holder}>
        {label.length > 0 && <Text style={styles.label}>{label}</Text>}
        <Slider
          value={value}
          onValueChange={(n: number[]) => onChange(n[0])}
          minimumValue={min}
          maximumValue={max}
          step={step}
          thumbTouchSize={{width: 60, height: 60}}
          renderThumbComponent={() => (
            <View style={styles.thumbContainer}>
              <ImageBackground
                source={require('../assets/images/frost.jpg')}
                style={styles.thumbBackground}
                resizeMode={'cover'}>
                <Text style={styles.text}>{value}</Text>
              </ImageBackground>
            </View>
          )}
          containerStyle={styles.trackContainer}
          trackStyle={styles.track}
          minimumTrackStyle={styles.track}
        />
      </View>
    </View>
  );
}
