//

import { Image, Pressable, StyleSheet } from 'react-native';

import * as Speech from 'expo-speech';

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
  picture?: number;
  sentence?: string;
};

export const SpeechCard = (props: Props) => {
  return (
    <Pressable
      onPress={() => {
        Speech.speak(props.sentence ?? '', {
          language: 'es',
        });
      }}
    >
      <Image source={props.picture} style={styles.image} />
    </Pressable>
  );
};
