import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function CustomTextInput ({ value, onChangeText, ...rest }) {
  return (
    <TextInput
      style={styles.textInput}
      maxLength={28}
      placeholder="Email"
      value={value}
      placeholderTextColor="gray"
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    borderRadius: 8,
    fontWeight: "semibold",
    backgroundColor: "#e5e7eb",
    color: "black",
    width: "92%",
    height: "12%",
    paddingLeft: "8%",
    marginVertical: "2%",
  },  
});
