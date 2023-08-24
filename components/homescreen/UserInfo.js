import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppText from '../AppText';
import AvatarImage from '../AvatarImage';
import colors from '../../config/colors';
import GradientBackground from '../GradientBackground';

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <GradientBackground
        color1={colors.dark}
        color2={colors.dark}
        startX={0.3}
      />
      <AvatarImage source={require('../../assets/mosh.jpg')} />
      <View style={styles.name}>
        <AppText style={styles.nameText}>Joaquín</AppText>
        <AppText style={styles.nameText}>Márquez</AppText>
      </View>
      <View style={styles.role}>
        <AppText style={styles.roleText}>Profesor</AppText>
        <AppText style={styles.roleText}>Matemáicas</AppText>
      </View>
      <View style={styles.bottomCircle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomCircle: {
    height: 200,
    width: 400,
    borderRadius: 100,
    position: 'absolute',
    top: 100,
    left: 100,
    zIndex: -1,
    backgroundColor: colors.blue,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 5,
    borderBottomColor: colors.blue,
  },
  name: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 30,
    color: colors.white,
    margin: 5,
  },
  roleText: {
    textAlign: 'center',
    color: colors.white,
  },
});
