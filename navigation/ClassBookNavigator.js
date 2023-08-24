import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BookScreen from '../screens/BookScreen/BookScreen';

const Stack = createNativeStackNavigator();

function ClassBookNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="classbookScreen" component={BookScreen} />
    </Stack.Navigator>
  );
}

export default ClassBookNavigator;
