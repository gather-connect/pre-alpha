// TODO: write oauth data to pb
// TODO: convert alert into a toast
// TODO: remove getUserInfo()
// FIXME: issue with oauth--modify handleToken to resolve response issue

import { useEffect, useState } from 'react';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import useSignUp from "@/hooks/useSignUp";
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
import pb from '@/pb.config';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleOAuthProvider() {
  const router = useRouter();
  const isSignUp = useSignUp(state => state.isSignUp);
  const [userInfo, setUserInfo] = useState(null);
  
  const config = {
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  }

  const [request, response, promptAsync] = Google.useAuthRequest(config); 
  
  useEffect(() => {
     handleToken();    
  }, [response]);

  /*
  const handleToken = async() => {
    const user = await AsyncStorage.getItem("@user");

    if (!user) {
      if (response?.type === "success") {
        const token = response.authentication.accessToken;
        await getUserInfo(token);

        console.log("access token", token); 
        console.log("user info", JSON.stringify(userInfo));

        if (!userInfo) {
          console.log("userInfo is null");
          return;
        }

        try {
          const data = {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.id,
            password_confirmation: userInfo.id,
          }

          await pb.collection("users").create(data);

          if (isSignUp === true) {
            router.navigate("/auth/Intro");
          }
          else {
            router.navigate("/events");
          }
        } catch (error) {
          alert("There was an error authenticating with Google. Please try again.");
          console.log(error.message);
        }
      } 
    } else {
      setUserInfo(JSON.parse(user));
    }   
  }
  */

    const handleToken = () => {
        if (response?.type === "success") {
            const { authentication } = response;
            const token = authentication?.accessToken;

            console.log("access token", token);
            
            try {
              // await pb.collection("users").create(data);
              if (isSignUp === true) {
                router.navigate("/(auth)/intro/");
              }
              else {
                router.navigate("/(protected)/");
              }
            } catch (error) {
                alert("There was an error authenticating with Google. Please try again.");
                console.log(error.message);
            }
        }   
    }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));

      setUserInfo(user);
    } catch (error) {
      alert("There was an error fetching your Google account info. Please try again.");
      console.log(error.message);
    }
  } 

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
   <View style={tw`flex-row justify-center items-center`}> 
      <Pressable style={styles.pressable} onPress={() => promptAsync()}>
          <FontAwesome6 name="google" size={32} color="black" style={styles.icon} />
          <Text style={styles.text}>Google</Text>
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
