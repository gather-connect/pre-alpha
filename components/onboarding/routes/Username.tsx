// TODO: add name field to sign-up page

import tw from "twrnc";
import React, { useState } from "react";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function Username() {
  const [username, setUsername] = useState('');

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={`flex flex-col justify-center items-center`}>
        <View style={tw`px-4 mt-40 mb-4`}>
          <Text style={styles.title}>Tell us a bit more about yourself: </Text>
        </View>
        <View>
          <View style={tw`px-4 my-4`}>
            <Text style={styles.text}>
              What would you like to go by?  
            </Text>
          </View>
          <TextInput
            style={styles.textInput}
            maxLength={28}
            placeholder="Pick a Username"
            value={username}
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
      </View>
    </> 
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    justifyContent: "center",
    color: "black", 
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    justifyContent: "center",
    color: "black", 
  },
  textInput: {
    fontSize: 20,
    borderRadius: 8,
    fontWeight: "semibold",
    backgroundColor: "#e5e7eb",
    color: "black",
    width: "100%",
    height: "24%",
    paddingLeft: "8%",
    marginVertical: 24
  }
});



