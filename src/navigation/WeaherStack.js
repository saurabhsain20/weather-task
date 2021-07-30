import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import appStyles from '../styles/styles';
import { routes } from '../common/strings';
import fonts from '../styles/fonts';
import WeatherScreen from '../screens/Weather';

const Stack = createStackNavigator();

const authHeaderStyle = {
  headerTitleStyle: { ...fonts.textVariants().Headline.L, fontWeight: 'bold' },
  headerTransparent: true,
  headerTitleAlign: 'center',
};

export const WeatherStack = () => {
  return (
    <SafeAreaView style={appStyles.mainContainer}>
      <Stack.Navigator
        initialRouteName={routes.employeeLogin}
        screenOptions={authHeaderStyle}>
        <Stack.Screen
          name={routes.weather}
          component={WeatherScreen}
          options={{
            title: 'Weather',
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
