/* eslint-disable react-native/no-inline-styles */

// FIXME: color scheme needs to be gray for light mode

import { StyleSheet, View, ViewToken, useWindowDimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { SystemBars } from "react-native-edge-to-edge";

import { events } from '@/components/carousel/events';

import TextInfo from '@/components/carousel/animated/TextInfo';
import Pagination from '@/components/carousel/animated/Pagination';
import BackImage from '@/components/carousel/animated/BackImage';
import RenderItem from '@/components/carousel/animated/RenderItem';

import Gradient from '@/components/carousel/ui/Gradient';
import Preview from '@/components/carousel/ui/Preview';
import Share from '@/components/carousel/ui/Share';


export default function Carousel() {
  const x = useSharedValue(0);
  const [data, setData] = useState(events);
  const {width} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const interval = useRef<NodeJS.Timeout>();
  const offset = useSharedValue(0);

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setCurrentIndex(viewableItems[0].index);
      setPaginationIndex(viewableItems[0].index % events.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      x.value = e.contentOffset.x;
    },
    onMomentumEnd: e => {
      offset.value = e.contentOffset.x;
    },
  });

  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true);
  });

  useEffect(() => {
    if (isAutoPlay === true) {
      interval.current = setInterval(() => {
        offset.value = offset.value + width;
      }, 4000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [isAutoPlay, offset, width]);

  return (
    <View style={styles.container}>
      {/* If you're not using react-native-bars, you can remove SystemBars */}
      <SystemBars animated={true} barStyle={'light-content'} />

      {/* <StatusBar translucent backgroundColor={'transparent'} /> */}
      {data.map((item, index) => {
        return (
          <View key={index}>
            {currentIndex === index && (
              <BackImage index={index} item={item} x={x} />
            )}
          </View>
        );
      })}
      <Gradient />
      <Animated.FlatList
        ref={ref}
        style={{height: width, flexGrow: 0}}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true);
        }}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([...data, ...events])}
        onEndReachedThreshold={0.5}
        data={data}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} x={x} />;
        }}
      />
      {data.map((item, index) => {
        return (
          <View key={index}>
            {currentIndex === index && (
              <TextInfo item={item} index={index} x={x} />
            )}
          </View>
        );
      })}
      <View style={styles.button}>
        <Preview />
        <Share />
      </View>
      <Pagination paginationIndex={paginationIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1014',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
});

