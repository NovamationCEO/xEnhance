import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MySlider} from './MySlider';
import {Billing} from './Billing';
import {BoolQuestion} from './BoolQuestion';

const styles = StyleSheet.create({
  questionContainer: {
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  sliderContainer: {
    flexWrap: 'wrap',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});

export function Questions(props: {baseCost: number; isSummon: boolean}) {
  const [multitarget, setMultitarget] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  const [hasPersistent, setHasPersistent] = React.useState(false);
  const [cardLevel, setCardLevel] = React.useState(1);
  const [previous, setPrevious] = React.useState(0);
  const [enhancerLevel, setEnhancerLevel] = React.useState(1);

  const {baseCost, isSummon} = props;

  function getFinalCost(): {total: number; receipt: string[][]} {
    let total = baseCost;
    let receipt = [['Enhancement Cost:', baseCost.toString()]];

    if (!total) {
      return {total: 0, receipt: [['Choose an Enhancement', '']]};
    }

    if (multitarget) {
      total = total * 2;
      receipt.push(['Multitarget', 'x 2']);
    }

    if (hasLost && !hasPersistent) {
      total = total / 2;
      receipt.push(['Lost Ability', '/ 2']);
    }

    if (hasPersistent && !isSummon) {
      total = total * 3;
      receipt.push(['Persistent', 'x 3']);
    }

    const levelCost = (cardLevel - 1) * 25;

    if (levelCost) {
      total = total + levelCost;
      receipt.push(['Level Cost', `+ ${levelCost}`]);
    }

    const previousFee = previous * 75;

    if (previousFee) {
      total = total + previousFee;
      receipt.push(['Previous Enhancements', `+ ${previousFee}`]);
    }

    const discounts = [
      0,
      0,
      10,
      10 + (cardLevel - 1) * 10,
      10 + (cardLevel - 1) * 10 + previous * 25,
    ];
    if (enhancerLevel > 1) {
      total = total - discounts[enhancerLevel];
      receipt.push([
        'Shop Discount',
        `- ${discounts[enhancerLevel].toString()}`,
      ]);
    }

    return {total, receipt};
  }

  return (
    <View style={styles.questionContainer}>
      <BoolQuestion
        value={multitarget}
        setValue={setMultitarget}
        label={'Targeting multiple figures or hexes?'}
      />
      <BoolQuestion
        value={hasLost}
        setValue={setHasLost}
        label={'Has Lost icon?'}
      />
      <BoolQuestion
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
      <Billing
        finalCost={getFinalCost().total}
        receipt={getFinalCost().receipt}
      />
    </View>
  );
}
