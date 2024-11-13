import { Alert } from "react-native";
import { API_URL } from "./stripe.config";

export async function fetchPublishableKey() {
  try {
    const response = await fetch(`${API_URL}/config`);
    const publishableKey = await response.json();
    return publishableKey;
  } catch (error) {
    console.log(error);
    console.warn("Error fetching publishable key, is your server running?");
    Alert.alert(
      "Error",
      "Unable to fetch publishable key. Is your server running?",
    );
  }
}
