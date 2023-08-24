import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../../components/Screen';
import GradientBackground from '../../components/GradientBackground';
import colors from '../../config/colors';
import UserInfo from '../../components/homescreen/UserInfo';
import DisplayInfo from '../../components/homescreen/DisplayInfo';
import DateInfo from '../../components/homescreen/DateInfo';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <GradientBackground color1={colors.blue} color2={colors.dark} />
        <UserInfo />
        <View style={styles.info}>
          <DateInfo />
          <DisplayInfo
            info="2° medio A"
            label="Siguiente Clase"
            icon="calendar-check"
          />
          <DisplayInfo
            info="2 Mensajes nuevos"
            label="Mensajes"
            icon="message-alert"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    marginTop: 90,
    flex: 1,
  },
});
