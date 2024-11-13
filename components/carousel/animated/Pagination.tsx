import { StyleSheet, View } from 'react-native';
import React from 'react';

import { events } from '../events';
import Indicator from '@/components/carousel/ui/Indicator';

type Props = {
  paginationIndex: number;
};

const Pagination = ({paginationIndex}: Props) => {
  return (
    <View style={styles.container}>
      {events.map((_, index) => {
        return (
          <Indicator index={index} key={index} paginationIndex={paginationIndex} />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
