import { Theme } from '@/constants/Theme';

import React from 'react';
import tw from 'twrnc';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ViewStyle,
  TextStyle,
  Dimensions 
} from 'react-native';

const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.6, 600);
const CARD_HEIGHT = Math.min(Dimensions.get('screen').height * 0.4, 400);

interface CardProps {
  label: string;
  image: string;
  category: string;
  date: string;
  onPress: () => void;
}

export default function Card({ title, image, category, date, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.card}>
        <View style={styles.cardTop}>

        </View>

        <View style={styles.cardFooter}>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
          <View style={tw`flex flex-row gap-2`}>
            <Text style={styles.cardFooterText}>{category}</Text>
            <Text style={styles.cardFooterText}>{date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginBottom: "8%",
    marginTop: "4%",
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBody: {
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: Theme.fonts.semibold,
    lineHeight: 20,
    color: '#121a26',
    marginBottom: "4%",
  },
  cardSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#778599',
  },
  cardFooter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: "96%",
  },
  cardFooterText: {
    fontSize: 12,
    fontFamily: Theme.fonts.medium,
    lineHeight: 16,
    textAlign: 'center',
    color: '#778599',
  },
});
