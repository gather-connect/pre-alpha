// TODO: adjust styling of text input to match pressables on options page
// TODO: add checkbox for terms of service
// FIXME: replace styling with percentage-based values
// FIXME: replace ToS url with deep link to TOS page

import { Theme } from "@/constants/Theme";

import React, { useState } from "react";
import tw from "twrnc";
import {
  Pressable,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";

import EmailAuthProvider from "@/services/auth/email";
import Button from "@/components/ui/Button";

export default function SignUp() {
    const emailAuthProvider = EmailAuthProvider();
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [alias, setAlias] = useState("");
    
    const userSignUp = () => {
      const userData = {
        alias,
        email,
        password,
        passwordConfirm,
      };
      emailAuthProvider.handleSignUp(userData);
    };

    return (
        <SafeAreaView style={tw`flex flex-col justify-center items-center`}>
            <View style={tw`flex-row justify-between items-center gap-4 my-16`}>
                <Text style={styles.title}>Create account</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              value={alias}
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setAlias(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={email}
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="oneTimeCode"
              value={password}
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry={true}
              textContentType="oneTimeCode"
              value={passwordConfirm}
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setPasswordConfirm(text)}
            />
            <Text style={tw`text-xl mb-32 font-semibold`}>
              Have an account?
              <Link href="/login_options" style={tw`text-blue-500`}>
                {" "}
                Login{" "}
              </Link>
            </Text>                    
            <Button
              text="Signup"
              onPress={() => {
                userSignUp();
              }} /> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontFamily: Theme.fonts.medium,
    textAlign: "center",
    color: "black",
  },
  text: {
    fontSize: 12,
    fontFamily: Theme.fonts.semibold,
    color: "black",
    textAlign: "center",
    paddingVertical: 2,
  },
  textInput: {
    fontSize: 20,
    borderRadius: 8,
    fontWeight: "semibold",
    backgroundColor: "#e5e7eb",
    color: "black",
    width: "92%",
    height: "10%",
    paddingLeft: "8%",
    marginVertical: 8,
  },
});
