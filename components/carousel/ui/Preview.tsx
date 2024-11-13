import { Theme } from '@/constants/Theme';

import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { ArrowUpRight } from 'phosphor-react-native';

const Preview = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Preview</Text>
      <ArrowUpRight size={20} weight="bold" color={Theme.background.white}/>
    </TouchableOpacity>
  );
};

export default Preview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.primary.blue,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

