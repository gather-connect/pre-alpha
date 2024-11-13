// TODO: animated view for button--replaces caret with wording after last step is complete
// TODO: error handling for empty fields (no option selected)

import { Theme } from '@/constants/Theme';

import React, { useRef } from 'react';
import { Animated, TouchableOpacity, useWindowDimensions, ScrollView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

import { CaretRight } from "phosphor-react-native"; 
import { pages } from '@/components/onboarding/pages';

type Props = {
  index: number;
  scrollRef: RefObject<ScrollView>;
};

const Button = ({ index, scrollRef }: Props) => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  
  nextScreen = () => {
    scrollRef.current?.scrollTo({x: (index + 1) * width, y: 0, animated: true})

    if (index === pages.length - 1) {
      router.navigate("(protected)/timeline");
    }
  }

  return (
    <TouchableOpacity style={styles.btn} onPress={nextScreen}>
      <CaretRight size={32} color="white" />
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Theme.primary.blue,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 9999,
    width: 60,
    height: 60,
  },
});
