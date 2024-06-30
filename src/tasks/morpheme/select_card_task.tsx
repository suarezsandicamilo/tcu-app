//

import { StyleSheet, View } from 'react-native';

import * as Speech from 'expo-speech';

import { IconButton, SpeechCard } from '../../components';

import { shuffle } from './../../util';

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 120,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

type Props = {
  instruction?: string;
  options?: {
    id: string;
    correct?: boolean;
    picture?: string;
    sentence?: string;
  }[];
  next?: () => void;
};

export const MorphemeSelectCardTask = (props: Props) => {
  const options = shuffle(props.options ?? []);

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
      <View style={styles.container}>
        {options.map((option) => {
          return (
            <SpeechCard
              key={option.id}
              picture={option.picture}
              sentence={option.sentence}
              style={styles.card}
              onPress={async () => {
                if (option.correct) {
                  Speech.speak('Correcto', {
                    language: 'es',
                    onDone: () => {
                      if (props.next) {
                        props.next();
                      }
                    },
                  });
                } else {
                  Speech.speak('Incorrecto', {
                    language: 'es',
                  });
                }
              }}
            />
          );
        })}
      </View>
    </>
  );
};
