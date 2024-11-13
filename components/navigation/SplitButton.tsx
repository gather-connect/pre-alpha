import { Theme } from "@/constants/Theme";

import tw from "twrnc";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

import useSignUp from "@/hooks/useSignUp";

export default function SplitButton() {
  const router = useRouter();
  const setIsSignUp = useSignUp(state => state.setIsSignUp);
  const isSignUp = useSignUp(state => state.isSignUp); 

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Pressable
            style={styles.signupBtn}
            onPress={() => {
              router.push("/signup_options/")
              setIsSignUp(!isSignUp);

              console.log("isSignUp", isSignUp);
            }}
          >
          <Text style={styles.text}>Sign Up</Text>
          </Pressable>
          <Pressable
            style={styles.loginBtn}
            onPress={() => {
              router.push("/login_options/")
            }}
          >
            <Text style={styles.text}>Login</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    lineHeight: 44,
    color: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  signupBtn: {
    backgroundColor: Theme.secondary.lightGray,
    width: "52%",
    height: "84%",
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  loginBtn: {
    backgroundColor: Theme.primary.blue,
    width: "40%",
    height: "84%",
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
