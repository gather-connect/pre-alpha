import { StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
  index: number;
  paginationIndex: number;
};

export default function Indicator({index, paginationIndex}: Props) {
  return (
    <View style={paginationIndex === index ? styles.indicator : styles.indicatorOpacity} />
  );
};

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: 'white',
    height: 12,
    width: 24,
    marginHorizontal: 2,
    borderRadius: 8,
  },
  indicatorOpacity: {
    backgroundColor: 'white',
    height: 12,
    width: 12,
    marginHorizontal: 2,
    borderRadius: 8,
    opacity: 0.5,
  },
});

