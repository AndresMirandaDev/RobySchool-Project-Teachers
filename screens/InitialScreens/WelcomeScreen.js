import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import GradientBackground from '../../components/GradientBackground';
import colors from '../../config/colors';

import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <GradientBackground
        color1={colors.green}
        color2={colors.dark}
        startX={2}
        startY={2}
        endX={3}
        endY={1}
      />
      <View style={styles.circle1}></View>

      <View style={styles.logoContainer}>
        <AppText style={styles.title}>RobySchool</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Iniciar Sesión"
          color="green"
          textColor="white"
          onPress={() => {
            navigation.navigate('login');
          }}
          transparent={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    minWidth: '100%',
  },
  circle1: {
    height: 900,
    width: 900,
    backgroundColor: colors.dark,
    borderRadius: 45000,
    opacity: 1,
    position: 'absolute',
    left: 0,
    bottom: 300,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: colors.white,
    fontFamily: 'System',
    textAlign: 'center',
  },
});
