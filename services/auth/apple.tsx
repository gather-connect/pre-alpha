// TODO: add backend logic for this provider 

import { View, Text, Pressable, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as WebBrowser from 'expo-web-browser';
import tw from 'twrnc';

WebBrowser.maybeCompleteAuthSession();

export default function AppleOAuthProvider() {
    return (
      <View style={tw`flex-row justify-center items-center`}> 
        <Pressable style={styles.pressable}>
            <FontAwesome6 name="apple" size={36} color="black" style={styles.icon} />
            <Text style={styles.text}>Apple</Text>
        </Pressable> 
      </View>
    );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "white",
    marginVertical: 8,
    width: "92%",
    height: 88,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: "black",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 36,
  }
});
