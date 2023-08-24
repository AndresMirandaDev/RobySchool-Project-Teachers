import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import HomeNavigator from './HomeNavigator';
import ClassBookNavigator from './ClassBookNavigator';
import colors from '../config/colors';

const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: colors.transparent,
  },
};
function AppNavigator() {
  return (
    <PaperProvider theme={theme}>
      <Tab.Navigator
        activeColor={colors.white}
        shifting={true}
        barStyle={{ backgroundColor: colors.darkOpacity }}
      >
        <Tab.Screen
          name="home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name="home"
                size={30}
                color={focused ? color : colors.white}
              />
            ),
            title: 'Inicio',
          }}
        />
        <Tab.Screen
          name="classBook"
          component={ClassBookNavigator}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name="book-open"
                size={30}
                color={focused ? color : colors.white}
              />
            ),
            title: 'Libro de clases',
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  );
}

export default AppNavigator;
