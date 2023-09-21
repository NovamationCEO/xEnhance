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
  });

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
          <MainPage />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default App;
