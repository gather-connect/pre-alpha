// TODO: adjust styling of text input to match pressables on options page
// TODO: add checkbox for terms of service
// TODO: use setUsername hook for alt auth method
// FIXME: replace stylesheet with nativewind

import { Theme } from "@/constants/Theme";

import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView
} from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";

import EmailAuthProvider from "@/services/auth/email";
import Button from "@/components/ui/Button";

export default function Login() {
  const emailAuthProvider = EmailAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome back</Text>
        </View>
        <TextInput
          style={styles.textInput}
          maxLength={28}
          placeholder="Username or Email"
          value={email}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          maxLength={12}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="oneTimeCode"
          value={password}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={tw`text-xl font-semibold`}>
          New?
          <Link href={"/signup_options"} style={tw`text-blue-500`}>
            {" "}
            Register{" "}
          </Link>
        </Text>
        <Button
          text="Login"
          onPress={() => {
            emailAuthProvider.handleSignIn(email, password);
          }} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "60%",
  },
  title: {
    fontSize: 28,
    fontFamily: Theme.fonts.medium,
    textAlign: "center",
    color: "black",
  },
  text: {
    fontSize: 24,
    fontFamily: Theme.fonts.semibold,
    textAlign: "center",
    color: Theme.background.white,
  },
  textContainer: {
    flexDirection: "column",
    marginVertical: "26%",
  },
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
  btn: {
    backgroundColor: Theme.primary.blue,
    width: "92%",
    height: "16%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    marginVertical: "60%",
  }
});
