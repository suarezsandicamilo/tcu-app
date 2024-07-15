//

import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
} from 'react-native';

import { Images } from './../../assets/images';

import { speak } from './../speech';

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
  image?: string;
  sentence?: string;
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
};

export const SpeechCard = (props: Props) => {
  const source = Images[props.image ?? '240x240'];

  return (
    <Pressable
      onPress={() => {
        speak(props.sentence)();

        if (props.onPress) {
          props.onPress();
        }
      }}
    >
      <Image source={source} style={[styles.image, props.style]} />
    </Pressable>
  );
};
