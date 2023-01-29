import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens from '../../Screens';
import {TabNavigation} from '../tab/Tab';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={screens.HomeScreen} />
      <Stack.Screen name="GameThree" component={screens.GameThree} />
      <Stack.Screen name="GameSix" component={screens.GameSix} />
      <Stack.Screen name="GameNine" component={screens.GameNine} />
      <Stack.Screen name="Loading" component={screens.Loader} />
    </Stack.Navigator>
  );
};

export {HomeStack};
