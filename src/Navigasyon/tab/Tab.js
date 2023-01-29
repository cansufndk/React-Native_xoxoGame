import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as screens from '../../Screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={screens.HomeScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => {
            if (focused)
              return (
                <MaterialCommunityIcons name="home" color={'red'} size={size} />
              );
            return (
              <MaterialCommunityIcons
                name="home-outline"
                color={'white'}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={screens.Profile}
        options={{
          tabBarIcon: ({color, focused, size}) => {
            if (focused)
              return (
                <MaterialCommunityIcons
                  name="account"
                  color={'red'}
                  size={size}
                />
              );
            return (
              <MaterialCommunityIcons
                name="account-outline"
                color={'white'}
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

//export {TabNavigation};
