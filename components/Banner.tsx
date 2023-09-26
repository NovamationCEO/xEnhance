import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../consts/colors';

const MyBanner = (props: {storeName: string}) => {
  const {storeName} = props;

  const styles = StyleSheet.create({
    image: {
      width: '100%',
    },
    mainMask: {
      flex: 1,
      flexDirection: 'row',
      maxHeight: 100,
      width: '100%',
    },
    maskElement: {
      backgroundColor: 'transparent',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    theText: {
      fontSize: 60,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
  });

  return (
    <View>
      <LinearGradient colors={['transparent', colors.darkIce, 'transparent']}>
        <MaskedView
          style={styles.mainMask}
          maskElement={
            <View style={styles.maskElement}>
              <Text
                style={styles.theText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}>
                {storeName}
              </Text>
            </View>
          }>
          <Image
            source={require('../assets/images/frost.jpg')}
            style={styles.image}
          />
        </MaskedView>
      </LinearGradient>
    </View>
  );
};

export default MyBanner;
