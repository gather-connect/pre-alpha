// TODO: replace textinput with dropdown selection (or nothing at all, leave as view)
// TODO: ensure that the university reflected in view is dynamic & fetches from user information
// TODO: add routes for code verification, archived posts, and new event
// FIXME: migrate authenticated routes into a group and put in business logic

import { Theme } from '@/constants/Theme';

import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { User, Plus, BellSimple, CardsThree, Ticket, Scan } from "phosphor-react-native";
import { View, Button, Text, StyleSheet, Pressable, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { BlurView } from "expo-blur";
import { Link } from 'expo-router';
import { ArrowUpRight } from 'phosphor-react-native';
import { toast } from 'sonner-native';
import tw from 'twrnc';

export default function Footer() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    // Request camera permission when the component mounts
    requestPermission();
  }, []);

  const handleCameraPermission = async () => {
      const permission = await Camera.requestPermissionsAsync();
      setCameraPermission(permission);
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <BlurView 
      style={[styles.blur], { paddingBottom: "4%" }}
      intensity={10}>
      <View style={styles.container}>         
        <View style={styles.btnArray}>
          <Link href={'/(protected)/settings/'} asChild>
            <Pressable>
              <User size={24} weight="bold" color={Theme.background.white} />
            </Pressable>
          </Link>
          <Link href={'/(protected)/(modals)/archive/'} asChild>
            <Pressable>
              <CardsThree size={24} weight="bold" color={Theme.background.white} />
            </Pressable>
          </Link>
          <Link href={'/(protected)/(modals)/dash/'} asChild>
            <Pressable>
              <Ticket size={24} weight="bold" color={Theme.background.white} />
            </Pressable>
          </Link>
        </View>
        <View style={tw`flex-row gap-4`}>
          <Pressable style={styles.circle}>
            <Scan size={24} weight="bold" color={Theme.background.white} />
          </Pressable>
        <Link href={'/(protected)/(modals)/new_event/'} asChild>
          <Pressable style={styles.circle}>
            <Plus size={24} weight="bold" color={Theme.background.white} />
          </Pressable>
        </Link>
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blur: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  container: {
    gap: 60,
    height: 96,
    backgroundColor: Theme.background.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: "4%",
  },
  btn: {
    gap: 12,
    width: "84%",
    height: "84%",
    paddingHorizontal: "12%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Theme.primary.lakeBlue,
    borderRadius: 9999,
  },
  btnText: {
    color: Theme.primary.mutedBlue,
    fontSize: 16,
    fontFamily: Theme.fonts.semibold,
    textAlign: 'center',
    justifyContent: 'center',
  },
  btnArray: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.primary.blue,
    borderRadius: 9999,
  },
  text: {
    color: Theme.secondary.dark,
    fontSize: 16,
    fontFamily: Theme.fonts.semibold,
    paddingHorizontal: 4
  },
  image: {
    width: 24,
    height: 24,
  },
  circle: {
    width: 68,
    height: 68,
    borderRadius: 9999,
    backgroundColor: Theme.primary.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

