// TODO: single post (indexed by id) containing upcoming events, details, etc.

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";

export default function Post() {
  return (
    <>
      <View>
        <Text style={styles.title}>Post</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
