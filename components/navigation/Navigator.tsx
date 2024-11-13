// TODO: add role-based routing
// FIXME: protected routes must operate under after using isAuth hook

import { Theme } from '@/constants/Theme';

import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Pressable, ActivityIndicator, StyleSheet, Text } from 'react-native';

import { CaretLeft, X } from "phosphor-react-native";

const Navigator = () => {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login_options"
        options={{           
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerLeft: () => (
            <Pressable onPress={router.back}>
              <CaretLeft size={32} color="black" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="signup_options"
        options={{ 
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerLeft: () => (
            <Pressable onPress={router.back}>
              <CaretLeft size={32} color="black" />
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/intro"
        options={{ 
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="(auth)/forms"
        options={{ 
            headerShown: false,
            gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="(auth)/index"
        options={{ 
            headerShown: false,
            gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="(auth)/reset_password"
        options={{ 
            headerShown: false,
            gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="(protected)/timeline"
        options={{ 
          headerShown: false, 
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="(protected)/(modals)/appearance"
        options={{ 
          headerShown: true, 
          presentation: 'modal',
          title: 'Appearance',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/(modals)/archive"
        options={{
          headerShown: true,
          presentation: 'modal',
          title: 'Archive',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/(modals)/integrations"
        options={{
          headerShown: true,
          presentation: 'modal',
          title: 'Integrations',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/(modals)/profile"
        options={{ 
          headerShown: true, 
          presentation: 'modal',
          title: 'My Profile',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text> 
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/(modals)/settings"
        options={{ 
          headerShown: true, 
          presentation: 'modal',
          title: 'Account',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/(modals)/dash"
        options={{ 
          headerShown: true,
          presentation: 'modal',
          title: 'Your Events',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/(modals)/verify"
        options={{ 
          headerShown: true,
          presentation: 'modal',
          title: 'Scan QR',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/(modals)/new_event"
        options={{ 
          headerShown: true,
          presentation: 'modal',
          title: 'New Event',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/events/this_week"
        options={{ 
          headerShown: true,
          presentation: 'modal',
          title: 'This Week',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/events/parties"
        options={{ 
          headerShown: true,
          presentation: 'modal',
          title: 'Parties',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/events/nightlife"
        options={{ 
          headerShown: true,
          presentation: 'modal',
          title: 'Nightlife',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="(protected)/events/socials"
        options={{ 
          headerShown: true,
          presentation: 'modal',
          title: 'Socials',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: Theme.fonts.semibold,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.secondary.mutedLightGray },
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text style={styles.text}>
                Done
              </Text>
            </Pressable>
          ), 
        }}
      />
    </Stack>
  );
}

export default Navigator;

const styles = StyleSheet.create({
  text: {
      fontFamily: "Poppins_600SemiBold",
      color: Theme.primary.mutedBlue,
      fontSize: 16,
  },
});

