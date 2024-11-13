// TODO: timeline page

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import Footer from '@/components/navigation/Footer';
import Carousel from '@/components/carousel/Carousel';
import Tabs from '@/components/timeline/Tabs';
import CardView from '@/components/timeline/CardView';
// import StickyView from '@/components/timeline/StickyView';

export default function Timeline() {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel />
        <Tabs />
        <CardView />
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
