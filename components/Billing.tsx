import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    flexDirection: 'row',
    span: 20,
  },
  receiptContainer: {
    marginTop: 15,
    marginRight: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
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
  finalCost: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 15,
    display: 'flex',
    textAlign: 'center',
    flex: 2,
  },
  receiptLine: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
});

export function Billing(props: {finalCost: number; receipt: string[][]}) {
  const {finalCost, receipt} = props;

  return (
    <View style={styles.bottom}>
      <Text style={styles.finalCost}>{finalCost}</Text>
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
  );
}
