import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from '../common/strings';
import { WeatherStack } from './WeaherStack';

const Stack = createStackNavigator();

const hideHeader = { headerShown: false };

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.weather} // To open home page use {routes.drawer}
      screenOptions={hideHeader}>
      <Stack.Screen name={routes.weather} component={WeatherStack} />
    </Stack.Navigator>
  );
};

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
}
