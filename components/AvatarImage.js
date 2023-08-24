import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import GradientBackground from './GradientBackground';

export default function AvatarImage({ source }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 6,
    height: 120,
    width: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.translucid,
  },

  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});
