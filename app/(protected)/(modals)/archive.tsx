// TODO: replace styling to match rest of app
// FIXME: migrate app icons from feather to phosphor

import { Theme } from '@/constants/Theme';

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Notifications() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: Theme.background.white }}>
        <View style={styles.container}>
          <View style={styles.empty}>
            <View style={styles.blank}>
              <View style={styles.blankCircle} />
              <View>
                <View style={[styles.blankLine, { width: 120 }]} />
                <View style={styles.blankLine} />
                <View
                  style={[
                    styles.blankLine,
                    { width: 80, marginBottom: 0 },
                  ]} />
              </View>
            </View>

            <View style={[styles.blank, { opacity: 0.5 }]}>
              <View style={styles.blankCircle} />

              <View>
                <View style={[styles.blankLine, { width: 120 }]} />
                <View style={styles.blankLine} />
                <View
                  style={[
                    styles.blankLine,
                    { width: 80, marginBottom: 0 },
                  ]} />
                </View>
              </View>

            <Text style={styles.emptyTitle}>
              Nothing to see here!
            </Text>

            <Text style={styles.emptyDescription}>
              Once you post some verified events, they will be waiting for you here
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  empty: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
    marginTop: 12,
  },
  emptyDescription: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#8c9197',
    textAlign: 'center',
    marginHorizontal: "8%"
  },
  blank: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  blankCircle: {
    width: 44,
    height: 44,
    borderRadius: 9999,
    backgroundColor: '#e8e9ed',
    marginRight: 16,
  },
  blankLine: {
    width: 200,
    height: 10,
    borderRadius: 4,
    backgroundColor: '#e8e9ed',
    marginBottom: 8,
  },
});
