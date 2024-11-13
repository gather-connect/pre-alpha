// FIXME: prop types and their values (image assets)

import { ImageSourcePropType } from 'react-native';

export interface EventType {
  name: string;
  image: ImageSourcePropType;
  titleImage: ImageSourcePropType;
  posted: string;
  languages: string;
  category: string;
}

export const events: EventType[] = [
  {
    name: 'Loki',
    image: require('@/assets/images/carousel/Loki.png'),
    titleImage: require('@/assets/images/carousel/LokiTitle.png'),
    posted: '2023',
    languages: 'English',
    category: 'Action',
  },
  {
    name: 'Luca',
    image: require('@/assets/images/carousel/Luca.png'),
    titleImage: require('@/assets/images/carousel/LucaTitle.png'),
    posted: '2021',
    languages: '6 Languages',
    category: 'Family - Comedy',
  },
  {
    name: 'Guardian Of Galaxy Vol.3',
    image: require('@/assets/images/carousel/Guardian.png'),
    titleImage: require('@/assets/images/carousel/GuardianTitle.png'),
    posted: '2023',
    languages: 'English',
    category: 'Action - Superhero',
  },
  {
    name: 'Elemental',
    image: require('@/assets/images/carousel/Elemental.png'),
    titleImage: require('@/assets/images/carousel/ElementalTitle.png'),
    posted: '2023',
    languages: '2 Languages',
    category: 'Comedy - Kids',
  },
  {
    name: 'The Little Mermaid',
    image: require('@/assets/images/carousel/Mermaid.png'),
    titleImage: require('@/assets/images/carousel/MermaidTitle.png'),
    posted: '2023',
    languages: 'English',
    category: 'Family - Musical',
  },
];

