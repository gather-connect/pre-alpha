// TODO: image placeholder for loading issues, etc.
// FIXME: migrate to expo-image for better performance
// FIXME: replace png assets with jpeg counterparts

import { Theme } from "@/constants/Theme";

import tw from "twrnc";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SplitButton from "@/components/navigation/SplitButton";

export default function Auth() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Image source={require("@/assets/images/wordmark.png")} style={styles.image} />
            <Text style={styles.title}>Gather</Text>
          </View>
          <Image source={require("@/assets/images/onboarding/iconspill.png")} style={styles.imageContainer} />
          <View style={styles.btnContainer}>
            <SplitButton />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: "8%",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "12%",
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontFamily: Theme.fonts.medium,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 36,
    height: 36,
  },
  imageContainer: {
    marginVertical: "16%",
  },
  btnContainer: {
    marginVertical: "16%",
  }
});
