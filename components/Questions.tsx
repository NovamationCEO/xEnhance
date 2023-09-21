import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
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
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  costContainer: {
    display: 'flex',
    flex: 1,
    alignText: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  finalCost: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 15,
    display: 'flex',
    textAlign: 'center',
    flex: 2,
  },
  sliderContainer: {
    flexWrap: 'wrap',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  receipt: {
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'Fuggles',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    span: 20,
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
  const [enhancerLevel, setEnhancerLevel] = React.useState(1);

  const {baseCost} = props;

  function getFinalCost(): {total: number; receipt: string[]} {
    let total = baseCost;
    let receipt = [`Enhancement Cost: ${baseCost}`];

    if (!total) {
      return {total: 0, receipt: ['Choose an Enhancement']};
    }

    if (multitarget) {
      total = total * 2;
      receipt.push('Multitarget x 2');
    }

    if (hasLost && !hasPersistent) {
      total = total / 2;
      receipt.push('Lost Ability / 2');
    }

    if (hasPersistent) {
      total = total * 3;
      receipt.push('Persistent x 3');
    }

    const levelCost = (cardLevel - 1) * 25;

    if (levelCost) {
      total = total + levelCost;
      receipt.push(`Level Cost + ${levelCost}`);
    }

    const previousFee = previous * 75;

    if (previousFee) {
      total = total + previousFee;
      receipt.push(`Previous Enhancements + ${previousFee}`);
    }

    return {total, receipt};
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
      <View style={styles.sliderContainer}>
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
        <MySlider
          label={'Enhancer Level'}
          value={enhancerLevel}
          onChange={setEnhancerLevel}
          min={1}
          max={4}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.finalCost}>{getFinalCost().total}</Text>
        <ImageBackground
          source={require('../assets/images/parchment.png')}
          resizeMode={'repeat'}>
          <View style={styles.costContainer}>
            {getFinalCost().receipt.map((line, i) => (
              <Text style={styles.receipt} key={i}>
                {line}
              </Text>
            ))}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
