import { Theme } from '@/constants/Theme';

import React, { useRef, useState, useCallback } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { PageIndicator } from 'react-native-page-indicator';
import tw from 'twrnc';

import { CaretRight } from 'phosphor-react-native'; 
import { pages } from '@/components/onboarding/pages';
import Button from '@/components/onboarding/primitives/Button';

export default function Onboarding() {
  indicatorSize = 12;

  const { width, height } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollRef = useRef<ScrollView>(null);
  const animatedCurrent = useRef(Animated.divide(scrollX, width)).current;

  const [current, setCurrent] = useState(0);

  const handleScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / width);
      if (index !== current) {
        setCurrent(index);
      }
    },
    [width, current],
  );

  return (
    <View style={styles.root}>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
      >
        {pages.map((page, index) => (
          <View key={index} style={[styles.page, { width, height }]}>
            {page} 
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View style={styles.pageIndicator}>
          <PageIndicator size={indicatorSize} dashSize={indicatorSize * 2} count={pages.length} current={animatedCurrent} />  
        </View>
        <Button index={current} scrollRef={scrollRef} /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageIndicator: {
    left: 4,
    right: 4,
    alignItems: 'start',
    justifyContent: 'center',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  btn: {
    backgroundColor: Theme.primary.blue, 
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 9999,
    width: 60,
    height: 60,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
    gap: 160
  }
});
