// TODO: configure developer account & implement this provider
// TODO: remove useFonts from the top of call stack (place after functional code)

import { View, Text, Pressable, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as WebBrowser from 'expo-web-browser';
import tw from 'twrnc';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

WebBrowser.maybeCompleteAuthSession();

export default function FacebookOAuthProvider() {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
    <View style={tw`flex-row justify-center items-center`}> 
        <Pressable style={styles.pressable}>
            <FontAwesome6 name="facebook" size={32} color="black" style={styles.icon} />
            <Text style={styles.text}>Facebook</Text>
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
    marginHorizontal: 32,
  }
});
