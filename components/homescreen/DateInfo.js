import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import UseMonth from '../../hooks/useMonth';
import useWeekDay from '../../hooks/useWeekDay';
import colors from '../../config/colors';
import useMonth from '../../hooks/useMonth';
import AppText from '../AppText';
import GradientBackground from '../GradientBackground';

export default function DateInfo() {
  const month = useMonth(new Date());
  const weekday = useWeekDay(new Date());
  const date = new Date().getDate();

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <AppText style={styles.labelText}>Hoy</AppText>
      </View>
      <View style={styles.info}>
        <AppText style={styles.infoText}>{weekday}</AppText>
        <AppText style={styles.infoText}>{date}</AppText>
        <AppText style={styles.infoText}>{month}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    overflow: 'hidden',
    borderWidth: 0,
    borderColor: colors.green,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  info: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flex: 2,
    padding: 10,
    backgroundColor: colors.dark,
  },
  infoText: {
    color: colors.white,
    fontSize: 25,
  },
  label: {
    flex: 1,
    backgroundColor: colors.green,
    padding: 5,
    borderEndEndRadius: 20,
    borderTopRightRadius: 20,
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.white,
    textAlign: 'center',
  },
});
