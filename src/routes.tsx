import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Following" component={View} />
      <Screen name="Discover" component={View} />
      <Screen name="Browse" component={View} />
      <Screen name="Esports" component={View} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
