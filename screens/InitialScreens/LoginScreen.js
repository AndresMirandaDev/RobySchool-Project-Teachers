import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 260,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  circle1: {
    height: 200,
    width: 200,
    backgroundColor: colors.green,
    borderRadius: 100,
    opacity: 0.2,
    position: 'absolute',
    left: 300,
    bottom: 700,
  },
  circle2: {
    height: 200,
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 100,
    opacity: 0.2,
    position: 'absolute',
    right: 300,
    top: 600,
  },
  circle3: {
    height: 200,
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 100,
    opacity: 0.2,
    position: 'absolute',
    left: 200,
    top: 700,
  },
  circle4: {
    height: 200,
    width: 200,
    backgroundColor: colors.blue,
    borderRadius: 100,
    opacity: 0.2,
    position: 'absolute',
    right: 200,
    top: 100,
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
});
