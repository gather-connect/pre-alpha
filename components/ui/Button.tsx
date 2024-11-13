import { Theme } from "@/constants/Theme";

import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, ViewStyle, Text, Pressable, StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export default function Button({ text, onPress }: ButtonProps) {
  return (
    <Pressable
      style={styles.btn}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable> 
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "92%",
    height: "14%",
    backgroundColor: Theme.primary.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
  },
  text: {
    fontSize: 24,
    fontFamily: Theme.fonts.semibold,
    textAlign: "center",
    color: Theme.background.white,
  },
});
