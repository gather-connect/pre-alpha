import { Theme } from "@/constants/Theme";

import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import tw from "twrnc";

import EmailAuthProvider from "@/services/auth/email";

export default function ResetPassword() {
  const emailAuthProvider = EmailAuthProvider();
  const [email, setEmail] = useState("");

  return (
    <>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.text}>
            Enter your email and we'll send you a link to reset your password
          </Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={tw`text-xl mb-68 font-semibold`}>
          <Link href="/(auth)/" style={tw`text-blue-500`}>
            {" "}
            Take me home{" "}
          </Link>
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            emailAuthProvider.forgotPassword(email)
          }
        >
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            Reset password
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "column",
    justifyContent: "between",
    alignItems: "center",
    paddingVertical: "12%",
  },
  title: {
    fontSize: 28,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    color: "black",
    marginVertical: "20%",
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "start",
    paddingHorizontal: "6%",
  },
  textInput: {
    fontSize: 20,
    borderRadius: 8,
    fontWeight: "semibold",
    backgroundColor: "#e5e7eb",
    color: "black",
    width: "88%",
    height: "8%",
    paddingLeft: "8%",
    marginVertical: "4%",
  },
  btn: {
    backgroundColor: Theme.primary.blue,
    width: "92%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
  }
});
