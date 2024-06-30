//

import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
} from 'react-native';

import * as Speech from 'expo-speech';

import { Pictures } from './../../assets/pictures';

const styles = StyleSheet.create({
  image: {
    borderColor: '#bfbfbf',
    borderRadius: 8,
    borderWidth: 1,
    height: 240,
    margin: 8,
    width: 240,
  },
});

type Props = {
  picture?: string;
  sentence?: string;
  style?: StyleProp<ImageStyle>;
};

export const SpeechCard = (props: Props) => {
  const source = Pictures[props.picture ?? '240x240'];

  return (
    <Pressable
      onPress={() => {
        Speech.speak(props.sentence ?? '', {
          language: 'es',
        });
      }}
    >
      <Image source={source} style={[styles.image, props.style]} />
    </Pressable>
  );
};
