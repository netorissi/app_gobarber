import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './config/Reactotron';

import Routes from './routes';

export default () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Routes />
  </NavigationContainer>
);
