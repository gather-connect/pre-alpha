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

import Card from '@/components/ui/Card';
import { primary } from '@/components/timeline/data/primary';
import { secondary } from '@/components/timeline/data/secondary';

export default function CardView() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={styles.container}>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>This Week</Text>

            <TouchableOpacity
              onPress={() => {
                router.navigate('/(protected)/events/this_week');
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {primary.map(({ image, title, category, date }, index) => (
              <Card
                title={title}
                image={image}
                category={category}
                date={date}
                onPress={() => console.log('Card pressed')}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Celebrations</Text>

            <TouchableOpacity
              onPress={() => {
                router.navigate('/(protected)/events/parties');
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {secondary.map(({ image, title, category, date }, index) => (
              <Card
                title={title}
                image={image}
                category={category}
                date={date}
                onPress={() => console.log('Card pressed')}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>After Hours</Text>

            <TouchableOpacity
              onPress={() => {
                router.navigate('/(protected)/events/nightlife');
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {primary.map(({ image, title, category, date }, index) => (
              <Card
                title={title}
                image={image}
                category={category}
                date={date}
                onPress={() => console.log('Card pressed')}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Socials</Text>

            <TouchableOpacity
              onPress={() => {
                router.navigate('/(protected)/events/socials'); 
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {secondary.map(({ image, title, category, date }, index) => (
              <Card
                title={title}
                image={image}
                category={category}
                date={date}
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
    paddingVertical: "8%",
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  listTitle: {
    fontSize: 20,
    fontFamily: Theme.fonts.semibold,
    lineHeight: 24,
    color: '#121a26',
  },
  listAction: {
    fontSize: 16,
    fontFamily: Theme.fonts.medium,
    lineHeight: 20,
    color: '#778599',
  },
  listContent: {
    paddingVertical: "4%",
    paddingHorizontal: "2%",
  },
});
