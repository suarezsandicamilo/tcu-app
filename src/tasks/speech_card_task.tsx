//

import { Dimensions } from 'react-native';

import * as Speech from 'expo-speech';

import { IconButton, SpeechCard } from '../components';

type Props = {
  instruction?: string;
  sentence?: string;
  next?: () => void;
};

export const SpeechCardTask = (props: Props) => {
  return (
    <>
      <IconButton
        name='info'
        onPress={() => {
          Speech.speak(props.instruction, {
            language: 'es',
          });
        }}
      />
      <SpeechCard
        picture={require(`./../../assets/pictures/240x240.png`)}
        sentence={props.sentence}
      />
      <IconButton
        name='arrow-right'
        onPress={() => {
          if (props.next) {
            props.next();
          }
        }}
        style={{
          height: 60,
          width: Dimensions.get('screen').width - 64,
        }}
      />
    </>
  );
};
