// FIXME: icon components should be mapped to either feather or phosphor

import { Theme } from '@/constants/Theme';

import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ViewStyle,
  TextStyle,
  Dimensions 
} from 'react-native';
import { Image } from 'expo-image';

const TAB_WIDTH = Math.min(Dimensions.get('screen').width * 0.4, 160);
const TAB_HEIGHT = Math.min(Dimensions.get('screen').height * 0.1, 60);

interface CardProps {
  label: string;
  icon: string;
  onPress: () => void;
}

export default function Tab({ title, icon, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={[styles.tab]}>
        <Image
          style={{ width: 28, height: 28 }}
          source={icon}/>
        <Text style={styles.tabLabel}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    gap: 12,
    width: TAB_WIDTH,
    height: TAB_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.background.white,
    flexDirection: 'row',
    borderRadius: 9999,
    marginHorizontal: 8,
  },
  tabLabel: {
    fontSize: 16,
    fontFamily: Theme.fonts.semibold,
    textAlign: 'center',
    lineHeight: 20,
  }
});
