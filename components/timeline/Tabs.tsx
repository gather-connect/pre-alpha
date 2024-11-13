// FIXME: replace flatlist with flashlist
// FIXME: move items array to separate file
// FIXME: migrate color in card icon to mutedWhite in theme

import { Theme } from '@/constants/Theme';

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';

import Tab from '@/components/ui/Tab';
import { categories } from '@/components/timeline/data/categories';

const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.25, 200);

export default function Tabs() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={styles.container}>
        <View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {categories.map(({ icon, color, category }, index) => (
              <Tab
                title={category}
                color={color}
                icon={icon}
                onPress={() => console.log('Card pressed')}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "4%",
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  listContent: {
    padding: "2%",
  },
});
