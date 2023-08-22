import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

export default function AppButton({
  title,
  onPress,
  color = 'blue',
  textColor = 'dark',
  transparent = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: transparent ? colors.transparent : colors[color],
          borderWidth: transparent ? 1 : 0,
          borderColor: color,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textTransform: 'Capitalize',
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: defaultStyles.text.fontFamily,
  },
});
