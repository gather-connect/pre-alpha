import tw from "twrnc";
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";


export default function Intro() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={tw`justify-center items-center`}>
        <View style={tw`px-8`}>
          <Text style={styles.title}>We're so glad you could make it!</Text>
        </View>
        <Image 
          source={require("@/assets/images/onboarding/welcome.png")} 
          style={styles.image}/>
        <View style={tw`px-8`}>
          <Text style={styles.text}>
            Complete the next steps to get the best experience on Gather
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    justifyContent: "center",
    color: "black", 
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    justifyContent: "center",
    color: "black", 
  },
  image: {
    height: 320, 
    width: 320,
    marginVertical: 40
  }
});


