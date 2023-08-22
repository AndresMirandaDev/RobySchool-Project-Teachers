import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';

export default function AppTextInput({
  transparent = false,
  icon,
  width = '100%',
  placeholderTextColor = defaultStyles.colors.grey,
  inputTextColor = defaultStyles.colors.dark,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width,
          backgroundColor: transparent
            ? defaultStyles.colors.transparent
            : defaultStyles.colors.white,
        },
      ]}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.green}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={placeholderTextColor}
        style={[defaultStyles.text, { color: inputTextColor }]}
        {...otherProps}
        multiline={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 15,
    flexWrap: 'wrap',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: defaultStyles.colors.green,
  },
  icon: {
    marginRight: 10,
  },
});
