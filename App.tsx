/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
// import {getTheme} from 'react-native-paper/lib/typescript/core/theming';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainPage} from './pages/MainPage';
import {Text} from 'react-native-paper';
import {colors} from './consts/colors';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // remove width and height to override fixed static size
      width: null,
      height: null,
    },
    backgroundStyle: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
      position: 'relative',
    },
    image: {
      flex: 1,
    },
    credit: {
      backgroundColor: colors.darkIce,
      textAlign: 'right',
      paddingTop: 2,
      paddingRight: 20,
      color: colors.lightIce,
    },
  });

  const aspect = Math.floor(Math.random() * 8);

  const storeName = aspect
    ? "Voice-of-Eight's Enhancements"
    : 'Enhancements By Nera (✿◠‿◠)';

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ImageBackground
        source={require('./assets/images/frost.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={styles.backgroundStyle.backgroundColor}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <MainPage storeName={storeName} />
        </ScrollView>
        <Text style={styles.credit}>v1.0 ©2023 Chris Young</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default App;
