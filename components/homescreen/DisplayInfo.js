import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../AppText';
import colors from '../../config/colors';

export default function DisplayInfo({
  label,
  info,
  icon,
  iconColor = colors.white,
}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={30}
        color={iconColor}
        style={{ marginRight: 10 }}
      />
      <AppText style={styles.label}>{label}: </AppText>
      <AppText style={styles.info}>{info}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: 50,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  label: {
    color: colors.white,
  },
  info: {
    color: colors.white,
  },
});
