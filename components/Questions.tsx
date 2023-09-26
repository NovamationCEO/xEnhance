import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Billing} from './Billing';
import {BoolQuestion} from './BoolQuestion';
import {MySlider} from './MySlider';

const windowWidth = Dimensions.get('window').width;
const isWide = windowWidth > 1000;

export type sliderDataType = {
  label: string;
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
  id: string;
};

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
  newLine: {
    width: 500,
    flex: 1,
  },
});

function Sliders(props: {isHex: boolean; sliderData: sliderDataType[]}) {
  const {isHex, sliderData} = props;

  if (!isWide) {
    return (
      <>
        <View style={styles.sliderContainer}>
          <MySlider item={sliderData[0]} />
        </View>
        <View style={styles.sliderContainer}>
          <MySlider item={sliderData[1]} />
        </View>
        <View style={styles.sliderContainer}>
          <MySlider item={sliderData[2]} />
        </View>
        {isHex && (
          <View style={styles.sliderContainer}>
            <MySlider item={sliderData[3]} />
          </View>
        )}
      </>
    );
  }
  return (
    <>
      <View style={styles.sliderContainer}>
        <MySlider item={sliderData[0]} />
        <MySlider item={sliderData[1]} />
        {!isHex && <MySlider item={sliderData[2]} />}
      </View>
      {isHex && (
        <View style={styles.sliderContainer}>
          <MySlider item={sliderData[2]} />
          <MySlider item={sliderData[3]} />
        </View>
      )}
    </>
  );
}

export function Questions(props: {baseCost: number; isSummon: boolean}) {
  const [multitarget, setMultitarget] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  const [hasPersistent, setHasPersistent] = React.useState(false);
  const [cardLevel, setCardLevel] = React.useState(1);
  const [previous, setPrevious] = React.useState(0);
  const [enhancerLevel, setEnhancerLevel] = React.useState(1);
  const [existingHexes, setExistingHexes] = React.useState(1);

  const {baseCost, isSummon} = props;
  const isHex = baseCost === 200;

  function getFinalCost(): {total: number; receipt: string[][]} {
    let total = baseCost;
    let receipt = [['Enhancement Cost:', baseCost.toString()]];

    if (!total) {
      return {total: 0, receipt: [['Choose an Enhancement', '']]};
    }

    if (!isHex) {
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
    }

    if (isHex) {
      total = Math.floor(total / existingHexes);
      receipt.push(['Existing Hexes', `/ ${existingHexes}`]);
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

  const sliderData: sliderDataType[] = [
    {
      label: 'Card Level',
      value: cardLevel,
      setValue: setCardLevel,
      min: 1,
      max: 9,
      id: 'q1',
    },
    {
      label: 'Existing Enhancements',
      value: previous,
      setValue: setPrevious,
      min: 0,
      max: 3,
      id: 'q2',
    },
    {
      label: 'Enhancer Level',
      value: enhancerLevel,
      setValue: setEnhancerLevel,
      min: 1,
      max: 4,
      id: 'q3',
    },
  ];

  if (isHex) {
    sliderData.push({
      label: 'Existing Hexes',
      value: existingHexes,
      setValue: setExistingHexes,
      min: 1,
      max: 9,
      id: 'q4',
    });
  }

  return (
    <View style={styles.questionContainer}>
      <BoolQuestion
        value={multitarget}
        setValue={setMultitarget}
        label={'Multiple Targets? (Not AOE)'}
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
      <Sliders isHex={isHex} sliderData={sliderData} />
      <Billing
        finalCost={getFinalCost().total}
        receipt={getFinalCost().receipt}
      />
    </View>
  );
}
