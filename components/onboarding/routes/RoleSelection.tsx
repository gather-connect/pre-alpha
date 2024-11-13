// FIXME: this page is fucking cursed

import tw from "twrnc";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import { roles } from '@/components/onboarding/data/roles.ts';
import { SelectList } from 'react-native-dropdown-select-list';

export default function RoleSelection() { 
  const [selected, setSelected] = useState('');
  
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`mx-4`}>
          <Text style={styles.title}>
            What do you plan on using Gather for?
          </Text>
        </View>

        <View style={tw`items-center`}>
          <View style={tw`my-8`}>
            <Text style={styles.text}>
              Select your role below:
            </Text>
          </View>          
          <SelectList
            setSelected={(val) => setSelected(val)} 
            data={roles} 
            save="value"
            search={false}
            boxStyles={styles.selectBox}
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
  selectBox: {
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    color: "black",
    width: "84%",
    alignItems: "center",
  }
});
