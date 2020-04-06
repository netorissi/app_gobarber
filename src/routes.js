import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#7159c1' },
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen
      name="User"
      component={User}
      options={({ route }) => ({ title: route.params.pageTitle || 'Usuários' })}
    />
  </Stack.Navigator>
);
