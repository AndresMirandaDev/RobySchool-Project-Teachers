import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GradientBackground from '../../components/GradientBackground';
import colors from '../../config/colors';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import SubmitButton from '../../components/forms/SubmitButton';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <GradientBackground color1={colors.green} color2={colors.dark} />
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}></View>
      <View style={styles.circle4}></View>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            username: '',
            password: '',
          }}
        >
          <AppFormField
            name="username"
            icon="account"
            placeholder="Ingrese su RUT"
            transparent={true}
            placeholderTextColor={colors.white}
            inputTextColor={colors.white}
          />
          <AppFormField
            name="password"
            icon="lock"
            placeholder="Ingrese contraseña"
            transparent={true}
            placeholderTextColor={colors.white}
            inputTextColor={colors.white}
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <SubmitButton
              title="Iniciar Sesión"
              color="green"
              textColor="white"
              transparent
            />
          </View>
        </AppForm>
        <View style={styles.socialMedia}>
          <View style={styles.facebook}>
            <MaterialCommunityIcons
              name="facebook"
              color={colors.blue}
              size={40}
            />
          </View>
          <View style={styles.twitter}>
            <MaterialCommunityIcons
              name="twitter"
              color={colors.white}
              size={40}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  circle1: {
    height: 500,
    width: 500,
    backgroundColor: colors.blue,
    borderRadius: 250,
    opacity: 0.2,
    position: 'absolute',
    left: 200,
    bottom: 150,
  },
  facebook: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  formContainer: {
    padding: 20,
    backgroundColor: colors.darkOpacity,
    justifyContent: 'center',
    height: 300,
    shadowColor: colors.dark,
    shadowOffset: { height: 4, width: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  twitter: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
