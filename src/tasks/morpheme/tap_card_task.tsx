//

import { Dimensions } from 'react-native';

import * as Speech from 'expo-speech';

import { IconButton, SpeechCard } from '../../components';

type Props = {
  instruction?: string;
  picture?: string;
  sentence?: string;
  next?: () => void;
};

export const MorphemeTapCardTask = (props: Props) => {
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
      <SpeechCard picture={props.picture} sentence={props.sentence} />
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
