/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {colors} from './consts/colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    secondary: 'red',
    onPrimary: 'tomato',
    primaryContainer: 'red',
    onPrimaryContainer: 'white',
    secondaryContainer: colors.lightIce,
    elevation: {level1: colors.darkIce},
    onSecondaryContainer: colors.primary,
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
