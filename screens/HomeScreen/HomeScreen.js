import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import GradientBackground from '../../components/GradientBackground';
import colors from '../../config/colors';
import UserInfo from '../../components/homescreen/UserInfo';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <GradientBackground color1={colors.green} color2={colors.dark} />
        <UserInfo />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
