import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const MyBanner = () => {
  const styles = StyleSheet.create({
    textBar: {
      justifyContent: 'center',
      textAlign: 'center',
      padding: 10,
      fontSize: 50,
    },
    image: {
      width: '100%',
    },
    mainMask: {
      flex: 1,
      flexDirection: 'row',
      height: 100,
      width: '100%',
    },
    maskElement: {
      backgroundColor: 'transparent',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    theText: {
      fontSize: 60,
      color: 'black',
      fontWeight: 'bold',
    },
  });

  return (
    <View>
      <LinearGradient colors={['#7E9CDC', '#283F72', '#667DBF']}>
        <MaskedView
          style={styles.mainMask}
          maskElement={
            <View style={styles.maskElement}>
              <Text style={styles.theText}>ENHANCEMENT WORKSHOP</Text>
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
