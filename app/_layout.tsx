// WARNING: DO NOT EDIT THIS FILE
// TODO: add secondary layout after moving authenticated routes into a group and put in business logic
// TODO: prepare function to handle API calls, etc. prior to rendering app content
// FIXME: handling of stack pushes are glitchy
// FIXME: ensure that users can not use native gestures to return to auth routes

import Theme from '@/constants/Theme';
import '@/global.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from 'react';
import { Stack } from 'expo-router'; 
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

import { Toaster } from 'sonner-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import Navigator from '@/components/navigation/Navigator'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
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
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Navigator />
          <Toaster 
            richColors={true}
          /> 
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default RootLayout;
