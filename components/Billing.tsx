import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {colors} from '../consts/colors';

const windowWidth = Dimensions.get('window').width;
const isWide = windowWidth > 1000;

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    flexDirection: 'row',
    span: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  receiptContainer: {
    marginTop: 15,
    marginRight: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.05,
    transform: 'rotate(-1deg)',
    width: 190,
  },
  image: {
    width: 190,
  },
  receiptItem: {
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'Fuggles',
    marginLeft: 10,
    marginRight: 10,
  },
  finalCostContainer: {
    flex: 1,
    backgroundColor: colors.lightIce,
    borderWidth: 2,
    borderRadius: 30,
    margin: 25,
    minWidth: 300,
  },
  finalCost: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    padding: 40,
  },
  receiptLine: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
});

function FinalCost(props: {finalCost: number}) {
  const {finalCost} = props;
  return (
    <View style={styles.finalCostContainer}>
      <Text style={styles.finalCost}>{finalCost}</Text>
    </View>
  );
}

export function Billing(props: {finalCost: number; receipt: string[][]}) {
  const {finalCost, receipt} = props;

  return (
    <>
      {!isWide && <FinalCost finalCost={finalCost} />}
      <View style={styles.bottom}>
        {isWide && <FinalCost finalCost={finalCost} />}
        <View style={styles.receiptContainer}>
          <Image
            source={require('../assets/images/notch180.png')}
            style={styles.image}
          />

          <ImageBackground
            source={require('../assets/images/parchment.png')}
            resizeMode={'repeat'}>
            {receipt.map((line, i) => (
              <View style={styles.receiptLine} key={i}>
                <Text style={{...styles.receiptItem}}>{line[0]}</Text>
                <Text style={{...styles.receiptItem}} key={`cost${i}`}>
                  {line[1]}
                </Text>
              </View>
            ))}
          </ImageBackground>
        </View>
      </View>
    </>
  );
}
