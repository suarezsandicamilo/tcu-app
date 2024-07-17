//

import { useEffect, useRef, useState } from 'react';

import {
  Animated,
  Easing,
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
} from 'react-native';

import { Images } from './../../assets/images';

import { speak } from './../speech';

const styles = StyleSheet.create({
  container: {
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    borderRadius: 8,
    borderWidth: 1,
    height: 240,
    margin: 8,
    width: 240,
  },
});

type Props = {
  highlightColor?: string;
  image?: string;
  sentence?: string;
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
};

export const SpeechCard = (props: Props) => {
  const source = Images[props.image ?? '240x240'];

  const ref = useRef(new Animated.Value(0)).current;

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isAnimated) {
      Animated.sequence([
        Animated.timing(ref, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.timing(ref, {
          toValue: 0,
          duration: 750,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsAnimated(false);
      });
    }
  }, [ref, isAnimated]);

  return (
    <Pressable
      onPress={() => {
        speak(props.sentence)();

        if (props.onPress) {
          props.onPress();

          setIsAnimated(true);
        }
      }}
    >
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: ref.interpolate({
              inputRange: [0, 1],
              outputRange: ['#ffffff00', props.highlightColor ?? '#c8e6c9ff'],
            }),
          },
        ]}
      >
        <Image source={source} style={[styles.image, props.style]} />
      </Animated.View>
    </Pressable>
  );
};
